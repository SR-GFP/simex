import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CargasPage from "./pages/CargasPage";
import FormularioCargas from "./pages/FormularioCargas";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<h2>Vista Home </h2>} />
          <Route path="/cargas" element={<CargasPage />} />
          <Route path="/FormularioCargas" element={<FormularioCargas />} />
          <Route path="/operaciones" element={<h2>Vista Operaciones </h2>} />
          <Route
            path="/digitalizacion"
            element={<h2>Vista Digitalizacion </h2>}
          />
          <Route path="/facturacion" element={<h2>Vista Facturacion </h2>} />
          <Route path="/login" element={<h2>Vista Login </h2>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
