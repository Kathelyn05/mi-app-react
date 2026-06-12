import { useNavigate } from "react-router-dom";
import { useNotas } from "../hooks/useNotas";
import FormularioNota from "../components/FormularioNota";
import BotonAccion from "../components/BotonAccion";
import useNotificacion from "../hooks/useNotificacion"; 
import Alerta from "../components/Alerta";              

function NuevaNota() {
  const { agregarNota } = useNotas();
  const navigate = useNavigate();
  const { notificacion, mostrar, cerrar } = useNotificacion(3000); 

  const handleGuardar = (datos) => {
    const nuevaNota = {
      id: Date.now().toString(),
      ...datos,
      fechaCreacion: new Date().toISOString(),
    };
    agregarNota(nuevaNota);
    mostrar("Nota creada con éxito", "exito");  
    setTimeout(() => navigate("/notas"), 500);  
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

      <h2>Nueva Nota</h2>
      <FormularioNota textoBoton="Crear nota" onGuardar={handleGuardar} />
      <div style={{ marginTop: "10px" }}>
        <BotonAccion
          texto="Cancelar"
          variante="secundario"
          onClick={() => navigate("/notas")}
        />
      </div>
    </div>
  );
}

export default NuevaNota;