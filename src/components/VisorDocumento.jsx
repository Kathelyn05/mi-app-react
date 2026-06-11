// src/components/VisorDocumento.jsx
import { useState, useEffect } from "react";

function VisorDocumento() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador} - Mi App`;

    // Limpieza: se ejecuta al desmontar el componente
    return () => {
      document.title = "Mi App";
    };
  }, [contador]);

  return (
    <div>
      <h3>Visor Documento </h3>
      <p>Contador actual: {contador}</p>
      <button onClick={() => setContador((c) => c + 1)}>Incrementar</button>
      <button onClick={() => setContador((c) => c - 1)}>Decrementar</button>
    </div>
  );
}

export default VisorDocumento;