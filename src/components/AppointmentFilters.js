import React from 'react';
import therapies from '../mock/therapies';

const AppointmentFilters = ({ filter, setFilter }) => {
  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Filtrar Citas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="filterPatient">
            Paciente
          </label>
          <input
            id="filterPatient"
            type="text"
            placeholder="Buscar por nombre"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filter.patientName}
            onChange={(e) => setFilter({ ...filter, patientName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="filterTherapy">
            Terapia
          </label>
          <select
            id="filterTherapy"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filter.therapy}
            onChange={(e) => setFilter({ ...filter, therapy: e.target.value })}
          >
            <option value="">Todas las terapias</option>
            {therapies.map((therapy) => (
              <option key={therapy.id} value={therapy.name}>
                {therapy.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2" htmlFor="filterDate">
            Fecha
          </label>
          <input
            id="filterDate"
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filter.date}
            onChange={(e) => setFilter({ ...filter, date: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentFilters;