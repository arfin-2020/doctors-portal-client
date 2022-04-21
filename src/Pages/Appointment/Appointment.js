import React from 'react';
import Navigation from  '../Shared/Navigation/Navigation';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AppointmentAvailable from './AppointmentAvailable/AppointmentAvailable'
const Appointment = () => {
    const [date, setdate] = React.useState(new Date());
    return (
        <div>
        <Navigation/>
        <AppointmentHeader date={date} setdate={setdate}/>
        <AppointmentAvailable date={date}/>
        </div>
    );
};

export default Appointment;