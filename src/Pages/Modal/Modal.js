import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../Context/AuthProvider";

const Modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};
const buttonStyle = {
  backgroundColor: "#333c83",
  color: "#ffffff",
  border: "none",
  padding: "10px",
  width: "150px",
  borderRadius: "5px",
  fontWeight: "600",
  marginTop: "10px",
};
const ModalText = ({
  openModal,
  handleClose,
  subject,
  visitingHour,
  setOpenModal,
  date,
  price
}) => {
  const [calenderdate, setCalenderdate] = React.useState(new Date());
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  

  
  
  const {currentUser} = useAuth();

  const handleFormSubmit = e => {

    e.preventDefault();

    const bookingInformation = {
      name: name || currentUser.name,
      phoneNumber: phoneNumber,
      email: currentUser.email,
      date: new Date(date).toLocaleDateString(),
      price,
      visitingHour,
      service: subject,
    };
// console.log("BOOking------------",bookingInformation);
    fetch('http://localhost:5000/appointment',{
      method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(bookingInformation)
    })
    .then(response=> response.json())
    .then(data => {
      // console.log(data)
      if(data.acknowledged){

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Appointment Booked Successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    .catch(error => console.error('Unable to get items.', error));


    // console.log(data)
    setOpenModal(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={Modalstyle}>
            <div className="d-flex  justify-content-center">
              <Typography
                sx={{ fontWeight: 600, fontSize: 30, color: "#333c83" }}
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Booking for: {subject}
              </Typography>
            </div>
            <div className="d-flex  justify-content-center">
              <Typography
                sx={{ fontWeight: 600, fontSize: 20, color: "#333c83" }}
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Appointment Price : {price}
              </Typography>
            </div>

            <form onSubmit={handleFormSubmit}>
              <TextField
              disabled
                sx={{ m: 1 }}
                defaultValue={visitingHour}
                id="outlined-basic"
                label="Time"
                fullWidth
                variant="outlined"
                
              />
              <TextField
                
                type="text"
                sx={{ m: 1 }}
                id="outlined-basic"
                label="Name"
                defaultValue={currentUser.name}
                fullWidth
                variant="outlined"
                onChange={e => setName(e.target.value)}
              />
              <TextField
                type="number"
                sx={{ m: 1 }}
                id="outlined-basic"
                label="Phone Number"
                fullWidth
                required
                variant="outlined"
                onChange={e => setphoneNumber(e.target.value)}
              />
              <TextField
                type="email"
                sx={{ m: 1 }}
                id="outlined-basic"
                label="Email"
                fullWidth
                required
                variant="outlined"
                defaultValue={currentUser.email}
                // onChange={e => setEmail(e.target.value)}
              />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                  disabled
                    label="Date"
                    sx={{ m: 1 }}
                    value={date}
                    minDate={new Date()}
                    onChange={newValue => {
                      setCalenderdate(newValue);
                    }}
                    renderInput={params => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
              <div className="d-flex  justify-content-end">
                <button style={buttonStyle}>Send</button>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalText;
