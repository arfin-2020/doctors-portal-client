import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification, signInWithEmailAndPassword, signInWithPopup,
    signOut
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
    await createUserWithEmailAndPassword(auth, email, password);
    const loggedInUser = { name: username, email:email };
    setCurrentUser(loggedInUser);
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
        const { email } = result.user;

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