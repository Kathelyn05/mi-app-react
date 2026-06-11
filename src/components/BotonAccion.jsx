// src/components/BotonAccion.jsx

function BotonAccion({ texto, variante = "primario", disabled = false, onClick }) {
  const estilosBase = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: disabled ? "not-allowed" : "pointer",
    fontWeight: "bold",
    opacity: disabled ? 0.6 : 1,
    margin: "0 4px",
  };

  const colores = {
    primario: { backgroundColor: "#007bff", color: "white" },
    secundario: { backgroundColor: "#6c757d", color: "white" },
    peligro: { backgroundColor: "#dc3545", color: "white" },
  };

  return (
    <button
      style={{ ...estilosBase, ...colores[variante] }}
      disabled={disabled}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}

export default BotonAccion;