import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AuthForm.css";

const Signup = () => {
  const [inputValue, setInputValue] = useState({ email: "", username: "", password: "" });
  const { signup } = useAuth();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue(prev => ({ ...prev, [name]: value }));
  };

  const handleError = (msg) => toast.error(msg, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, username, password } = inputValue;
    if (!email || !username || !password) {
      handleError("Please fill all fields");
      return;
    }

    const res = await signup({ email, username, password });
    if (res.success) handleSuccess("Signup successful!");
    else handleError(res.message);
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={inputValue.email} onChange={handleOnChange} />
        <input type="text" name="username" placeholder="Username" value={inputValue.username} onChange={handleOnChange} />
        <input type="password" name="password" placeholder="Password" value={inputValue.password} onChange={handleOnChange} />
        <button type="submit">Signup</button>
        <span>Already have an account? <Link to="/login">Login</Link></span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
