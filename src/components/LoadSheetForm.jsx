import { Link } from "react-router-dom";

const LoadSheetForm = () => {
  return (
    <form action="">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Nueva Carga
      </h2>
      {/* Ubicación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Ubicación</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Ubicación"
          />
        </div>

        {/* Declaración */}
        <div>
          <label className="block text-gray-700">Declaración</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Declaración"
          />
        </div>
      </div>

      {/* Estado y Canal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Estado</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Estado"
          />
        </div>
        <div>
          <label className="block text-gray-700">Canal</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Canal"
          />
        </div>
      </div>

      {/* Ramo y Cliente */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Ramo</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Ramo"
          />
        </div>
        <div>
          <label className="block text-gray-700">Cliente</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Cliente"
          />
        </div>
      </div>

      {/* Fechas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700">Fecha de Ofi.</label>
          <input
            type="date"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Fecha de Verificación</label>
          <input
            type="date"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Fecha de Carga</label>
          <input
            type="date"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Turno, Terminal, Responsable */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700">Turno</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Turno"
          />
        </div>
        <div>
          <label className="block text-gray-700">Terminal</label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Terminal 4</option>
            <option>Exolgan</option>
            <option>TRP</option>
          </select>
          {/* 
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Terminal"
          /> */}
        </div>
        <div>
          <label className="block text-gray-700">Responsable</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Responsable"
          />
        </div>
      </div>

      {/* Botón de envío */}
      <div className="text-center">
        <Link to={"/cargas"}>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Cargar
          </button>
        </Link>
      </div>
    </form>
  );
};

export default LoadSheetForm;
