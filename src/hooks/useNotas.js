
import { useContext } from "react";
import { NotasContext } from "../context/NotasContext"; // importa el contexto

export function useNotas() {
  const context = useContext(NotasContext);
  if (!context) {
    throw new Error("useNotas debe usarse dentro de un NotasProvider");
  }
  return context;
}