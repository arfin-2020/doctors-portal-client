import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import AppointmentBG from "../../../assets/images/appointmentBg.png";
import DoctorImage from "../../../assets/images/doctorvai.png";


const AppointmentBackGround = {
  background: `url(${AppointmentBG})`,
  backgroundColor: "rgba(59, 55, 57, 0.8)",
  backgroundBlendMode: "darken, luminosity",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed" /*only if you want*/,
};

const AppointmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1, m: 10 }} style={AppointmentBackGround}>
      <Container>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} md={4}>
            <img
              src={DoctorImage}
              style={{ width: "400px", marginTop: "-100px" }}
              alt="doctor"
            />
          </Grid>
            <Grid item xs={12} md={8} sx={{
                display: 'flex',
                justifyContent:"flex-start",
                textAlign:"left",
                alignItems: 'center',
                
            }}>
          <Box>
              <Typography variant="h6" sx={{mb:5}} style={{ color: "#008080" }}>
                Appointment
              </Typography>
              <Typography
                variant="h4"
                sx={{mb:3}}
                style={{ color: "white", fontWeight: "500", fontSize: "40px" }}
              >
                {" "}
                Make an Appointment <br />
                Today.
              </Typography>
              <Typography sx={{mb:1}} style={{ color: "white", fontSize: "18px" }}>
                {" "}
                It is long established fact that a reader will be distractedby
                the readable content of a page when looking at its.
              </Typography>
              <Button variant="contained" sx={{mb:1}}>Learn More</Button>
          </Box>
            </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
