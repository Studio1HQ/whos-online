'use client'

import { useState, useEffect } from 'react';
import { UserAuth } from './components/UserAuth';
import { OnlineWall } from './components/OnlineWall';
import { LogoutButton } from './components/LogoutButton';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('userData'));
  }, []);

  return (
    <div className="min-h-screen p-8">
      <UserAuth />
      {isAuthenticated && <LogoutButton />}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Who&apos;s Online?</h1>
        <p className="text-gray-600">See who else is currently browsing the website</p>
      </header>
      <OnlineWall />
    </div>
  );
}
