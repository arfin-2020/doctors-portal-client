import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthProvider';

const ManageDoctor = () => {
    const {token} = useAuth();
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/doctor`,{
            headers: {'authorization':`Bearer ${token}`}
        })
        .then(res=>res.json())
        .then(doctors=>{
            setDoctors(doctors)
        })
    },[])
    return (
        <div>
            <h2 className='text-2xl'>Manage Doctors</h2>
            <h2 className='text-2xl'>Total  Doctors {doctors.length}</h2>
        </div>
    );
};

export default ManageDoctor;