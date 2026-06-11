

function Alerta({ tipo = "info", titulo, children }) {
  const config = {
    exito: { icono: "✅", colorFondo: "#d4edda", colorTexto: "#155724", borde: "#c3e6cb" },
    advertencia: { icono: "⚠️", colorFondo: "#fff3cd", colorTexto: "#856404", borde: "#ffeeba" },
    error: { icono: "❌", colorFondo: "#f8d7da", colorTexto: "#721c24", borde: "#f5c6cb" },
    info: { icono: "ℹ️", colorFondo: "#d1ecf1", colorTexto: "#0c5460", borde: "#bee5eb" },
  };

  const { icono, colorFondo, colorTexto, borde } = config[tipo] || config.info;

  return (
    <div
      style={{
        backgroundColor: colorFondo,
        color: colorTexto,
        border: `1px solid ${borde}`,
        padding: "12px 16px",
        borderRadius: "6px",
        marginBottom: "10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: children ? "8px" : 0 }}>
        <span>{icono}</span>
        <strong>{titulo}</strong>
      </div>
      {children && <div>{children}</div>}
    </div>
  );
}

export default Alerta;