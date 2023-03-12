import React from 'react'
import { useDarkMode } from 'context/darkMode';

const Index = () => {
  const {darkMode} = useDarkMode();
  
  return (
      <div className={`flex h-full bg-gray-${darkMode ? '900': '50'}`}>Contenido Landing concesionario</div>
  );
}

export default Index;