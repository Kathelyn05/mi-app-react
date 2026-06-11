
import Alerta from "../components/Alerta";
import Acordeon from "../components/Acordeon";
import BotonAccion from "../components/BotonAccion";
import Modal from "../components/Modal";
import Contador from "../components/Contador";
import ListaContactos from "../components/ListaContactos";
import FormularioEvento from "../components/Formularioeventos";
import { useState } from "react";

function Lab3() {
  
  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Laboratorio 3 </h1>

      {/* Ejercicio 1 */}
      <Acordeon titulo="Ejercicio 1 – Componentes reutilizables con props y children" expandidoInicial>
        <h3>Alertas</h3>
        <Alerta tipo="exito" titulo="Éxito">
          Operación completada satisfactoriamente.
        </Alerta>
        <Alerta tipo="advertencia" titulo="Advertencia">
          Revisa los datos ingresados.
        </Alerta>
        <Alerta tipo="error" titulo="Error">
          No se pudo conectar al servidor.
        </Alerta>
        <Alerta tipo="info" titulo="Información">
          La sesión expirará en 5 minutos.
        </Alerta>

        <h3>Acordeones</h3>
        <Acordeon titulo="Sección 1">
          <p>Contenido del primer acordeón. Cada instancia maneja su propio estado.</p>
        </Acordeon>
        <Acordeon titulo="Sección 2">
          <p>Este es otro acordeón independiente.</p>
        </Acordeon>
        <Acordeon titulo="Sección 3">
          <p>Un tercer acordeón con más texto de ejemplo.</p>
        </Acordeon>
      </Acordeon>

      {/* Ejercicio 2 */}
      <Acordeon titulo="Ejercicio 2 – Composición, estado y eventos">
        <h3>Modal y Botones</h3>
        <BotonAccion texto="Abrir modal" onClick={() => setModalAbierto(true)} />
        <Modal titulo="Modal de ejemplo" abierto={modalAbierto}>
          <p>Este es un modal controlado por estado en Lab3.</p>
          <BotonAccion texto="Cerrar" variante="secundario" onClick={() => setModalAbierto(false)} />
        </Modal>

        <h3>Contador</h3>
        <Contador />
      </Acordeon>

      {/* Ejercicio 3 */}
      <Acordeon titulo="Ejercicio 3 – Lista dinámica con inmutabilidad">
        <ListaContactos />
      </Acordeon>

      {/* Ejercicio 4 */}
      <Acordeon titulo="Ejercicio 4 – Formulario controlado con validación">
        <FormularioEvento />
      </Acordeon>
    </div>
  );
}

export default Lab3;