function ListaTareas() {
  const tareas = [
    { id: 1, titulo: "Estudiar React", completada: false, prioridad: "alta" },
    { id: 2, titulo: "Hacer ejercicio", completada: true, prioridad: "media" },
    { id: 3, titulo: "Leer documentación", completada: false, prioridad: "baja" },
    { id: 4, titulo: "Enviar informe", completada: false, prioridad: "alta" },
    { id: 5, titulo: "Comprar víveres", completada: true, prioridad: "media" },
    { id: 6, titulo: "Llamar al médico", completada: false, prioridad: "alta" },
    { id: 7, titulo: "Revisar correo", completada: true, prioridad: "baja" },
  ];

  const pendientes = tareas.filter((t) => !t.completada);
  const completadas = tareas.filter((t) => t.completada);

  return (
    <div>
      <h3>Tareas</h3>

      {/* Tareas pendientes */}
      <h4>Pendientes ({pendientes.length})</h4>
      {pendientes.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        <ul>
          {pendientes.map((tarea) => (
            <li
              key={tarea.id}
              style={{
                fontWeight: tarea.prioridad === "alta" ? "bold" : "normal",
                color: tarea.prioridad === "alta" ? "red" : "black",
              }}
            >
              {tarea.titulo} [{tarea.prioridad}]
            </li>
          ))}
        </ul>
      )}

      {/* Tareas completadas */}
      <h4>Completadas ({completadas.length})</h4>
      {completadas.length === 0 ? (
        <p>No hay tareas completadas</p>
      ) : (
        <ul>
          {completadas.map((tarea) => (
            <li key={tarea.id} style={{ textDecoration: "line-through" }}>
              {tarea.titulo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaTareas;
