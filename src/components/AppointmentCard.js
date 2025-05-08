import React from 'react';

const formatTime = (timeString) => {
  return timeString;
};

const AppointmentCard = ({ appointment, onDelete, compact = false }) => {
  if (compact) {
    return (
      <div className="bg-blue-50 rounded-lg p-2 border border-blue-100">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-medium text-sm text-gray-800 truncate">{appointment.patientName}</div>
            <div className="text-xs text-blue-600">{appointment.selectedTherapy}</div>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-medium mr-2">{formatTime(appointment.appointmentTime)}</span>
            <button 
              onClick={() => onDelete(appointment.id)}
              className="text-red-400 hover:text-red-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-500">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{appointment.patientName}</h3>
            <p className="text-blue-600 font-medium">{appointment.selectedTherapy}</p>
            
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(appointment.appointmentDate).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            
            <div className="mt-1 flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{appointment.appointmentTime}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              appointment.isPaid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {appointment.isPaid ? 'Pagado' : 'Pendiente'}
            </span>
            
            <button 
              onClick={() => onDelete(appointment.id)}
              className="mt-2 text-red-500 hover:text-red-700 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;