import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducto, clearProductos } from '../../Slice/LoginSlice';

export const Carrito = () => {
  const dispatch = useDispatch();

  // Estado local para manejar el nombre del producto ingresado
  const [newProducto, setNewProducto] = useState<number | "">(""); // Cambiado para ser numérico o vacío

  // Acceder al valor de los productos desde el estado global
  const id_productos = useSelector((state: any) => state.producto.id_productos || []);

  // Función para manejar la actualización del producto
  const handleSetProducto = () => {
    if (newProducto !== "") {
      dispatch(setProducto(Number(newProducto))); // Actualizar el valor del producto en el store
      setNewProducto(""); // Limpiar el campo de entrada después de enviar
    }
  };

  // Función para limpiar los productos
  const handleClearProductos = () => {
    dispatch(clearProductos()); // Limpiar el valor de los productos en el store
  };

  return (
    <div>
      <h2>Carrito - Pantalla Principal</h2>
      <input 
        type="number" 
        placeholder="Ingrese el nombre del producto" 
        value={newProducto} 
        onChange={(e: any) => setNewProducto(e.target.value)} // Actualizar el estado local
      />
      {/* Mostrar los productos almacenados */}
      <p>Productos actuales: {id_productos.length > 0 ? id_productos.join(", ") : "No hay productos almacenados"}</p>

      {/* Botón para actualizar el producto */}
      <button onClick={handleSetProducto}>
        Actualizar Producto
      </button>

      {/* Botón para limpiar los productos */}
      <button onClick={handleClearProductos}>Limpiar Productos</button>
    </div>
  );
};
