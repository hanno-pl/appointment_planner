import React from "react";
import { useState } from "react";
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';
import {TileList} from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {
  const appointments = props.appointments;
  const addAppointment = props.addAppointment;
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(title, contact, date, time);
   setTitle('')
   setContact('')
   setDate('')
   setTime('')
  };

  console.log(appointments)

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={title}
        setTitle={setTitle}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        contacts={props.contacts}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objects={appointments} />
      </section>
    </div>
  );
};
