// src/components/Contador.jsx
import { useState } from "react";
import BotonAccion from "./BotonAccion";
import Alerta from "./Alerta";

function Contador() {
  const [valor, setValor] = useState(0);

  const decrementar = () => setValor((v) => v - 1);
  const incrementar = () => setValor((v) => v + 1);
  const incrementar5 = () => setValor((v) => v + 5);
  const reiniciar = () => setValor(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Contador: {valor}</h3>
      <div>
        <BotonAccion texto="Decrementar" variante="secundario" onClick={decrementar} disabled={valor === 0} />
        <BotonAccion texto="Incrementar" variante="primario" onClick={incrementar} />
        <BotonAccion texto="Incrementar +5" variante="primario" onClick={incrementar5} />
        <BotonAccion texto="Reiniciar" variante="peligro" onClick={reiniciar} />
      </div>
      {valor === 0 && <Alerta tipo="info" titulo="El contador está en cero" />}
      {valor > 10 && <Alerta tipo="advertencia" titulo="¡Valor alto!" />}
    </div>
  );
}

export default Contador;