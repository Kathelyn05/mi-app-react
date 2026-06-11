
import { useState, useEffect } from "react";

function useLocalStorage(clave, valorInicial) {

  const [valor, setValor] = useState(() => {
    try {
      const item = localStorage.getItem(clave);
      return item !== null ? JSON.parse(item) : valorInicial;
    } catch {
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch {
      // Silencioso si localStorage no está disponible
    }
  }, [clave, valor]);

  return [valor, setValor];
}

export default useLocalStorage;