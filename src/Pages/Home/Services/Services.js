import '@fontsource/roboto/700.css';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import cavity from "../../../assets/images/cavity.png";
import flouride from "../../../assets/images/Flouride.png";
import teeth from "../../../assets/images/Teeth.png";
import Service from "../Service/Service";
const serviceData = [
  {
    name: "Fluoride Treatment",
    image: flouride,
    paragraph:
      "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. These in-office treatments may take the form of a solution, gel, foam, or varnish.",
  },
  {
    name: "Cavity Filling",
    image: cavity,
    paragraph:
      "To treat a cavity your dentist will remove the decayed portion of the tooth and then fill the area on the tooth where the decayed material was removed. Fillings are also used to repair cracked or broken teeth and teeth that have been worn down from misuse (such as from nail-biting or tooth grinding)",
  },
  {
    name: "Teeth Whitening",
    image: teeth,
    paragraph:
      "Teeth whitening is a simple process. Whitening products contain one of two tooth bleaches (hydrogen peroxide or carbamide peroxide). These bleaches break stains into smaller pieces, which makes the color less concentrated and your teeth brighter.",
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{fontWeight:500, color:'success.main',m:5}} variant='h6'>
                Our Services
        </Typography>
      <Typography sx={{fontWeight:600, color:'#008080'}} variant='h4'>
                Services we Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {serviceData.map((service, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Service {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
