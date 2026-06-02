function Perfil() {
  const nombre = "Kathelyn López";
  const profesion = "Desarrolladora Frontend";
  const experiencia = 2;
  const disponible = true;

  return (
    <div>
      <h2>{nombre}</h2>
      <p>{profesion}</p>
      <p>{experiencia} años de experiencia</p>
      <p>{disponible ? "Disponible para contratar" : "No disponible"}</p>
    </div>
  );
}

export default Perfil;