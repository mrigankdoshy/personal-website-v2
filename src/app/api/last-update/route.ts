/* eslint-disable no-console */
import { NextResponse } from 'next/server';

export async function GET() {
  const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
  const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;
  const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID;

  if (!VERCEL_TOKEN || !VERCEL_TEAM_ID || !VERCEL_PROJECT_ID) {
    return NextResponse.json(
      { error: 'Missing Vercel configuration' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.vercel.com/v6/deployments?teamId=${VERCEL_TEAM_ID}&projectId=${VERCEL_PROJECT_ID}&limit=1&state=READY`,
      {
        headers: {
          Authorization: `Bearer ${VERCEL_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch deployment information');
    }

    const data = await response.json();
    const latestDeployment = data.deployments[0];

    if (!latestDeployment) {
      return NextResponse.json(
        { error: 'No deployments found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ lastUpdated: latestDeployment.ready });
  } catch (error) {
    console.error('Error fetching deployment information:', error);
    return NextResponse.json(
      { error: 'Failed to fetch deployment information' },
      { status: 500 }
    );
  }
}
