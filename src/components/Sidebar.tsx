import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Calendar as CalendarIcon, KanbanSquare, Film, Settings, BarChart2 } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Movies & Tickets', path: '/movies', icon: Film },
  { name: 'Reports', path: '/reports', icon: BarChart2 },
  { name: 'Calendar', path: '/calendar', icon: CalendarIcon },
  { name: 'Kanban', path: '/kanban', icon: KanbanSquare },
];

export function Sidebar({ open }: { open: boolean }) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto flex flex-col",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700 px-4">
        <Film className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-2" />
        <span className="text-xl font-bold text-gray-900 dark:text-white truncate">CineAdmin</span>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                )
              }
            >
              <item.icon
                className="mr-3 flex-shrink-0 h-6 w-6"
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white">
          <Settings className="mr-3 flex-shrink-0 h-6 w-6" />
          Settings
        </button>
      </div>
    </aside>
  );
}
