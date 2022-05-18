import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthProvider";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const { signUpWithEmailPassword, emailVerification } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (username && email && password && confirmPassword) {
      try {
        const validatePassword = password => {
          let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
          return reg.test(password);
        };
        if (!validatePassword(password)) {
          return toast.warning(
            "Your Password Must be eight characters, at least one letter and one number!",
            {
              position: "top-right",
              theme: "dark",
            }
          );
        }
        if (password !== confirmPassword) {
          return toast.warning(
            "Your Password and Confirm password is not match!",
            {
              position: "top-right",
              // icon:"🚀",
              theme: "dark",
            }
          );
        }
        const validateEmail = email => {
          let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          return reg.test(email);
        };
        if (!validateEmail(email)) {
          return toast.warning("Enter Correct Email!", {
            position: "top-right",
            // icon:"🚀",
            theme: "dark",
          });
        } else {
          await signUpWithEmailPassword(username, email, password);
          emailVerification();
          toast.success("Sign up sucessfull & check your mail for verify!", {
            position: "top-right",
            icon: "🚀",
            theme: "dark",
          });
          navigate("/");
        }
      } catch (err) {
        console.log("Error from catch block----", err.message);
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          // setError('This Email Already used');
          toast.warning("This Email Already used!", {
            position: "top-right",
            // icon:"🚀",
            theme: "dark",
          });
        } else if (
          err.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          // setError('Password should be at least 6 characters');
          toast.warning("Password should be at least 6 characters", {
            position: "top-right",
            // icon:"🚀",
            theme: "dark",
          });
        } else {
          // setError("failded to create an account!");
          toast.warning("failded to create an account!", {
            position: "top-right",
            // icon:"🚀",
            theme: "dark",
          });
        }
      }
    } else {
      toast.warning("Please Fill up the all field!", {
        position: "top-right",
        // icon:"🚀",
        theme: "dark",
      });
    }
  };
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
    <div className="mt-20">
      <h1 style={{ color: "#3F00FF" }}>Create An Account</h1>

      <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "70ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="standard-basic"
            label="User Name"
            variant="standard"
            color="secondary"
            onChange={e => setUsername(e.target.value)}
          />
          <br />
          <TextField
            required
            type="email"
            id="standard-basic"
            label="Email"
            variant="standard"
            color="secondary"
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <TextField
            required
            type="password"
            id="standard-basic"
            label="Password"
            variant="standard"
            color="secondary"
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <TextField
            required
            type="password"
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
            color="secondary"
            onChange={e => setconfirmPassword(e.target.value)}
          />
        </Box>
        <div className="mt-5">
          <button style={buttonStyle}>Register</button>
          <Link to="/login" style={buttonStyle2}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
