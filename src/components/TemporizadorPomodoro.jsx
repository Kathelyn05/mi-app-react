
import { useState, useEffect, useRef } from "react";

function TemporizadorPomodoro() {
  const TIEMPO_INICIAL = 25 * 60; // 1500 segundos
  const [tiempo, setTiempo] = useState(TIEMPO_INICIAL);
  const [activo, setActivo] = useState(false);
  const intervaloRef = useRef(null);

 
  useEffect(() => {
    if (activo && tiempo > 0) {
      intervaloRef.current = setInterval(() => {
        setTiempo((t) => {
          if (t <= 1) {
            // Llegó a cero
            setActivo(false);
            alert("¡Pomodoro terminado!");
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }

   
    return () => {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
        intervaloRef.current = null;
      }
    };
  }, [activo, tiempo]); 

  const iniciar = () => {
    if (tiempo === 0) {
      setTiempo(TIEMPO_INICIAL);
    }
    setActivo(true);
  };

  const pausar = () => setActivo(false);

  const reiniciar = () => {
    setActivo(false);
    setTiempo(TIEMPO_INICIAL);
   
  };

  const minutos = Math.floor(tiempo / 60)
    .toString()
    .padStart(2, "0");
  const segundos = (tiempo % 60).toString().padStart(2, "0");

  return (
    <div>
      <h3>Temporizador Pomodoro</h3>
      <div style={{ fontSize: "2rem", fontFamily: "monospace", margin: "10px 0" }}>
        {minutos}:{segundos}
      </div>
      <button onClick={iniciar} disabled={activo}>
        Iniciar
      </button>
      <button onClick={pausar} disabled={!activo}>
        Pausar
      </button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default TemporizadorPomodoro;