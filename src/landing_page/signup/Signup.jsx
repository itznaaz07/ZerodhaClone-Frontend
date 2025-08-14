import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AuthForm.css";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3002";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = (msg) => toast.error(msg, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !password) {
      handleError("Please fill all fields");
      return;
    }

    try {
      const { data } = await axios.post(
        `${apiUrl}/signup`,
        inputValue,
        { withCredentials: true }
      );

      if (data.success) {
        handleSuccess(data.message);
        setInputValue({ email: "", username: "", password: "" });
       if (data.success) {
  handleSuccess(data.message);
  localStorage.setItem("token", data.token); // optional
  setTimeout(() => {
    window.location.href = "https://zerodhaclone-dashboard-ka6o.onrender.com"; // full URL
  }, 1000);
}

      } else {
        handleError(data.message);
      }
    } catch (err) {
      console.error("Signup error:", err);
      handleError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Signup</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
