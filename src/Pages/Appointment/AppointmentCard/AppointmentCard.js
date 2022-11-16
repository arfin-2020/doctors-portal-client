import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import ModalText from "../../Modal/Modal";

const AppointmentCard = ({ subject, visitingHour, totalSpace, id,price, date }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  return (
    <Box>
      <Paper elevation={3} sx={{ minWidth: 275, padding: 3, marginBottom: 3 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 30, color: "#333c83" }}>
          {subject}
        </Typography>
        <Typography sx={{ fontWeight: 500, fontSize: 20 }}>
          {visitingHour}
        </Typography>
        <Typography sx={{ fontWeight: 500, fontSize: 20 }}>
          {price}
        </Typography>
        <Typography>{totalSpace} Space Available</Typography>
        <Button onClick={handleOpen} className="mt-2" variant="contained">
          BOOK APPOINTMENT
        </Button>
        <ModalText
          date={date}
          price={price}
          handleClose={handleClose}
          visitingHour={visitingHour}
          subject={subject}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </Paper>
    </Box>
  );
};

export default AppointmentCard;
