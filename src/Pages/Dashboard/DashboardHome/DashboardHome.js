import Grid from "@mui/material/Grid";
import React from "react";
import Appointments from "../Appointments/Appointments";


const DashboardHome = () => {
  const [date, setdate] = React.useState(new Date());

  return (
    <>
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}>
        <Appointments  />
      </Grid>
    </>
  );
};

export default DashboardHome;
