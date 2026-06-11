// src/components/Acordeon.jsx
import { useState } from "react";

function Acordeon({ titulo, children, expandidoInicial = false }) {
  const [expandido, setExpandido] = useState(expandidoInicial);

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "6px", marginBottom: "8px" }}>
      <div
        onClick={() => setExpandido(!expandido)}
        style={{
          padding: "12px 16px",
          backgroundColor: "#f7f7f7",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          userSelect: "none",
          borderBottom: expandido ? "1px solid #ccc" : "none",
        }}
      >
        <span>{expandido ? "▼" : "▶"}</span>
        <strong>{titulo}</strong>
      </div>
      {expandido && <div style={{ padding: "12px 16px" }}>{children}</div>}
    </div>
  );
}

export default Acordeon;