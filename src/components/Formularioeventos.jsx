// src/components/FormularioEvento.jsx
import { useState } from "react";
import Alerta from "./Alerta";
import BotonAccion from "./BotonAccion";

const estadoInicial = {
  titulo: "",
  fecha: "",
  categoria: "",
  descripcion: "",
  esPublico: false,
};

function FormularioEvento() {
  const [form, setForm] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [eventosRegistrados, setEventosRegistrados] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Limpiar error del campo al escribir
    if (errores[name]) {
      setErrores((prev) => {
        const nuevo = { ...prev };
        delete nuevo[name];
        return nuevo;
      });
    }
  };

  const validar = () => {
    const nuevosErrores = {};
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (!form.titulo.trim() || form.titulo.trim().length < 5) {
      nuevosErrores.titulo = "El título debe tener al menos 5 caracteres";
    }
    if (!form.fecha) {
      nuevosErrores.fecha = "La fecha es obligatoria";
    } else if (new Date(form.fecha) < hoy) {
      nuevosErrores.fecha = "La fecha no puede ser pasada";
    }
    if (!form.categoria) {
      nuevosErrores.categoria = "Selecciona una categoría";
    }
    if (!form.descripcion.trim() || form.descripcion.trim().length < 20) {
      nuevosErrores.descripcion = "La descripción debe tener al menos 20 caracteres";
    }
    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar();
    setErrores(erroresValidacion);

    if (Object.keys(erroresValidacion).length === 0) {
      // Registrar evento
      setEventosRegistrados((prev) => [...prev, form]);
      setMostrarConfirmacion(true);
      setForm(estadoInicial);
      setTimeout(() => setMostrarConfirmacion(false), 4000);
    }
  };

  const camposVacios = !form.titulo || !form.fecha || !form.categoria || !form.descripcion;

  return (
    <div>
      {mostrarConfirmacion && (
        <Alerta tipo="exito" titulo="Evento registrado con éxito">
          <p><strong>Título:</strong> {form.titulo || eventosRegistrados[eventosRegistrados.length - 1]?.titulo}</p>
          <p><strong>Fecha:</strong> {form.fecha || eventosRegistrados[eventosRegistrados.length - 1]?.fecha}</p>
          <p><strong>Categoría:</strong> {form.categoria || eventosRegistrados[eventosRegistrados.length - 1]?.categoria}</p>
          <p><strong>Público:</strong> {form.esPublico ? "Sí" : "No"}</p>
        </Alerta>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label>Título:</label><br />
          <input
            type="text"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            style={{ width: "100%", padding: "6px" }}
          />
          {errores.titulo && <Alerta tipo="error" titulo={errores.titulo} />}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Fecha:</label><br />
          <input
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            style={{ width: "100%", padding: "6px" }}
          />
          {errores.fecha && <Alerta tipo="error" titulo={errores.fecha} />}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Categoría:</label><br />
          <select
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            style={{ width: "100%", padding: "6px" }}
          >
            <option value="">Seleccionar...</option>
            <option value="conferencia">Conferencia</option>
            <option value="taller">Taller</option>
            <option value="seminario">Seminario</option>
            <option value="otro">Otro</option>
          </select>
          {errores.categoria && <Alerta tipo="error" titulo={errores.categoria} />}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Descripción:</label><br />
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            rows="4"
            style={{ width: "100%", padding: "6px" }}
          />
          {errores.descripcion && <Alerta tipo="error" titulo={errores.descripcion} />}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>
            <input
              type="checkbox"
              name="esPublico"
              checked={form.esPublico}
              onChange={handleChange}
            />
            {" "}Evento público
          </label>
        </div>

        <BotonAccion
          texto="Registrar evento"
          variante="primario"
          disabled={camposVacios}
          onClick={handleSubmit}
        />
      </form>

      {/* Lista de eventos registrados */}
      {eventosRegistrados.length > 0 && (
        <div style={{ marginTop: "24px" }}>
          <h4>Eventos registrados ({eventosRegistrados.length})</h4>
          <ul>
            {eventosRegistrados.map((ev, idx) => (
              <li key={idx}>
                <strong>{ev.titulo}</strong> — {ev.fecha} — {ev.categoria} — {ev.esPublico ? "Público" : "Privado"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FormularioEvento;