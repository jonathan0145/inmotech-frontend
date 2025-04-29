import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IniciarSesionPage from './pages/IniciarSesionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/iniciar-sesion" element={<IniciarSesionPage />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;