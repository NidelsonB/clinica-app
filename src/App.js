import React, { useState, useEffect } from 'react';
import ClinicHeader from './components/ClinicHeader';
import TherapyForm from './components/TherapyForm';
import MonthCalendar from './components/MonthCalendar';

const App = () => {
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('clinicAppointments');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('clinicAppointments', JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ClinicHeader />
      <div className="container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <TherapyForm onAddAppointment={addAppointment} />
          </div>
          <div className="lg:col-span-2">
            <MonthCalendar 
              appointments={appointments} 
              onDeleteAppointment={deleteAppointment} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// DONE