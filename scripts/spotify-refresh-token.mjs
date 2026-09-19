/**
 * Mints a new SPOTIFY_REFRESH_TOKEN.
 *
 * Usage:  node spotify-refresh-token.mjs
 *
 * Requires SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET in .env, and the redirect
 * URI below registered in the Spotify app dashboard.
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const REDIRECT_URI =
  process.env.REDIRECT_URI ?? 'http://127.0.0.1:8080/callback';
const CALLBACK = new URL(REDIRECT_URI);
const PORT = Number(process.env.PORT || CALLBACK.port || 8888);
const SCOPES = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-top-read',
].join(' ');

const envPath = path.join(process.cwd(), '.env');
const env = Object.fromEntries(
  fs
    .readFileSync(envPath, 'utf8')
    .split('\n')
    .filter((l) => l.trim() && !l.startsWith('#'))
    .map((l) => {
      const i = l.indexOf('=');
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const CLIENT_ID = env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = env.SPOTIFY_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET in .env');
  process.exit(1);
}

const state = crypto.randomBytes(16).toString('hex');
const authUrl =
  'https://accounts.spotify.com/authorize?' +
  new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    scope: SCOPES,
    redirect_uri: REDIRECT_URI,
    state,
    show_dialog: 'true',
  });

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  if (url.pathname !== CALLBACK.pathname) {
    res.writeHead(404).end();
    return;
  }

  const error = url.searchParams.get('error');
  if (error) {
    res
      .writeHead(400, { 'Content-Type': 'text/plain' })
      .end(`Denied: ${error}`);
    console.error('\nAuthorization denied:', error);
    server.close();
    process.exit(1);
  }

  if (url.searchParams.get('state') !== state) {
    res.writeHead(400, { 'Content-Type': 'text/plain' }).end('State mismatch');
    console.error('\nState mismatch — aborting.');
    server.close();
    process.exit(1);
  }

  const code = url.searchParams.get('code');
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const body = await tokenRes.json();

  if (!tokenRes.ok || !body.refresh_token) {
    res
      .writeHead(500, { 'Content-Type': 'text/plain' })
      .end('Token exchange failed');
    console.error('\nToken exchange failed:', JSON.stringify(body, null, 2));
    server.close();
    process.exit(1);
  }

  res
    .writeHead(200, { 'Content-Type': 'text/html' })
    .end('<h2>Done — you can close this tab and return to the terminal.</h2>');

  console.log('\n=== SUCCESS ===');
  console.log('Granted scopes:', body.scope);
  console.log('\nSet this as SPOTIFY_REFRESH_TOKEN (.env and Vercel):\n');
  console.log(body.refresh_token);
  console.log('');

  server.close();
  process.exit(0);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Listening on ${REDIRECT_URI}`);
  console.log(
    `\nMake sure this exact redirect URI is registered in your Spotify app:\n  ${REDIRECT_URI}\n`
  );
  console.log('Then open this URL in your browser and approve:\n');
  console.log(authUrl);
  console.log('');
});
