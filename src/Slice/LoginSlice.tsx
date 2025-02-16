import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Estado inicial con un array de IDs de productos
const initialState: { id_productos: number[] } = {
  id_productos: [],
};

const id_productoslice = createSlice({
  name: "productos",
  initialState,
  reducers: {
    setProducto: (state, action: PayloadAction<number>) => {
      // Añadir un nuevo ID de producto al array
      state.id_productos.push(action.payload);
    },
    clearProductos: (state) => {
      // Limpiar todos los IDs de productos
      state.id_productos = [];
    },
  },
});

export const { setProducto, clearProductos } = id_productoslice.actions;
export default id_productoslice.reducer;
