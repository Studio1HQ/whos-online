'use client'

import { useState, useEffect } from 'react';
import { useVeltClient } from '@veltdev/react';
import { UserData } from '../types';
import { User } from '@veltdev/types';

const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const pastelSaturation = 70;
  const pastelLightness = 80;
  return `hsl(${hue}, ${pastelSaturation}%, ${pastelLightness}%)`;
};

const getContrastColor = (backgroundColor: string) => {
  const hsl = backgroundColor.match(/\d+/g)?.map(Number);
  if (!hsl) return '#000000';
  
  const lightness = hsl[2];
  return lightness > 70 ? '#000000' : '#ffffff';
};

export function UserAuth() {
  const { client } = useVeltClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAuthenticated(!!localStorage.getItem('userData'));
    }
  }, []);

  useEffect(() => {
    const initializeUser = async () => {
      if (typeof window === 'undefined') return;
      
      const savedUser = localStorage.getItem('userData');
      if (savedUser && client) {
        const userData: UserData = JSON.parse(savedUser);
        await client.identify(userData as User);
        client.setDocument('whos-online-wall', {documentName: 'Who\'s Online?'});
      }
    };

    if (client) {
      initializeUser();
    }
  }, [client]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    if (!name || !email || !client) return;

    const backgroundColor = generateRandomColor();
    const userData: UserData = {
      userId: email,
      name,
      email,
      color: backgroundColor,
      textColor: getContrastColor(backgroundColor)
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
    await client.identify(userData as User);
    client.setDocument('whos-online-wall', {documentName: 'Who\'s Online?'});
    setIsAuthenticated(true);
  };

  if (isAuthenticated) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 border border-gray-100 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
          Welcome! 👋
          <span className="block text-lg font-normal mt-2 text-gray-600 dark:text-gray-300">
            Please introduce yourself
          </span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 
                       px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-colors duration-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 
                       px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-colors duration-200"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 
                     hover:bg-blue-700 transform hover:scale-[1.02]
                     transition-all duration-200 font-medium text-base
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     shadow-lg hover:shadow-xl"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
} 