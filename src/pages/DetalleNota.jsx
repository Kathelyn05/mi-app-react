import { useParams, Link, useNavigate } from "react-router-dom";
import { useNotas } from "../hooks/useNotas";
import { useState } from "react";
import BotonAccion from "../components/BotonAccion";
import useNotificacion from "../hooks/useNotificacion"; 
import Alerta from "../components/Alerta";               

function DetalleNota() {
  const { id } = useParams();
  const { notas, eliminarNota } = useNotas();
  const navigate = useNavigate();
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const { notificacion, mostrar, cerrar } = useNotificacion(3000); 

  const nota = notas.find((n) => n.id === id);

  if (!nota) {
    return (
      <div>
        <h2>Nota no encontrada</h2>
        <Link to="/notas">Volver a notas</Link>
      </div>
    );
  }

  const handleEliminar = () => {
    eliminarNota(nota.id);
    mostrar("Nota eliminada", "info");               
    setTimeout(() => navigate("/notas"), 500);
  };

  const formatearFecha = (fechaISO) => {
    return new Date(fechaISO).toLocaleString("es-ES");
  };

  return (
    <div>
      {notificacion && (
        <div style={{ marginBottom: "15px" }}>
          <Alerta tipo={notificacion.tipo} titulo={notificacion.mensaje}>
            <button onClick={cerrar}>X</button>
          </Alerta>
        </div>
      )}

      <h2>{nota.titulo}</h2>
      <p><strong>Categoría:</strong> {nota.categoria}</p>
      <p><strong>Fijada:</strong> {nota.fijada ? "Sí" : "No"}</p>
      <p><strong>Fecha de creación:</strong> {formatearFecha(nota.fechaCreacion)}</p>
      <div style={{ whiteSpace: "pre-wrap", margin: "15px 0" }}>{nota.contenido}</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/notas">
          <BotonAccion texto="Volver a notas" variante="secundario" />
        </Link>
        <Link to={`/notas/${nota.id}/editar`}>
          <BotonAccion texto="Editar" variante="primario" />
        </Link>
        <BotonAccion
          texto="Eliminar"
          variante="peligro"
          onClick={() => setMostrarConfirmacion(true)}
        />
      </div>
      {mostrarConfirmacion && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #f5c6cb",
            padding: "15px",
            borderRadius: "5px",
            backgroundColor: "#fff8f8",
          }}
        >
          <p>¿Estás seguro de eliminar esta nota?</p>
          <BotonAccion
            texto="Cancelar"
            variante="secundario"
            onClick={() => setMostrarConfirmacion(false)}
          />
          <BotonAccion texto="Eliminar" variante="peligro" onClick={handleEliminar} />
        </div>
      )}
    </div>
  );
}

export default DetalleNota;