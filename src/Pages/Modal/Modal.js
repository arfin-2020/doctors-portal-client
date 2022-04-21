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
import React from "react";
import Swal from "sweetalert2";


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
const ModalText = ({ openModal, handleClose, subject, visitingHour,setOpenModal, date}) => {
  const [calenderdate, setCalenderdate] = React.useState(new Date());

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(date.toDateString());
    setOpenModal(false);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Form Send successfull.',
      showConfirmButton: false,
      timer: 1500
    })
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
              {subject}
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
              required
                sx={{ m: 1 }}
                id="outlined-basic"
                label="Name"
                fullWidth
                variant="outlined"
              />
              <TextField
                sx={{ m: 1 }}
                id="outlined-basic"
                label="Phone Number"
                fullWidth
                required
                variant="outlined"
              />
              <TextField
                sx={{ m: 1 }}
                id="outlined-basic"
                label="Email"
                fullWidth
                required
                variant="outlined"
              />
              
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Date"
                    sx={{ m: 1 }}
                    value={date}
                    minDate={new Date("2017-01-01")}
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
