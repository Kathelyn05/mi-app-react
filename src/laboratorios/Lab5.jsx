import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotasProvider } from "../context/NotasProvider";
import Layout from "../components/Layout";
import Inicio from "../pages/Inicio";
import Notas from "../pages/Notas";
import NuevaNota from "../pages/NuevaNota";
import DetalleNota from "../pages/DetalleNota";
import EditarNota from "../pages/EditarNota";
import NoEncontrada from "../pages/NoEncontrada";

function Lab5() {
  return (
    <NotasProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="notas" element={<Notas />} />
            <Route path="notas/nueva" element={<NuevaNota />} />
            <Route path="notas/:id" element={<DetalleNota />} />
            <Route path="notas/:id/editar" element={<EditarNota />} />
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NotasProvider>
  );
}

export default Lab5;