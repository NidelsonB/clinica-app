import React from 'react';
import AppointmentCard from './AppointmentCard';

const formatDayName = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { weekday: 'long' });
};

const formatDateNumber = (dateString) => {
  const date = new Date(dateString);
  return date.getDate();
};

const WeeklyCalendar = ({ appointments, onDeleteAppointment }) => {
  // Agrupar citas por fecha
  const appointmentsByDate = appointments.reduce((acc, appointment) => {
    const date = appointment.appointmentDate;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(appointment);
    return acc;
  }, {});

  // Generar los próximos 7 días
  const today = new Date();
  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Calendario Semanal</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {next7Days.map((date) => (
          <div key={date} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-blue-50 p-3 border-b border-blue-100">
              <div className="text-center">
                <div className="text-sm text-blue-600">{formatDayName(date)}</div>
                <div className="text-xl font-bold text-blue-800">{formatDateNumber(date)}</div>
              </div>
            </div>
            
            <div className="p-3">
              {appointmentsByDate[date] ? (
                <div className="space-y-3">
                  {appointmentsByDate[date].map((appointment) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                      onDelete={onDeleteAppointment}
                      compact
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-gray-400 text-sm">
                  Sin citas
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;