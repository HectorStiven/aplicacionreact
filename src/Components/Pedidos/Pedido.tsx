import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Login/toolkit/slice/LoginSlice";

export const PedidoPrincipal = () => {
  const dispatch = useDispatch();

  // Especifica el tipo del estado en useSelector
  // const { valor_pedidos }: { valor_pedidos: string, } = useSelector(
  //   (state: { nombreDelSlice: { valor_pedidos: string} }) => state.nombreDelSlice
  // );
  

  const [valor, setValor] = useState(false);
  const [nuevoValorPedido, setNuevoValorPedido] = useState("");

  const cambiar = () => {
    setValor(!valor);

    // Corrige la asignación de "pregunta"
  //   dispatch(
  //     login({
  //       usuario: "", // Ajusta según tus necesidades
  //       contrasena: "", // Ajusta según tus necesidades
  //       valor_pedidos,
  //     })
  //   );
  };

  const handleNuevoValorPedido = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoValorPedido(e.target.value);
  };

  const agregarNuevoValorPedido = () => {
    dispatch(
      login({
        usuario: "", // Ajusta según tus necesidades
        contrasena: "", // Ajusta según tus necesidades
        valor_pedidos: nuevoValorPedido,
        pregunta: valor as false, // Realiza un cast explícito
      })
    );

    setNuevoValorPedido("");
  };

  return (
    <div>
      <h1>PedidoPrincipal</h1>
      {/* <p>Valor de Pedido Actual: {valor_pedidos}</p> */}
      <button onClick={cambiar}>Update Redux State</button>

      <div>
        <input
          type="text"
          value={nuevoValorPedido}
          onChange={handleNuevoValorPedido}
          placeholder="Nuevo Valor de Pedido"
        />
        <button onClick={agregarNuevoValorPedido}>Agregar Nuevo Valor de Pedido</button>
      </div>
    </div>
  );
};
