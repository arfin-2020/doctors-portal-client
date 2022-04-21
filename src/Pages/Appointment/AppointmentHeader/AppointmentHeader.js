import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import chair from "../../../assets/images/Chair.png";
import bgChar from '../../../assets/images/ChairBG.png';
import Calender from '../../Shared/Calender/Calender';
const AppointmentBackGround ={
    background: `url(${bgChar})`,
    backgroundSize:"cover",
    backgroundPosition : "center center",
    height: '450px'
}



const AppointmentHeader = ({date, setdate}) => {
  return (
    <Box style={AppointmentBackGround}>
      <Container>
        <Grid
          container
          spacing={2}
          style={{ marginTop: "30px" }}
          columns={{ xs: 4, sm: 5, md: 12 }}
          sx={{
            display: "flex",
            textAlign: "left",
          }}
        >
          <Grid item xs={12} md={5}>
            <Typography
              sx={{ fontWeight: 600, color: "#333c83", fontSize: 50 }}
            >
              Appointment
            </Typography>
            <Box>
                <Calender date={date} setdate={setdate}/>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <img src={chair} alt="chair" height="280px" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentHeader;
