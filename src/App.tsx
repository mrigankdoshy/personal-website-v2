import '@/App.css';
import memoji from '@/assets/memoji.png';

export function App() {
  return (
    <>
      <div>
        <a href="https://mrigankdoshy.com" target="_blank">
          <img src={memoji} className="logo" alt="Memoji" />
        </a>
      </div>
      <h1>Mrigank Doshy</h1>
    </>
  );
}
