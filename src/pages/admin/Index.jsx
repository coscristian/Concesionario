import { useDarkMode } from 'context/darkMode';
import React from 'react'

const Admin = () => {
  const {darkMode} = useDarkMode();
  return (
    <div className={`bg-gray-${darkMode ? '900': '100'} h-full w-full`}>
      <div>Index del panel de Admin</div>
    </div>
    
  );
}

export default Admin;