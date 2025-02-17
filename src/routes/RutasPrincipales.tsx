import { Routes, Route } from "react-router-dom";
import { AgendaPermisos } from "../Components/Daniela/PantallaCompleta2";
// import { EvaluacionProductos } from "../Components/Daniela/PantallaCOmpleta";
// import { Catalogo } from "../Components/Catalogo/CatalogoContainer";
// import { Carrito } from "../Components/Carrito/CarritoPantallaPrincipal";
// import { Carrito } from "../Components/Carrito/CarritoPantallaPrincipal";


export const RutasPrincipales = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Catalogo />} />
      <Route path="/Catalogo" element={<Catalogo />} />
      <Route path="/Carrito" element={<Carrito />} /> */}
      <Route path="/inicio" element={<AgendaPermisos/>} />
    </Routes>
  );
};
