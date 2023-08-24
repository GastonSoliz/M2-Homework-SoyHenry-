import { AxiosHeaders } from "axios";
import React, { useState } from "react";
import validate from "../utils/validation.js";

export default function Form({ login }) {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setuserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>EMAIL:</label>
      <input
        name="email"
        placeholder="Ingrese su email..."
        type="text"
        onChange={handleChange}
      />
      <span>{errors.email}</span>
      <label>PASSWORD:</label>
      <input
        name="password"
        placeholder="Ingrese su contraseña"
        type="text"
        onChange={handleChange}
      />
      <span>{errors.password}</span>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
