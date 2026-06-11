
import { useState, useEffect } from "react";

function leerConfiguracion() {
  try {
    const guardado = localStorage.getItem("config-usuario");
    if (guardado) {
      return JSON.parse(guardado);
    }
  } catch (error) {
    console.error("Error al leer configuración:", error);
  }

  return { nombre: "", tema: "claro", notificaciones: true };
}

function ConfiguracionUsuario() {
  const [config, setConfig] = useState(leerConfiguracion);

 
  useEffect(() => {
    try {
      localStorage.setItem("config-usuario", JSON.stringify(config));
    } catch (error) {
      console.error("Error al guardar configuración:", error);
    }
  }, [config]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const restablecer = () => {
    localStorage.removeItem("config-usuario");
    setConfig({ nombre: "", tema: "claro", notificaciones: true });
  };

  return (
    <div>
      <h3>Configuración de Usuario</h3>
      <form>
        <label>
          Nombre:{" "}
          <input name="nombre" value={config.nombre} onChange={handleChange} />
        </label>
        <br /><br />
        <label>
          Tema:{" "}
          <select name="tema" value={config.tema} onChange={handleChange}>
            <option value="claro">Claro</option>
            <option value="oscuro">Oscuro</option>
          </select>
        </label>
        <br /><br />
        <label>
          <input
            type="checkbox"
            name="notificaciones"
            checked={config.notificaciones}
            onChange={handleChange}
          />
          {" "}Notificaciones
        </label>
      </form>

      <h4>Vista previa (datos guardados):</h4>
      <pre>{JSON.stringify(config, null, 2)}</pre>

      <button onClick={restablecer}>Restablecer valores</button>
    </div>
  );
}

export default ConfiguracionUsuario;