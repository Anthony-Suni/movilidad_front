import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Parentesco from './pages/apoderados/Parentesco';
import Mantenimiento from './pages/mantenimiento/Mantenimiento';
import VehiculosEnMantenimiento from './pages/mantenimiento/VehiculosEnMantenimiento';
import AgregarTipoMantenimiento from './pages/mantenimiento/AgregarTipoMantenimiento';
import EditarMantenimientoVehiculo from './pages/mantenimiento/EditarMantenimientoVehiculo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mantenimiento" element={<Mantenimiento />} />
        <Route path="/mantenimiento_vehiculos" element={<VehiculosEnMantenimiento />} />
        <Route path="/agregar_tipo_mantenimiento" element={<AgregarTipoMantenimiento />} />
        <Route path="/mantenimiento/editar/:id" element={<EditarMantenimientoVehiculo />} /> 
        <Route path="/parentesco" element={<Parentesco />} />
       
      </Routes>
    </Router>
  );
}

export default App;