import { PropTypes } from "prop-types";

const PlanillaCargas = ({ cargas }) => {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-500 border-collapse text-left">
        <thead className="bg-blue-100">
          <tr>
            <th className="hidden md:table-cell px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Ubicacion
            </th>
            <th className="px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Declaracion
            </th>
            <th className="hidden md:table-cell px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Estado
            </th>
            <th className="px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Canal
            </th>
            <th className="hidden md:table-cell px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Ramo
            </th>
            <th className="px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Cliente
            </th>
            <th className="hidden md:table-cell px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Fecha Verificacion
            </th>
            <th className="px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Fecha Carga
            </th>
            <th className="px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Turno
            </th>
            <th className="px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Terminal
            </th>
            <th className="hidden md:table-cell px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Responsable
            </th>
            <th className="px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Detalle
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200 divide-y divide-blue-300">
          {cargas.map((carga, index) => (
            <tr className="hover:bg-gray-500  cursor-pointer" key={index}>
              <td className="hidden md:table-cell px-3 py-2 whitespace-nowrap text-sm font-medium text-black text-center">
                {carga.ubicacion}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-black text-center">
                {carga.declaracion}
              </td>
              <td className="hidden md:table-cell px-3 py-2 whitespace-nowrap text-sm font-medium text-black text-center">
                {carga.estado}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-black text-center">
                {carga.canal}
              </td>
              <td className="hidden md:table-cell px-3 py-2 whitespace-nowrap text-sm font-medium text-black text-center">
                {carga.ramo}
              </td>
              <td>{carga.cliente}</td>
              <td className="hidden md:table-cell px-3 py-2 whitespace-nowrap text-sm font-medium text-black text-center">
                {carga.fechaVerificacion}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-black text-center">
                {carga.fechaCarga}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-black text-center">
                {carga.turno}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-black text-center">
                {carga.terminal}
              </td>
              <td className="hidden md:table-cell px-3 py-2 whitespace-nowrap text-sm font-medium text-black text-center">
                {carga.responsable}
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-black text-center">
                <button className="bg-blue-500 text-white px-3 py-3 rounded">
                  Ver/Modificar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PlanillaCargas.propTypes = {
  cargas: PropTypes.arrayOf(
    PropTypes.shape({
      ubicacion: PropTypes.string,
      declaracion: PropTypes.string,
      estado: PropTypes.string,
      canal: PropTypes.string,
      ramo: PropTypes.string,
      cliente: PropTypes.string,
      fechaVerificacion: PropTypes.string,
      fechaCarga: PropTypes.string,
      turno: PropTypes.string,
      terminal: PropTypes.string,
      responsable: PropTypes.string,
    })
  ).isRequired,
};

export default PlanillaCargas;
