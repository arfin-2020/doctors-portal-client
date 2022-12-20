import { Container, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LogInImage from "../../assets/images/loginbg.png";
import { useAuth } from "../Context/AuthProvider";
// import { useAuth } from "../Context/AuthProvider";

const Login = () => {
  const { signInWithGoogle, currentUser, logOut, logInWithEmailPassword } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const redirect_url = location.state?.from?.pathname || "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(currentUser)
  const handleFormSubmit = async e => {
    e.preventDefault();
    
      // console.log(email, password, name);
      try{
        logInWithEmailPassword(email,password,name);
        // console.log('enterr')
        toast.success("Login sucessfull!",{
            position:"top-right",
            icon:"🚀",
            theme: "dark"
          });
          navigate(`${redirect_url}`, { replace: true });
          navigate("/")
      }catch(err){
        // console.log("Error from catch block----", err.message);
        if(err.message === "Firebase: Error (auth/user-not-found)."){
          // console.log("error-------",err.message);
          toast.error("User not found!",{
              position:"top-right",
              theme: "dark"
            });
        }
      }

    
    // else {
    //   toast.warning("Please Fill up the all field!", {
    //     position: "top-right",
    //     // icon:"🚀",
    //     theme: "dark",
    //   });
    // }
  };

  const handleSignInWithGoogle = async() =>{
      try{
        await signInWithGoogle();
        navigate(`${redirect_url}`, { replace: true });
      toast.success("Welcome you are logged in Successfully,", {
        theme: "colored",
      });
      }catch(err){
          // console.log(err.message);
      }
  }

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

  const buttonStyle2 = {
    backgroundColor: "#125B50",
    color: "#ffffff",
    border: "none",
    padding: "10px",
    width: "120px",
    borderRadius: "5px",
    fontWeight: "600",
    textDecoration: "none",
  };

  return (
    <Box sx={{ width: "100%", my: 20 }}>
      <Container>
        <Grid
          container
          rowSpacing={1}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={6}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <h1 className="text-3xl font-bold" style={{color: "#0002A1"}}>Login</h1>
              <form onSubmit={handleFormSubmit}>
                <TextField
                  required
                  type="text"
                  sx={{ m: 1 }}
                  label="Username"
                  fullWidth
                  variant="outlined"
                  onChange={e => setName(e.target.value)}
                />

                <TextField
                required
                  type="email"
                  sx={{ m: 1 }}
                  label="Email"
                  fullWidth
                  variant="outlined"
                  onChange={e => setEmail(e.target.value)}
                />

                <TextField
                required
                  type="password"
                  sx={{ m: 1 }}
                  label="Password"
                  fullWidth
                  variant="outlined"
                  onChange={e => setPassword(e.target.value)}
                />

                <div className="mt-5">
                  <button style={buttonStyle}>login</button>
                  <Link to="/signUp" style={buttonStyle2}>
                    Register
                  </Link>
                </div>
              </form>
              <p className="mt-2" style={{fontWeight:'bold'}}>
            Or
          </p>
              {!currentUser?.name || currentUser?.email ? (
                <button
                  className="btn btn-primary"
                    onClick={handleSignInWithGoogle}
                  variant="contained"
                >
                  LogIn With Google
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={logOut}
                  variant="contained"
                >
                  LogOut
                </button>
              )}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <img src={LogInImage} alt="loginImage" width="400px" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
