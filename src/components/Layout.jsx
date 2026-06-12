import { NavLink, Outlet } from "react-router-dom";
import { useNotas } from "../hooks/useNotas";

function Layout() {
  const { notas } = useNotas();

  const estiloNav = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    color: isActive ? "#ffffff" : "#cccccc",
    backgroundColor: isActive ? "#007bff" : "transparent",
    padding: "6px 12px",
    borderRadius: "4px",
  });

  return (
    <div>
      <header
        style={{
          backgroundColor: "#2c3e50",
          color: "white",
          padding: "15px 20px",
        }}
      >
        <h1 style={{ margin: 0 }}>MisNotas</h1>
        <nav style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
          <NavLink to="/" style={estiloNav} end>
            Inicio
          </NavLink>
          <NavLink to="/notas" style={estiloNav}>
            Notas
          </NavLink>
          <NavLink to="/notas/nueva" style={estiloNav}>
            Nueva nota
          </NavLink>
        </nav>
        <p style={{ margin: "5px 0 0" }}>Total de notas: {notas.length}</p>
      </header>
      <main style={{ padding: "20px", minHeight: "70vh" }}>
        <Outlet />
      </main>
      <footer
        style={{
          backgroundColor: "#2c3e50",
          color: "white",
          textAlign: "center",
          padding: "10px",
        }}
      >
        © 2026 MisNotas
      </footer>
    </div>
  );
}

export default Layout;