import Login from './pages/Login';
import Registro from './pages/Registro';
import Admin from './pages/Admin';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';
import './styles/styles.css';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={['/admin']}>
                    <PrivateLayout>
                        <Switch>
                            <Route path='/admin' element={<Admin />} />
                        </Switch>
                    </PrivateLayout>
                </Route>
                <Route path={['/login', '/registro']}>
                    <AuthLayout>
                        <Switch>
                            <Route path='/login' element={<Login />} />
                            <Route path='/registro' element={<Registro />} />
                        </Switch>
                    </AuthLayout>
                </Route>
                <Route path={['/']}>
                    <PublicLayout>
                        <Switch>
                            <Route path='/' element={<Index />} />                            
                        </Switch>
                    </PublicLayout>
                </Route>
            </Switch>            
        </BrowserRouter>
    );
}

export default App;