function Dashboard() {
  const usuario = {
    nombre: "Kathelyn López",
    email: "Kathy@example.com",
    rol: "admin",
  };

  const notificaciones = [
    { id: 1, mensaje: "Nuevo mensaje de soporte", leida: false },
    { id: 2, mensaje: "Actualización del sistema disponible", leida: true },
    { id: 3, mensaje: "Recordatorio: reunión a las 3 PM", leida: false },
    { id: 4, mensaje: "Factura del mes emitida", leida: true },
  ];

  const actividadReciente = [
    { id: 1, accion: "Inicio de sesión", fecha: "2025-05-25" },
    { id: 2, accion: "Cambio de contraseña", fecha: "2025-05-24" },
    { id: 3, accion: "Actualización de perfil", fecha: "2025-05-23" },
  ];

  const noLeidas = notificaciones.filter((n) => !n.leida).length;

  return (
    <>
     
      <section style={{ marginBottom: "20px" }}>
        <h2>Información del usuario</h2>
        <p>Nombre: {usuario.nombre}</p>
        <p>Email: {usuario.email}</p>
        <p>Rol: {usuario.rol}</p>
      </section>

     
      <section style={{ marginBottom: "20px" }}>
        <h2>Notificaciones ({noLeidas} sin leer)</h2>
        {noLeidas === 0 ? (
          <p>No tienes notificaciones pendientes</p>
        ) : (
          <ul>
            {notificaciones.map((notif) => (
              <li
                key={notif.id}
                style={{
                  fontWeight: notif.leida ? "normal" : "bold",
                  opacity: notif.leida ? 0.6 : 1,
                }}
              >
                {notif.mensaje}
              </li>
            ))}
          </ul>
        )}
      </section>

      
      <section>
        <h2>Actividad reciente</h2>
        {actividadReciente.length === 0 ? (
          <p>No hay actividad reciente</p>
        ) : (
          <ul>
            {actividadReciente.map((act) => (
              <li key={act.id}>
                {act.accion} - {act.fecha}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default Dashboard;
