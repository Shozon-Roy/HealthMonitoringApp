import React from 'react';
import { Link } from 'wouter';

interface NavItem {
  icon: string;
  label: string;
  path: string;
  active?: boolean;
}

interface BottomNavigationProps {
  activeTab: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab }) => {
  const navItems: NavItem[] = [
    { icon: 'coronavirus', label: 'Covid-19', path: '/covid', active: activeTab === 'covid' },
    { icon: 'medical_services', label: 'Doctors', path: '/doctors', active: activeTab === 'doctors' },
    { icon: 'article', label: 'Articles', path: '/articles', active: activeTab === 'articles' },
    { icon: 'favorite_border', label: 'Health', path: '/health', active: activeTab === 'health' },
    { icon: 'person_outline', label: 'Profile', path: '/profile', active: activeTab === 'profile' }
  ];

  return (
    <div className="flex justify-between px-2 py-3 border-t">
      {navItems.map((item, index) => (
        <Link key={index} href={item.path}>
          <a className="flex flex-col items-center">
            <span className={`material-icons-outlined text-lg ${item.active ? 'text-primary' : 'text-gray-400'}`}>
              {item.icon}
            </span>
            <span className={`text-xs ${item.active ? 'text-primary' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavigation;
