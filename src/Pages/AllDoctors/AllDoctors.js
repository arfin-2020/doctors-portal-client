
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { useAuth } from '../Context/AuthProvider';
import DoctorsDetails from './DoctorsDetails';
const AllDoctors = () => {

  const [doctors, setDoctors] = useState();
  const { token } = useAuth();
  useEffect(() => {
    fetch('https://doctors-portal-server-last.onrender.com/doctor', {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setDoctors(data)
      })
  }, [token])

  return (
    <Fade left>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight" style={{ color: "#1976d2" }}>Meet Our Doctors</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              doctors?.map((doctor, index) => (
                <DoctorsDetails key={doctor._id} name={doctor.name} img={doctor.img} specialty={doctor.specialty} />
              ))
            }
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AllDoctors;