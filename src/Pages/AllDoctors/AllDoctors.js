
import { Card } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import DoctorsDetails from './DoctorsDetails';

const AllDoctors = () => {

    const [doctors, setDoctors] = useState();
    const {token} = useAuth();
    // const {img, name, speciality, email} = doctors;
    // console.log(doctors)


  


    useEffect(()=>{
        fetch('https://doctors-portal-server-last.onrender.com/doctor',{
            method : 'GET',
            headers:{
                'authorization' : `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data=>{
            setDoctors(data)
        })
    },[token])

    return (

    
      <div>
      <h1 className='text-3xl m-2'>Our Doctors</h1>
        <Card  className='container mt-5 justify-content-center'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 3,
          maxWidth: 345,
        },
      }}
    >
      
      
    {
      doctors?.map((doctor,index)=>(
        <DoctorsDetails key={doctor._id} name={doctor.name} img={doctor.img} specialty={doctor.specialty}/>
      ))
    }
    </Card>
      </div>
      
      
   

      
          
   
            
  
    );
};

export default AllDoctors;