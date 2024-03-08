// App.jsx
import React, { useState } from "react";
import SignIn from "./SingIn";
import SignUp from "./SingUp";
import { getAuth } from "firebase/auth";
import "./Auth.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOqbwNOGYO2iv4S7hoMj7oWLw6iL8RXNw",
  authDomain: "nifty-formula-190209.firebaseapp.com",
  projectId: "nifty-formula-190209",
  storageBucket: "nifty-formula-190209.appspot.com",
  messagingSenderId: "207214391474",
  appId: "1:207214391474:web:266d3a9e08f24315c219ab",
};

initializeApp(firebaseConfig);

export const auth = getAuth();

const AuthContainer = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleComponent = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div className="ContainerAuth">
      {isSignIn ? (
        <SignIn toggleComponent={toggleComponent} auth={auth} />
      ) : (
        <SignUp toggleComponent={toggleComponent} />
      )}
    </div>
  );
};

export default AuthContainer;
