import Grid from "@mui/material/Grid";
import React from "react";
import Calender from "../../Shared/Calender/Calender";
// import Calender from "../Shared/Calender/Calender";
import Appointments from "../Appointments/Appointments";


const DashboardHome = () => {
  const [date, setdate] = React.useState(new Date());

  return (
    <>
     
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Calender date={date} setdate={setdate} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Appointments date={date} />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardHome;
