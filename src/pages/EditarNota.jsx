import { useParams, useNavigate } from "react-router-dom";
import { useNotas } from "../hooks/useNotas";
import FormularioNota from "../components/FormularioNota";
import BotonAccion from "../components/BotonAccion";
import useNotificacion from "../hooks/useNotificacion"; 
import Alerta from "../components/Alerta";               

function EditarNota() {
  const { id } = useParams();
  const { notas, editarNota } = useNotas();
  const navigate = useNavigate();
  const { notificacion, mostrar, cerrar } = useNotificacion(3000); 

  const nota = notas.find((n) => n.id === id);

  if (!nota) {
    return (
      <div>
        <h2>Nota no encontrada</h2>
        <button onClick={() => navigate("/notas")}>Volver a notas</button>
      </div>
    );
  }

  const handleGuardar = (datos) => {
    editarNota(id, datos);
    mostrar("Nota editada correctamente", "exito");  
    setTimeout(() => navigate(`/notas/${id}`), 500);
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

      <h2>Editar Nota</h2>
      <FormularioNota
        valoresIniciales={{
          titulo: nota.titulo,
          contenido: nota.contenido,
          categoria: nota.categoria,
          fijada: nota.fijada,
        }}
        textoBoton="Guardar cambios"
        onGuardar={handleGuardar}
      />
      <div style={{ marginTop: "10px" }}>
        <BotonAccion
          texto="Cancelar"
          variante="secundario"
          onClick={() => navigate(`/notas/${id}`)}
        />
      </div>
    </div>
  );
}

export default EditarNota;