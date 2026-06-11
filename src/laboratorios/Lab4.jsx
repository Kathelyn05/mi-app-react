// src/laboratorios/Lab4.jsx
import { useState } from "react";  // ← añade useState
import VisorDocumento from "../components/VisorDocumento";
import TemporizadorPomodoro from "../components/TemporizadorPomodoro";
import ConfiguracionUsuario from "../components/ConfiguracionUsuario";
import useNotificacion from "../hooks/useNotificacion";
import Alerta from "../components/Alerta";
import Acordeon from "../components/Acordeon";
import BotonAccion from "../components/BotonAccion";

function Lab4() {
  // Estado para controlar visibilidad de VisorDocumento (padre)
  const [mostrarVisor, setMostrarVisor] = useState(true);

  const { notificacion, mostrar, cerrar } = useNotificacion(4000);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Laboratorio 4</h1>

      <Acordeon titulo="Ejercicio 1 – VisorDocumento" expandidoInicial>
        <button onClick={() => setMostrarVisor(!mostrarVisor)}>
          {mostrarVisor ? "Simular desmontaje" : "Montar de nuevo"}
        </button>
        {mostrarVisor && <VisorDocumento />}
      </Acordeon>

      {/* El resto de acordeones queda igual */}
      <Acordeon titulo="Ejercicio 2 – Temporizador Pomodoro">
        <TemporizadorPomodoro />
      </Acordeon>

      <Acordeon titulo="Ejercicio 3 – Configuración de Usuario">
        <ConfiguracionUsuario />
      </Acordeon>

      <Acordeon titulo="Ejercicio 4 – Custom Hooks (useNotificacion)">
        <div>
          <p>Prueba el hook useNotificacion:</p>
          <BotonAccion
            texto="Mostrar notificación éxito"
            variante="primario"
            onClick={() => mostrar("¡Operación exitosa!", "exito")}
          />
          <BotonAccion
            texto="Mostrar notificación error"
            variante="peligro"
            onClick={() => mostrar("Algo salió mal", "error")}
          />
          {notificacion && (
            <div style={{ marginTop: "10px" }}>
              <Alerta tipo={notificacion.tipo} titulo={notificacion.mensaje}>
                <button onClick={cerrar}>Cerrar manualmente</button>
              </Alerta>
            </div>
          )}
        </div>
      </Acordeon>
    </div>
  );
}

export default Lab4;