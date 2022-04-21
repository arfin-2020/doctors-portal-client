import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const Service = ({ image, name, paragraph }) => {
  return (
    <Card sx={{ minWidth: 275, boxShadow: 0 }}>
      <CardMedia
        component="img"
        style={{
          width: "auto",
          height: "80px",
          margin: "0 auto",
          paddingTop: "10px",
        }}
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ m: 2.5 }} color="text.primary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">{paragraph}</Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
