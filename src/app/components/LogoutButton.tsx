'use client'

import { useVeltClient } from '@veltdev/react';

export function LogoutButton() {
  const { client } = useVeltClient();

  const handleLogout = async () => {
    if (client) {
      await client.signOutUser();
      localStorage.removeItem('userData');
      window.location.reload();
    }
  };

  const isAuthenticated = !!localStorage.getItem('userData');
  if (!isAuthenticated) return null;

  return (
    <button
      onClick={handleLogout}
      className="fixed top-4 right-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 
                 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 
                 dark:hover:bg-gray-600 transition-colors duration-200 
                 flex items-center gap-2 shadow-sm"
    >
      <span>Logout</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    </button>
  );
} 