import Index from './pages/Index';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Parentesco from './pages/apoderados/Parentesco';
import Mantenimiento from './pages/mantenimiento/Mantenimiento';
import VehiculosEnMantenimiento from './pages/mantenimiento/VehiculosEnMantenimiento';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/mantenimiento" element={<Mantenimiento/>}/>
        <Route path="/mantenimiento_vehiculos" element={<VehiculosEnMantenimiento/>}/>
        <Route path="/parentesco" element={<Parentesco/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;