
import { useState, useEffect, useCallback, useRef } from "react";

function useNotificacion(duracion = 3000) {
  const [notificacion, setNotificacion] = useState(null);
  const timeoutRef = useRef(null);

  const mostrar = useCallback(
    (mensaje, tipo = "info") => {
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      const id = Date.now();
      setNotificacion({ id, mensaje, tipo });

      timeoutRef.current = setTimeout(() => {
        setNotificacion(null);
        timeoutRef.current = null;
      }, duracion);
    },
    [duracion]
  );

  const cerrar = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setNotificacion(null);
  }, []);

 
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { notificacion, mostrar, cerrar };
}

export default useNotificacion;