import { Link } from "react-router-dom";
import { useNotas } from "../hooks/useNotas";

const coloresCategoria = {
  personal: "#4caf50",
  trabajo: "#2196f3",
  estudio: "#ff9800",
  ideas: "#9c27b0",
};

function Notas() {
  const { notas, filtroCategoria, busqueda, cambiarFiltro, cambiarBusqueda, toggleFijada } =
    useNotas();

 
  const notasFiltradas = notas.filter((nota) => {
    const coincideBusqueda =
      busqueda.trim() === "" ||
      nota.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      nota.contenido.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria =
      filtroCategoria === "todas" || nota.categoria === filtroCategoria;
    return coincideBusqueda && coincideCategoria;
  });

  // Ordenar: fijadas primero
  const ordenadas = [
    ...notasFiltradas.filter((n) => n.fijada),
    ...notasFiltradas.filter((n) => !n.fijada),
  ];

  const formatearFecha = (fechaISO) => {
    return new Date(fechaISO).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div>
      <h2>Notas</h2>
      {/* Filtros */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Buscar en título y contenido..."
          value={busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <select
          value={filtroCategoria}
          onChange={(e) => cambiarFiltro(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="todas">Todas</option>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
        </select>
      </div>
      <p>
        Mostrando {ordenadas.length} de {notas.length} notas
      </p>

      {ordenadas.length === 0 ? (
        <p>No hay notas que coincidan con los criterios.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "15px",
          }}
        >
          {ordenadas.map((nota) => (
            <Link
              to={`/notas/${nota.id}`}
              key={nota.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  backgroundColor: nota.fijada ? "#fffde7" : "white",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                <h3 style={{ margin: "0 0 8px" }}>{nota.titulo}</h3>
                <p style={{ margin: "0 0 8px" }}>
                  {nota.contenido.length > 100
                    ? nota.contenido.slice(0, 100) + "..."
                    : nota.contenido}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span
                    style={{
                      backgroundColor: coloresCategoria[nota.categoria] || "#999",
                      color: "white",
                      padding: "2px 8px",
                      borderRadius: "12px",
                      fontSize: "0.8rem",
                    }}
                  >
                    {nota.categoria}
                  </span>
                  {nota.fijada && <span>📌</span>}
                </div>
                <div
                  style={{ marginTop: "8px", fontSize: "0.8rem", color: "#666" }}
                >
                  {formatearFecha(nota.fechaCreacion)}
                </div>
                {/* Botón de fijar (evita navegación) */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFijada(nota.id);
                  }}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                  }}
                >
                  {nota.fijada ? "📌" : "📍"}
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notas;