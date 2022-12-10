import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';

const Appointments = () => {
    const { currentUser, token } = useAuth();
    const [appointments, setAppointments] = useState([]);
    // console.log("Appointment---------",appointments)
    useEffect(() => {
        let url = `http://localhost:5000/appointment?email=${currentUser?.email}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setAppointments(data);
            })
    }, [currentUser?.email, token])



    return (
        <div>
            <Zoom left>
            <h1 className="mb-2 text-1xl font-bold">Total Appointments {appointments.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">TransactionId</TableCell>
                            <TableCell align="right">Payments</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
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
                                <TableCell align="right">{appointment.price}</TableCell>
                                <TableCell align="right">
                                   
                                    {(appointment?.price && appointment?.paid) && <div>
                                       
                                        <span style={{color:"#fff", background: "#3F0071", padding: "10px 20px 10px 20px", borderRadius:'5px', fontWeight:'bold', marginLeft:"10px"}}>
                                       TransactionId : {appointment?.transactionId}
                                    </span>
                                    </div>
                                    }
                                </TableCell>
                                <TableCell align="right">
                                {(appointment?.price && !appointment?.paid) && <Link to={`/dashboard/payment/${appointment._id}`}><Button variant="contained" color="success">
                                        Pay
                                    </Button>
                                    </Link>}
                                    {(appointment?.price && appointment?.paid) && <div>
                                        <span style={{color:"#fff", background: "#0a2540", padding: "10px 20px 10px 20px", borderRadius:'5px', fontWeight:'bold'}}>
                                        Paid
                                    </span>
                                       
                                    </div>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
         
        </Zoom>
        </div>
    )
}

export default Appointments