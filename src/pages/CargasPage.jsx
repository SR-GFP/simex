import { useState } from "react";
import LoadSheetForm from "../components/LoadSheetForm";
import PlanillaCargas from "../components/PlanillaCargas";
import { Link } from "react-router-dom";

const CargasPage = () => {
  const [mostrarFormulario, setmostrarFormulario] = useState(false);
  const [cargas, setCargas] = useState([
    {
      ubicacion: "Oficina",
      declaracion: "000111B",
      estado: "Presentada",
      cliente: "Adama",
      canal: "Naranja",
      ramo: "8",
      fechaVerificacion: "14/09/2024",
      fechaCarga: "15/09/2024",
      turno: "18:00",
      terminal: "Exolgan",
      responsable: "Dario",
    },
    {
      ubicacion: "UTV",
      declaracion: "013971P",
      estado: "Pres",
      cliente: "Adama",
      canal: "Naranja",
      ramo: "3",
      fechaVerificacion: " ",
      fechaCarga: "24/09/2024",
      turno: "15:00",
      terminal: "Deiba",
      responsable: "Gaby",
    },
  ]);

  const agregarCarga = (nuevaCarga) => {
    setCargas([...cargas, nuevaCarga]);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-center">Planilla de Cargas</h1>
        <div className="text-center font-bold text-3xl ">
          <Link to="/formularioCargas">
            <button
              className="bg-blue-500 text-white px-3 py-3 rounded"
              onClick={() => setmostrarFormulario(!mostrarFormulario)}
            >
              {mostrarFormulario ? "Ocultar Formulario" : "Cargar Operacion"}
            </button>
          </Link>
        </div>
      </div>
      <PlanillaCargas cargas={cargas} />
      {mostrarFormulario && <LoadSheetForm agregarCarga={agregarCarga} />}
    </div>
  );
};

export default CargasPage;
