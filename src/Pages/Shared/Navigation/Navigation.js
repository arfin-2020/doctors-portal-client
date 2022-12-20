import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
const Navigation = () => {
  const {currentUser, logOut} = useAuth();


  const buttonStyle = {
    backgroundColor: "#333c83",
    color: "#ffffff",
    border: "none",
    padding: "10px",
    width: "120px",
    borderRadius: "5px",
    fontWeight: "600",
    marginRight: "50px",
  };
  const LinkStyle ={
    color:'White',
    fontWeight:'600',
    textDecoration:'none',
    margin: '15px'
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <Link style={LinkStyle} to="/">
              Home
            </Link>
            <Link style={LinkStyle} to="/appointment">
              Appointment
            </Link>
            <Link style={LinkStyle} to="/dashboard">
              Dashboard
            </Link>
            <Link style={LinkStyle} to="/offers">
              Offers
            </Link>
            {
                !currentUser?.name?(

            <Link style={LinkStyle} to='/login' color="inherit">Login</Link>
                ):(
                  <button style={buttonStyle} onClick={logOut}>
                    LogOut
                  </button>
                )
            }
            {
              currentUser?.name?(
                <div>
                <span
                  style={{ color: "white", marginLeft: "5px" }}
                >
                  Hello, {currentUser?.name}  
                </span> <br/>
                <span
                  style={{ color: "white", marginLeft: "5px" }}> {currentUser?.email}</span>
                </div>
              ):(
                
                <Link style={LinkStyle} to="/signUp">
              Sign Up
            </Link>
              )
            }
           
          
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navigation;
