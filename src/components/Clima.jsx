function Clima() {
  const temperatura = 22; 

  let sensacion;
  let recomendacion;

  if (temperatura < 15) {
    sensacion = "frío";
    recomendacion = "Lleva abrigo";
  } else if (temperatura >= 15 && temperatura <= 25) {
    sensacion = "agradable";
    recomendacion = "Disfruta el día";
  } else {
    sensacion = "caluroso";
    recomendacion = "Mantente hidratado";
  }

  return (
    <div>
      <h3>Clima actual</h3>
      <p>Temperatura: {temperatura}°C</p>
      <p>Sensación térmica: {sensacion}</p>
      <p>Recomendación: {recomendacion}</p>
    </div>
  );
}

export default Clima;