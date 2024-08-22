import React from 'react';
import Link from 'next/link'; 

interface SideMenuProps {
  menuItems: { name: string; path: string }[];
}

const SideMenu: React.FC<SideMenuProps> = ({ menuItems }) => {
  return (
<div className="w-full text-white h-20 flex flex-wrap justify-end items-start">
  <nav className="flex space-x-6">
    {menuItems.map((item) => (
      <Link
        href={item.path}
        key={item.name}
        className="py-3 bg-blue-800 rounded-b-lg border-l border-b border-r border-blue-600 hover:bg-blue-400 hover:text-black transform text-center"
        style={{ transformOrigin: 'center', width: '100px', fontSize: '20px' }}
      >
        {item.name}
      </Link>
    ))}
  </nav>
</div>
  );
};

export default SideMenu;

