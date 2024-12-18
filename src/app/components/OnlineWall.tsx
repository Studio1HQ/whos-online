'use client'

import { useVeltClient, usePresenceUsers } from '@veltdev/react';
import { motion } from 'framer-motion';

export function OnlineWall() {
  const { client } = useVeltClient();
  const presenceUsers = usePresenceUsers();

  if (!client) return null;

  // Add loading state check
  if (!presenceUsers) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="relative">
          {/* Outer spinning ring with gradient */}
          <div className="w-16 h-16 rounded-full absolute animate-spin 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          ></div>
          {/* Inner white circle */}
          <div className="w-16 h-16 rounded-full absolute bg-background"></div>
          {/* Middle spinning ring with gradient */}
          <div className="w-12 h-12 rounded-full absolute top-2 left-2 animate-spin 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          ></div>
          {/* Inner white circle */}
          <div className="w-12 h-12 rounded-full absolute top-2 left-2 bg-background"></div>
          {/* Center dot with pulse effect */}
          <div className="w-8 h-8 rounded-full absolute top-4 left-4
            bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
          ></div>
        </div>
      </div>
    );
  }

  // Get current user data from localStorage
  const currentUserData = localStorage.getItem('userData');
  const currentUser = currentUserData ? JSON.parse(currentUserData) : null;

  // Sort users to put current user first
  const sortedUsers = presenceUsers?.sort((a, b) => {
    if (a.userId === currentUser?.userId) return -1;
    if (b.userId === currentUser?.userId) return 1;
    return 0;
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {sortedUsers?.map((user) => {
        const isCurrentUser = user.userId === currentUser?.userId;

        return (
          <motion.div
            key={user.userId}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            {isCurrentUser && (
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full z-10 shadow-lg">
                You
              </div>
            )}
            <div 
              className={`rounded-lg p-4 h-full shadow-lg transition-all duration-300 group-hover:shadow-xl
                ${isCurrentUser ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-background' : ''}`}
              style={{ 
                backgroundColor: user.color || '#f0f0f0',
                color: user.textColor || '#000000'
              }}
            >
              <div className="flex items-center space-x-3">
                {user.photoUrl ? (
                  <img 
                    src={user.photoUrl} 
                    alt={user.name}
                    className="w-12 h-12 rounded-full border-2 border-white/30"
                  />
                ) : (
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-2 border-white/30"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{user.name}</h3>
                  <p className="text-sm opacity-75 truncate">{user.email}</p>
                </div>
              </div>
              
              <div className="mt-3 flex items-center">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400 mr-2"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-sm">Online now</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}