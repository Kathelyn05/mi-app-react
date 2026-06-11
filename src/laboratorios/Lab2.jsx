import Perfil from "../components/Perfil";
import Clima from "../components/Clima";
import EstadoPedido from "../components/EstadoPedido";
import MensajeBienvenida from "../components/MensajeBienvenida";
import ListaHabilidades from "../components/ListaHabilidades";
import TablaProductos from "../components/TablaProductos";
import ListaTareas from "../components/ListaTareas";
import Tarjeta from "../components/Tarjeta";
import Dashboard from "../components/Dashboard";

function Lab2() {
  const estiloSeccion = {
    border: "1px solid #ddd",
    padding: "20px",
    marginBottom: "30px",
    borderRadius: "8px",
    backgroundColor: "#9226a550",
    
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Laboratorio 2</h1>

      <section style={estiloSeccion}>
        <h2>Ejercicio 1 – Perfil</h2>
        <Perfil />
      </section>

      <section style={estiloSeccion}>
        <h2>Ejercicio 2 – Clima</h2>
        <Clima />
      </section>

      <section style={estiloSeccion}>
        <h2>Ejercicio 3 – Estado de Pedido</h2>
        <EstadoPedido />
      </section>

      <section style={estiloSeccion}>
        <h2>Ejercicio 4 – Mensaje de Bienvenida</h2>
        <MensajeBienvenida />
      </section>

      <section style={estiloSeccion}>
        <h2>Ejercicio 5 – Lista de Habilidades</h2>
        <ListaHabilidades />
      </section>

     <section style={estiloSeccion}>
        <h2>Ejercicio 6 – Tabla de Productos</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TablaProductos />
        </div>
      </section>


      <section style={estiloSeccion}>
        <h2>Ejercicio 7 – Lista de Tareas</h2>
        <ListaTareas />
      </section>

      <section style={estiloSeccion}>
        <h2>Ejercicio 8 – Tarjeta</h2>
        <Tarjeta />
      </section>

      <section style={estiloSeccion}>
        <h2>Ejercicio 9 – Dashboard</h2>
        <Dashboard />
      </section>
    </div>
  );
}

export default Lab2;