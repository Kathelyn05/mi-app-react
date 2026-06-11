// src/components/Modal.jsx

function Modal({ titulo, abierto, children }) {
  if (!abierto) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "8px",
          minWidth: "300px",
          maxWidth: "500px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <h3 style={{ marginTop: 0 }}>{titulo}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;