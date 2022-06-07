import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification, signInWithEmailAndPassword, signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Firebase/Firebase.";

const googleProvider = new GoogleAuthProvider();
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isloading, setIslaoding] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const { displayName, photoURL, email } = user;
        const loggedInUser = {
          name: displayName || "Empty Name",
          photoUrl: photoURL,
          email:email,
        };
        setCurrentUser(loggedInUser);
      } else {
        setCurrentUser({});
      }
    });
    setIslaoding(false);
    return unsubscribe;
  }, [auth]);

  const signInWithGoogle = async () => {
    setIslaoding(true);
    await signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result);
        const { displayName, photoURL, email } = result.user;
        saveUser(email,displayName,'PUT');
        const loggedInUser = {
          name: displayName,
          photoUrl: photoURL,
          email:email,
        };
        setCurrentUser(loggedInUser);
        setIslaoding(false);
      })
      .finally(() => setIslaoding(false));
  };

  const signUpWithEmailPassword = async (username, email, password) => {
    setIslaoding(true);
    await createUserWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      
      console.log("result--------",result)
      const loggedInUser = { name: username, email:email };
      setCurrentUser(loggedInUser);
      // Save user to database
      saveUser(email,username,"POST")
      updateProfile(auth.currentUser,{
        name: username
      }).then(()=>{

      }).catch((error)=>{
        console.log(error.message)
      })
    })
    setIslaoding(false);
  };

  const emailVerification = async () => {
    await sendEmailVerification(auth.currentUser).then(() => {
      console.log("Verification send!");
    });
  };

  const logInWithEmailPassword = async (email,password,name) => {
    setIslaoding(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        // const { email, displayName } = result.user;
        // console.log("result--------",result)
        // const loggedInUser = { name: name, email:email };

        const { email, displayName } = result.user;
        
        const loggedInUser = { name, email };
        setCurrentUser(loggedInUser);
        setIslaoding(false);
      })
      .finally(() => setIslaoding(false));
  };

  const logOut = async () => {
    setIslaoding(true);
    signOut(auth)
      .then(() => {
        setIslaoding(false);
        setCurrentUser("");
        navigate("/");
        toast.info("You are successfully Logout", {
          theme: "colored",
        });
      })
      .finally(() => setIslaoding(false));
  };

  const saveUser = (email, displayName,method) =>{
      const user = {email,displayName}
      fetch('http://localhost:5000/users',{
        method : method,
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
  }

  const value = {
    signInWithGoogle,
    signUpWithEmailPassword,
    emailVerification,
    logInWithEmailPassword,
    currentUser,
    isloading,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
