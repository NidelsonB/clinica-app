import React from 'react';
import AppointmentCard from './AppointmentCard';

const AppointmentList = ({ appointments, onDeleteAppointment }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Citas Programadas</h2>
      
      {appointments.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="mt-2 text-gray-500">No hay citas programadas</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {appointments.map(appointment => (
            <AppointmentCard 
              key={appointment.id} 
              appointment={appointment} 
              onDelete={onDeleteAppointment} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;