import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/AuthProvider';


const Appointments = ({date}) => {
    const { currentUser, token } = useAuth();
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        let url = `http://localhost:5000/appointment?email=${currentUser?.email}`;
        fetch(url,{
            method:'GET',
            headers:{
                'authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setAppointments(data);
            })
    }, [currentUser?.email, date,token])



    return (
        <div>
            <h1>Total Appointments {appointments.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {appointments.map((appointment) => (
                            <TableRow
                                key={appointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appointment.name}
                                </TableCell>
                                <TableCell align="right">{appointment.visitingHour}</TableCell>
                                <TableCell align="right">{appointment.service}</TableCell>
                                <TableCell align="right">{new Date(appointment.date).toLocaleDateString()}</TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Appointments