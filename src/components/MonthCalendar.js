import React, { useState } from 'react';
import AppointmentCard from './AppointmentCard';

const MonthCalendar = ({ appointments, onDeleteAppointment }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                     "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  // Agrupar citas por fecha
  const appointmentsByDate = appointments.reduce((acc, appointment) => {
    const date = appointment.appointmentDate;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(appointment);
    return acc;
  }, {});

  // Generar cuadrícula del mes
  const renderCalendar = () => {
    const blanks = Array(firstDay).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const totalCells = [...blanks, ...days];
    
    return (
      <div className="grid grid-cols-7 gap-1">
        {dayNames.map(day => (
          <div key={day} className="text-center font-medium text-gray-500 py-2 text-sm">
            {day}
          </div>
        ))}
        
        {totalCells.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} className="h-24 bg-gray-50 rounded"></div>;
          }
          
          const dateString = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
          const dayAppointments = appointmentsByDate[dateString] || [];
          
          return (
            <div key={dateString} className="h-24 bg-white border border-gray-100 rounded overflow-hidden">
              <div className="p-1 text-right text-sm">
                <span className={`inline-block w-6 h-6 rounded-full text-center leading-6 ${
                  dateString === new Date().toISOString().split('T')[0] 
                    ? 'bg-blue-500 text-white' 
                    : ''
                }`}>
                  {day}
                </span>
              </div>
              
              <div className="overflow-y-auto h-16">
                {dayAppointments.map(appointment => (
                  <div key={appointment.id} className="mx-1 mb-1">
                    <div className="bg-blue-50 p-1 rounded text-xs truncate border-l-2 border-blue-500">
                      <div className="font-medium truncate">
                        {appointment.patientName.split(' ')[0]}
                      </div>
                      <div className="text-blue-600 truncate">{appointment.selectedTherapy}</div>
                      <div className="text-gray-500 text-xs">{appointment.appointmentTime}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {monthNames[month]} {year}
        </h2>
        
        <div className="flex space-x-2">
          <button 
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {renderCalendar()}
    </div>
  );
};

export default MonthCalendar;