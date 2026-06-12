
import { useReducer, useEffect } from "react";
import { NotasContext } from "./NotasContext";


const notasIniciales = [
  {
    id: "1",
    titulo: "Comprar comida",
    contenido: "Leche, huevos, pan, frutas y verduras para la semana.",
    categoria: "personal",
    fijada: true,
    fechaCreacion: new Date("2026-06-01").toISOString(),
  },
  {
    id: "2",
    titulo: "Reunión proyecto",
    contenido: "Preparar presentación de avances para el cliente.",
    categoria: "trabajo",
    fijada: false,
    fechaCreacion: new Date("2026-06-02").toISOString(),
  },
  {
    id: "3",
    titulo: "Repasar hooks",
    contenido: "useEffect, useReducer, useContext para el examen.",
    categoria: "estudio",
    fijada: true,
    fechaCreacion: new Date("2026-06-03").toISOString(),
  },
  {
    id: "4",
    titulo: "Idea de app",
    contenido: "Una app para organizar recetas de cocina con filtros.",
    categoria: "ideas",
    fijada: false,
    fechaCreacion: new Date("2026-06-04").toISOString(),
  },
  {
    id: "5",
    titulo: "Leer libro",
    contenido: "Terminar 'El código limpio' este mes.",
    categoria: "estudio",
    fijada: false,
    fechaCreacion: new Date("2026-06-05").toISOString(),
  },
];


function leerNotasGuardadas() {
  try {
    const guardado = localStorage.getItem("notas-app");
    if (guardado) {
      return JSON.parse(guardado);
    }
  } catch (error) {
    console.error("Error al leer notas de localStorage:", error);
  }
  return notasIniciales; 
}


const estadoInicial = {
  notas: leerNotasGuardadas(),
  filtroCategoria: "todas",
  busqueda: "",
};


function notasReducer(state, action) {
  switch (action.type) {
    case "AGREGAR_NOTA":
      return { ...state, notas: [...state.notas, action.payload] };
    case "ELIMINAR_NOTA":
      return {
        ...state,
        notas: state.notas.filter((n) => n.id !== action.payload),
      };
    case "EDITAR_NOTA":
      return {
        ...state,
        notas: state.notas.map((n) =>
          n.id === action.payload.id
            ? { ...n, ...action.payload.datos }
            : n
        ),
      };
    case "TOGGLE_FIJADA":
      return {
        ...state,
        notas: state.notas.map((n) =>
          n.id === action.payload ? { ...n, fijada: !n.fijada } : n
        ),
      };
    case "CAMBIAR_FILTRO":
      return { ...state, filtroCategoria: action.payload };
    case "CAMBIAR_BUSQUEDA":
      return { ...state, busqueda: action.payload };
    default:
      return state;
  }
}


export function NotasProvider({ children }) {
  const [state, dispatch] = useReducer(notasReducer, estadoInicial);

  
  useEffect(() => {
    try {
      localStorage.setItem("notas-app", JSON.stringify(state.notas));
    } catch (error) {
      console.error("Error al guardar notas en localStorage:", error);
    }
  }, [state.notas]);

  const agregarNota = (nota) =>
    dispatch({ type: "AGREGAR_NOTA", payload: nota });
  const eliminarNota = (id) =>
    dispatch({ type: "ELIMINAR_NOTA", payload: id });
  const editarNota = (id, datos) =>
    dispatch({ type: "EDITAR_NOTA", payload: { id, datos } });
  const toggleFijada = (id) =>
    dispatch({ type: "TOGGLE_FIJADA", payload: id });
  const cambiarFiltro = (categoria) =>
    dispatch({ type: "CAMBIAR_FILTRO", payload: categoria });
  const cambiarBusqueda = (texto) =>
    dispatch({ type: "CAMBIAR_BUSQUEDA", payload: texto });

  const value = {
    notas: state.notas,
    filtroCategoria: state.filtroCategoria,
    busqueda: state.busqueda,
    agregarNota,
    eliminarNota,
    editarNota,
    toggleFijada,
    cambiarFiltro,
    cambiarBusqueda,
  };

  return (
    <NotasContext.Provider value={value}>{children}</NotasContext.Provider>
  );
}