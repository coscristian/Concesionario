import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Admin from './pages/admin/Index';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';
import './styles/styles.css';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import { DarkModeContext } from 'context/darkMode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vehiculos from 'pages/admin/Vehiculos';
import Clientes from 'pages/admin/Clientes';

function App() {
    
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        console.log("Modo dark:", darkMode);
    }, [darkMode]);
    // value={{get, set}}
    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            <Router>
                <Routes>
                    <Route path="/" element={<PublicLayout />}>
                        <Route path="/" element={<Index />} />
                    </Route>
                    <Route path="/admin" element={<PrivateLayout />}>
                        <Route path="/admin" element={<Admin />} />
                        <Route path="vehiculos" element={<Vehiculos />} />
                        <Route path="clientes" element={<Clientes />} />
                    </Route>
                    <Route path="/login" element={<AuthLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="registro" element={<Registro />} />
                    </Route>
                </Routes>            
            </Router>
        </DarkModeContext.Provider>
    );
}

export default App;
