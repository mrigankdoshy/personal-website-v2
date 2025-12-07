'use client';

const getGreeting = () => {
  const currentHour = new Date().getHours();
  return currentHour >= 5 && currentHour < 12
    ? 'Good morning,'
    : currentHour >= 12 && currentHour < 17
      ? 'Good afternoon,'
      : currentHour >= 17 && currentHour < 23
        ? 'Good evening,'
        : 'Hello, night owl!';
};

export function Greeting() {
  return <span>{getGreeting()}</span>;
}
