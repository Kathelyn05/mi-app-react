// src/components/ListaContactos.jsx
import { useState } from "react";
import Modal from "./Modal";
import BotonAccion from "./BotonAccion";
import Alerta from "./Alerta";

const contactosIniciales = [
  { id: 1, nombre: "Ana García", telefono: "123-456-789", favorito: true },
  { id: 2, nombre: "Carlos López", telefono: "987-654-321", favorito: false },
  { id: 3, nombre: "Elena Martínez", telefono: "555-123-456", favorito: true },
  { id: 4, nombre: "Pedro Sánchez", telefono: "555-987-654", favorito: false },
  { id: 5, nombre: "Lucía Fernández", telefono: "555-555-555", favorito: true },
];

function ListaContactos() {
  const [contactos, setContactos] = useState(contactosIniciales);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarSoloFavoritos, setMostrarSoloFavoritos] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(null); // guarda el contacto a eliminar

  // Filtrar en tiempo real
  const contactosFiltrados = contactos
    .filter((c) => {
      if (mostrarSoloFavoritos && !c.favorito) return false;
      if (busqueda.trim() === "") return true;
      const termino = busqueda.toLowerCase();
      return (
        c.nombre.toLowerCase().includes(termino) ||
        c.telefono.toLowerCase().includes(termino)
      );
    });

  const totalFavoritos = contactos.filter((c) => c.favorito).length;

  const toggleFavorito = (id) => {
    setContactos((prev) =>
      prev.map((c) => (c.id === id ? { ...c, favorito: !c.favorito } : c))
    );
  };

  const confirmarEliminar = (contacto) => {
    setModalEliminar(contacto);
  };

  const eliminarContacto = () => {
    if (modalEliminar) {
      setContactos((prev) => prev.filter((c) => c.id !== modalEliminar.id));
      setModalEliminar(null);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "12px" }}>
        <input
          type="text"
          placeholder="Buscar por nombre o teléfono"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ padding: "6px 10px", width: "100%", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "8px" }}>
        <BotonAccion
          texto={mostrarSoloFavoritos ? "Mostrar todos" : "Solo favoritos"}
          variante="secundario"
          onClick={() => setMostrarSoloFavoritos(!mostrarSoloFavoritos)}
        />
      </div>
      <p>
        Mostrando {contactosFiltrados.length} de {contactos.length} contactos ({totalFavoritos} favoritos)
      </p>

      {contactosFiltrados.length === 0 ? (
        <Alerta tipo="info" titulo="No se encontraron contactos" />
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {contactosFiltrados.map((c) => (
            <li
              key={c.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span>
                <span
                  onClick={() => toggleFavorito(c.id)}
                  style={{ cursor: "pointer", marginRight: "10px", fontSize: "1.2rem" }}
                >
                  {c.favorito ? "★" : "☆"}
                </span>
                {c.nombre} — {c.telefono}
              </span>
              <BotonAccion
                texto="Eliminar"
                variante="peligro"
                onClick={() => confirmarEliminar(c)}
              />
            </li>
          ))}
        </ul>
      )}

      {/* Modal de confirmación */}
      <Modal
        titulo="Confirmar eliminación"
        abierto={modalEliminar !== null}
      >
        <p>¿Estás seguro de eliminar a {modalEliminar?.nombre}?</p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "16px" }}>
          <BotonAccion texto="Cancelar" variante="secundario" onClick={() => setModalEliminar(null)} />
          <BotonAccion texto="Eliminar" variante="peligro" onClick={eliminarContacto} />
        </div>
      </Modal>
    </div>
  );
}

export default ListaContactos;