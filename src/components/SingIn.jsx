//SingIn.jsx
import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import google from "./google.png";

const SignIn = ({ toggleComponent, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [SingIn, setSingIn] = useState(false);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      setSingIn(true);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(getAuth(), provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setSingIn(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {SingIn ? (
        <div>
          <p>Привет, {auth.currentUser.email}!</p>
          <button onClick={handleSignOut}>Выйти</button>
        </div>
      ) : (
        <div className="SingInContainer">
          <h2 className="title">Войти</h2>
          <label>
            Электронная почта:
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Пароль:
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={handleSignIn}>Войти</button>
          <img
            src={google.src}
            width="40"
            height="40"
            alt="google"
            onClick={signInWithGoogle}
          />
          <p>
            Нет аккаунта?{" "}
            <span
              onClick={toggleComponent}
              style={{ color: "blue", cursor: "pointer" }}
            >
              Зарегистрироваться
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default SignIn;
