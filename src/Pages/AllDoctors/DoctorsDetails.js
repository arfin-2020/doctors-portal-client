import { CardActionArea, CardMedia, Paper } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
const DoctorsDetails = ({img, name, specialty}) =>{
    // console.log(speciality)
    return(
      <Paper elevation={24} className="p-4">
      <CardMedia
        component="img"
        height="90"
        image={img}
        alt="green iguana"
      />
        <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}   
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {specialty}
          </Typography>
        </CardContent>
        <button>SignUp</button>
      </CardActionArea>
      </Paper>
          
    )
}
export default DoctorsDetails;