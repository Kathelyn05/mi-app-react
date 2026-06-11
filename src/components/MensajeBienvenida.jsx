
function MensajeBienvenida() {

  const usuario = {
    nombre: "Kathy",
    rol: "admin", 
  };
  

  if (!usuario) {
    return <p>Por favor, inicia sesión para continuar</p>;
  }

  return (
    <div>
      <h2>Bienvenido, {usuario.nombre}</h2>
      <p>Rol: {usuario.rol}</p>
      {usuario.rol === "admin" && <p>Tienes acceso completo al sistema</p>}
    </div>
  );
}

export default MensajeBienvenida;