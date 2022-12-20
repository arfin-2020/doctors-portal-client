import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import AppointmentCard from "../AppointmentCard/AppointmentCard";


const AppointmentAvailable = ({ date }) => {
  const bookingData = [
    {
      id: 1,
      subject: "Teeth Orthodontics",
      visitingHour: "8:00 AM - 9:00 AM",
      price: '$100',
      totalSpace: 10,
    },
    {
      id: 2,
      subject: "Cosmetic Dentistry",
      visitingHour: "10:50 AM - 11:30 AM",
      price: '$99',
      totalSpace: 10,
    },
    {
      id: 3,
      subject: "Teeth Cleaning",
      visitingHour: "5:00 PM - 6:00 PM",
      price: '$199',
      totalSpace: 10,
    },
    {
      id: 4,
      subject: "Cavity Protection",
      visitingHour: "7:00 AM - 8:30 AM",
      price: '$89',
      totalSpace: 10,
    },
    {
      id: 5,
      subject: "Teeth Orthodontics",
      visitingHour: "8:00 AM - 9:00 AM",
      price: '$299',
      totalSpace: 10,
    },
    {
      id: 6,
      subject: "Diagnosis Treatment",
      visitingHour: "8:00 AM - 9:00 AM",
      price: '$99',
      totalSpace: 10,
    },
    {
      id: 7,
      subject: "Medical Check-ups",
      visitingHour: "8:00 AM - 9:00 AM",
      price: '$299',
      totalSpace: 10,
    },
    {
      id: 8,
      subject: "Hair Specialist",
      visitingHour: "11:00 AM - 1:00 PM",
      price: '$59',
      totalSpace: 10,
    },
    {
      id: 9,
      subject: "Eye Checkup",
      visitingHour: "2:00 PM - 4:00 PM",
      price: '$119',
      totalSpace: 10,
    },
  ];
  return (
    <Box>
      <h1 className="text-blue-600/100 p-5 text-4xl font-bold"> Appointment Available {date.toDateString()} </h1>
     <Container>
      <Grid
      container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
      {bookingData.map(data => (
          <Grid item xs={12} sm={12} md={4} key={data.id}>
            <AppointmentCard key={data.id} date={date} {...data} />
          </Grid>
      ))}
      </Grid>
     </Container>
    </Box>
  );
};

export default AppointmentAvailable;
