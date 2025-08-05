'use client';

import { User, Bell, Globe, HelpCircle, LogOut } from 'lucide-react';
import { useState } from 'react';

const Aside= () => {
  const [activeTab, setActiveTab] = useState('profile');

  const menuItems = [
    { id: 'profile', label: 'Profile Settings', icon: <User size={18} /> },
    { id: 'notifications', label: 'Notification Preferences', icon: <Bell size={18} /> },
    { id: 'language', label: 'Language Preferences', icon: <Globe size={18} /> },
    { id: 'support', label: 'Help & Support', icon: <HelpCircle size={18} /> },
    { id: 'logout', label: 'Logout', icon: <LogOut size={18} /> },
  ];

  return (
    <aside className="w-full max-w-xs border-r border-gray-200 p-4">
      {menuItems.map((item) => {
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium transition ${
              isActive
                ? 'bg-active text-primary'
                : 'text-primary hover:bg-gray-100'
            }`}
          >
            <span className={`flex items-center gap-2 ${item.id=='logout'?`text-red-500`:``}`}>
              {item.icon}
              {item.label}
            </span>
            {item.id === 'logout' && <span className="text-primary text-lg"></span>}
          </button>
        );
      })}
    </aside>
  );
};

export default Aside;
