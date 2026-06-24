import React from 'react';
import { Menu, Moon, Sun, Bell, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Topbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 flex items-center justify-between px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 transition-colors">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 mr-4 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white lg:hidden">CineAdmin</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors relative">
          <span className="sr-only">View notifications</span>
          <Bell className="h-6 w-6" aria-hidden="true" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white dark:ring-gray-800" />
        </button>
        
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
        >
          <span className="sr-only">Toggle theme</span>
          {theme === 'dark' ? (
            <Sun className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Moon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <div className="relative">
          <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
            <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
              <User className="h-5 w-5" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
