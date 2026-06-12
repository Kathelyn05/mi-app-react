import { useState } from "react";
import BotonAccion from "./BotonAccion";

const categorias = ["personal", "trabajo", "estudio", "ideas"];

function FormularioNota({
  valoresIniciales = {
    titulo: "",
    contenido: "",
    categoria: "personal",
    fijada: false,
  },
  textoBoton = "Guardar",
  onGuardar,
}) {
  const [form, setForm] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errores[name]) {
      setErrores((prev) => {
        const nuevo = { ...prev };
        delete nuevo[name];
        return nuevo;
      });
    }
  };

  const validar = () => {
    const err = {};
    if (!form.titulo.trim() || form.titulo.trim().length < 3) {
      err.titulo = "El título debe tener al menos 3 caracteres";
    }
    if (!form.contenido.trim() || form.contenido.trim().length < 10) {
      err.contenido = "El contenido debe tener al menos 10 caracteres";
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar();
    setErrores(erroresValidacion);
    if (Object.keys(erroresValidacion).length === 0) {
      onGuardar(form);
    }
  };

  const hayErrores = Object.keys(errores).length > 0;

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <label>Título:</label>
        <br />
        <input
          type="text"
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          style={{ width: "100%", padding: "6px" }}
        />
        {errores.titulo && (
          <span style={{ color: "red", fontSize: "0.9rem" }}>
            {errores.titulo}
          </span>
        )}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Contenido:</label>
        <br />
        <textarea
          name="contenido"
          value={form.contenido}
          onChange={handleChange}
          rows="5"
          style={{ width: "100%", padding: "6px" }}
        />
        {errores.contenido && (
          <span style={{ color: "red", fontSize: "0.9rem" }}>
            {errores.contenido}
          </span>
        )}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Categoría:</label>
        <br />
        <select
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          style={{ width: "100%", padding: "6px" }}
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="checkbox"
            name="fijada"
            checked={form.fijada}
            onChange={handleChange}
          />
          {" "}Fijada
        </label>
      </div>
      <BotonAccion
        texto={textoBoton}
        variante="primario"
        disabled={hayErrores}
        onClick={handleSubmit}
      />
    </form>
  );
}

export default FormularioNota;