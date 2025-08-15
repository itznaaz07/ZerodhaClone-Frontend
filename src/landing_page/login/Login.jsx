import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import "../signup/AuthForm.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = (msg) => toast.error(msg, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return handleError("Please fill all fields");

    const res = await login({ email, password });
    if (res.success) {
      handleSuccess("Login successful");
      setInputValue({ email: "", password: "" });
      setTimeout(() => navigate("/"), 1000);
    } else {
      handleError(res.message);
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter your email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handleOnChange} placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
        <span>Don't have an account? <Link to="/signup">Signup</Link></span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
