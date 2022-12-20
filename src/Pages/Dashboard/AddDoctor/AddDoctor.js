import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Slide from 'react-reveal/Slide';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/AuthProvider";
const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialty, setSpecialty] = useState('');
  const [file, setFile] = useState([]);
  const { token } = useAuth();
  const imageStorageKey = '506d0aab2682798ca8beb37ae829cb5a'
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && specialty && file) {
      const image = file;
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            const img = result.data.url;
            const doctorDetails = {
              name,
              email,
              img,
              specialty,

            }
            // send to database
            fetch('https://doctors-portal-server-last.onrender.com/doctor', {
              method: 'POST',
              headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(doctorDetails)
            }).then(res => res.json())
              .then(result => {

                if (result.insertedId) {
                  toast.success("Doctor Details added Successfull!", {
                    position: "top-right",
                    icon: "🚀",
                    theme: "dark",
                  });
                }

              })

            navigate('/admin/manageDoctor')

          }

        })


    } else {
      return toast.warning(
        "You need to fill up all input field",
        {
          position: "top-right",
          theme: "dark",
        }
      );
    }


  }
  const handleChange = (event) => {
    setSpecialty(event.target.value);

  };
  const buttonStyle = {
    backgroundColor: "#1976d2",
    color: "#ffffff",
    border: "none",
    padding: "10px",
    width: "120px",
    borderRadius: "5px",
    fontWeight: "600",
    marginRight: "50px",
  };
  const bookingData = [
    {
      id: 1,
      specialty: "Teeth Orthodontics",
    },
    {
      id: 2,
      specialty: "Cosmetic Dentistry",
    },
    {
      id: 3,
      specialty: "Teeth Cleaning",
    },
    {
      id: 4,
      specialty: "Cavity Protection",
    },
    {
      id: 5,
      specialty: "Teeth Orthodontics",
    },
    {
      id: 7,
      specialty: "Diagnosis and treatment",
    },
    {
      id: 8,
      specialty: "Medical and health check-ups",
    },
    {
      id: 9,
      specialty: "Coordinating healthcare",
    },
    {
      id: 6,
      specialty: "Hair Specialist",
    },
  ];

  return (
    <div>
      <Slide left>
        <h2 className='text-3xl font-bold ' style={{color: "#1976d2"}}>Add New Doctor</h2>

        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "70ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              type="text"
              id="Name"
              label="Name"
              variant="standard"
              color="secondary"
              onChange={e => setName(e.target.value)}
            />
            <br />
            <TextField
              required
              type="email"
              id="Email"
              label="Email"
              variant="standard"
              color="secondary"
              onChange={e => setEmail(e.target.value)}
            />
            <br />
            <TextField
              type="file"
              id="File"
              variant="standard"
              color="secondary"

              onChange={(e) => setFile(e.target.files[0])}
            />
            <br />

            <FormControl sx={{ m: 1, maxWidth: 220 }} size="small">
              <InputLabel id="Subject">Speciality</InputLabel>
              <Select
                labelId="Subject"
                id="Subject"
                value={specialty}
                label="Subject"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  bookingData.map((booking) => (

                    <MenuItem value={booking.specialty} key={booking._id}>{booking.specialty}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <br />
          </Box>
          <div className="mt-5">
            <button style={buttonStyle}>ADD DOCTOR</button>
          </div>

        </form>
      </Slide>


    </div>
  );
};

export default AddDoctor;