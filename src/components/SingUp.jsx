//SingUp.jsx
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ({ toggleComponent }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      toggleComponent();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="SingInContainer">
      <h2 className="title">Регистрация</h2>
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
      <button onClick={handleSignUp}>Зарегистрироваться</button>
      <p>
        Уже есть аккаунт?{" "}
        <span
          onClick={toggleComponent}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Войти
        </span>
      </p>
    </div>
  );
};

export default SignUp;
