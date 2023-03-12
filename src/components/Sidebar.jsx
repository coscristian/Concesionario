import React from 'react'
import TriggerDarkMode from 'components/triggerDarkMode';

const Sidebar = () => {
  return (
    <nav className='w-72 border border-gray-500'>
      <TriggerDarkMode />
    </nav>
  );
}

export default Sidebar;