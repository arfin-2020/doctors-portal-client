import { Button, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import React, { useState } from "react";
import Slide from 'react-reveal/Slide';
import { useAuth } from "../../../Context/AuthProvider";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const {token} = useAuth();
  const handleSubmit = e => {
    const user = { email };
    // console.log(email);
    
    fetch("https://doctors-portal-server-last.onrender.com/users/admin", {
      method: "PUT",
      headers: {
        'authorization':`Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        if (data.modifiedCount === 1) {
          setSuccess(true);
          setError(false);
        } else {
          setError(true);
          setSuccess(false);
        }
        // console.log(data);
      })
      .catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });

    e.target.reset();
    e.preventDefault();
  };
  return (
    <div>
    <Slide right>  
    
      <h1>Make an Admin</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "25%" }}
          label="Email"
          type="email"
          variant="standard"
          onBlur={e => setEmail(e.target.value)}
        />{" "}
        {""}
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      </Slide>
      {success && (
        <Alert className="mt-5" severity="success" color="info">
          Make Admin Successful.
        </Alert>
      )}
      {error && (
        <Alert className="mt-5" severity="error" color="warning">
          This user alredy an admin.
        </Alert>
      )}
      
     
    </div>
  );
};

export default Admin;
