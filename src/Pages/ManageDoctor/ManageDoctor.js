import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { default as TableCell } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import { useAuth } from '../Context/AuthProvider';

const ManageDoctor = () => {
    const { token } = useAuth();
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/doctor`, {
            headers: { authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(doctors => {
                setDoctors(doctors)
            })
    }, [token])

    const handleDelete = id => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete it!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/doctor/${id}`, {
                        method: 'DELETE',
                        headers: { authorization: `Bearer ${token}` }
                    })
                    .then(res => res.json())
            .then(result => {
                if(result.deletedCount === 1) {
                    const remainingDoctors = doctors.filter((doctor)=>doctor._id !==id);
                    setDoctors(remainingDoctors)
                }
            })
            Swal.fire(
                'Deletd!',
                'Your Doctor has been deleted.',
                "success"
            )

                }
            })
            
    }
    return (
        <div>
            
            <TableContainer component={Paper}>
            <h2 className='text-3xl font-bold'>Total  Doctors {doctors.length}</h2>
                <Table sx={{ minWidth: 300}} aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Speciality</TableCell>
                            <TableCell>action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {doctors.map((doctor, index) => (
                            // let date = appointment.date
                            <TableRow
                                key={doctor._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {doctor.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <img style={{
                                        borderRadius: "50%", alignItems: "center", justifyContent: "center" 
                                    }} src={`${doctor.img}`} alt="doctorImage" height={100} width={100} />
                                </TableCell>

                                <TableCell component="th" scope="row">
                                    {doctor.specialty}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <Button onClick={() => handleDelete(doctor._id)} variant="outlined" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageDoctor;