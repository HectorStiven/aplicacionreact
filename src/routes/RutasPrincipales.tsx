import { Routes, Route } from 'react-router-dom';
import { Inicio } from '../Components/Inicio/Inicio';
import { Productos } from '../Components/Productos/Productos';
import { Contacto } from '../Components/Contacto/Contacto';
import { PedidoPrincipal } from '../Components/Pedidos/Pedido';

export const RutasPrincipales = () => {
  return (
    <Routes >
      <Route path="/Inicio" element={<Inicio />} />
      <Route path="/Productos" element={<Productos />} />
      <Route path="/pedidos" element={<PedidoPrincipal />} />
      <Route path="/Contacto" element={<Contacto />} />
    </Routes>
  );
}
