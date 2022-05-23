import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/AuthProvider';

const Appointments = () => {
    const { currentUser } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        let url = `http://localhost:5000/appointment?email=${currentUser?.email}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAppointments(data);
                console.log(data)
            })
    }, [])
    return (
        <div>
            <h1>Total Appointments {appointments.length}</h1>
        </div>
    )
}

export default Appointments