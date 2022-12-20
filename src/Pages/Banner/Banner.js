import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import bgChar from "../../assets/images/ChairBG.png";
import IsmileFace from "../../assets/images/Pretty patient.png";

const AppointmentBackGround = {
  background: `url(${bgChar})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",

};
const Banner = () => {
  return (
    <Slide left>
      <Box style={AppointmentBackGround}>
        <Container>
          <Grid
            container
            spacing={2}
            style={{ marginTop: "30px" }}
            columns={{ xs: 4, sm: 5, md: 12 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: "left",

            }}
          >
<Grid item xs={12} md={7}>
              <img src={IsmileFace} alt="chair" height="280px" />
            </Grid>
            <Grid item xs={12} md={5} >
              <Typography sx={{ fontWeight: 600, color: '#333C83', fontSize: 50 }} variant='h4'>
              WE TAKE CARE
              </Typography>
              <Typography sx={{ fontWeight: 600, color: '#333C83', fontSize: 50, marginBottom: 5 }} variant='h4'>
                Start Here
              </Typography>
              <Typography variant="h6" sx={{ fontSize: 14, color: 'Grey' }}>
                Being physically healthy enables you to have better overall health, including in your relationships. You only get one body, so taking care of it is important. By knowing your body, and your family's health history, you can start to figure out what is “normal” for you.
              </Typography>
              <Link to={`/appointment`}>
              <Button variant="contained" sx={{ m: 2 }}>
                Get Appointment
              </Button>
              </Link>
              <Button >
              </Button>
            </Grid>



            

          </Grid>
        </Container>
      </Box>
    </Slide>
  );
};

export default Banner;
