import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Usamos localStorage por defecto
import  id_productosReducer  from "./Slice/LoginSlice";

/**
 * Configuration object for persisting state in the application.
 * @typedef {Object} PersistConfiguration
 * @property {string} key - The key used to store the state in the storage.
 * @property {Object} storage - The storage object used to persist the state (localStorage, sessionStorage).
 * @property {string[]} [whitelist] - The list of state slices to be persisted.
 */

const persistConfiguration = {
  key: "Proyecto-inicial",
  storage, // Puedes cambiar a sessionStorage si prefieres
  whitelist: ["cedula"], // Solo vamos a persistir el estado de la cédula
};

const rootReducer = combineReducers({
  producto: id_productosReducer, // Solo incluimos el slice de cédula
});

const persistedReducer = persistReducer(persistConfiguration, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

