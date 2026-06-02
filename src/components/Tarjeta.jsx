function Tarjeta() {
  const datos = {
    titulo: "React Avanzado",
    descripcion:
      "Aprende hooks, contexto y patrones avanzados para construir aplicaciones modernas.",
    etiquetas: ["React", "JavaScript", "Frontend"],
    destacado: true,
  };

  const estiloContenedor = {
    border: datos.destacado ? "2px solid gold" : "1px solid #ccc",
    backgroundColor: datos.destacado ? "#35294a" : "white",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px 0",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const estiloBadge = {
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "12px",
    padding: "2px 10px",
    marginRight: "5px",
    fontSize: "0.8em",
  };

  return (
    <div style={estiloContenedor}>
      <h3>{datos.titulo}</h3>
      <p>{datos.descripcion}</p>
      <div>
        {datos.etiquetas.map((etiqueta, index) => (
          <span key={index} style={estiloBadge}>
            {etiqueta}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tarjeta;