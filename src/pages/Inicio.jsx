
import { useNotas } from "../hooks/useNotas";


const coloresCategoria = {
  personal: "#4caf50",
  trabajo: "#2196f3",
  estudio: "#ff9800",
  ideas: "#9c27b0",
};

function Inicio() {
  const { notas } = useNotas();
  const fijadas = notas.filter((n) => n.fijada).length;
  const categorias = ["personal", "trabajo", "estudio", "ideas"];
  const contar = (cat) => notas.filter((n) => n.categoria === cat).length;

  const estiloContenedor = {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "20px 0",
  };

  const estiloTarjetas = {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  };

  const tarjetaEstadistica = {
    flex: "1 1 200px",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    textAlign: "center",
  };

  const estiloGridCategorias = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: "12px",
  };

  const tarjetaCategoria = (cat) => ({
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    borderTop: `4px solid ${coloresCategoria[cat]}`,
  });

  return (
    <div style={estiloContenedor}>
      <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>
        📋 Bienvenido a MisNotas
      </h2>
      <p style={{ color: "#555", marginBottom: "25px" }}>
        Aquí tienes un resumen rápido de tus notas.
      </p>

      {/* Tarjetas principales */}
      <div style={estiloTarjetas}>
        <div style={tarjetaEstadistica}>
          <div style={{ fontSize: "2rem" }}>📝</div>
          <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#2c3e50" }}>
            {notas.length}
          </div>
          <div style={{ color: "#777" }}>Total de notas</div>
        </div>
        <div style={tarjetaEstadistica}>
          <div style={{ fontSize: "2rem" }}>📌</div>
          <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#e67e22" }}>
            {fijadas}
          </div>
          <div style={{ color: "#777" }}>Notas fijadas</div>
        </div>
      </div>

      {/* Por categoría */}
      <h3 style={{ color: "#2c3e50", marginBottom: "15px" }}>📂 Por categoría</h3>
      <div style={estiloGridCategorias}>
        {categorias.map((cat) => {
          const cantidad = contar(cat);
          return (
            <div key={cat} style={tarjetaCategoria(cat)}>
              <span
                style={{
                  backgroundColor: coloresCategoria[cat],
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  marginBottom: "4px",
                }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </span>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
                {cantidad}
              </span>
              <span style={{ color: "#777", fontSize: "0.9rem" }}>notas</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Inicio;