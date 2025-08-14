import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./login.css";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { success, message } = await login({ email, password });

    if (success) {
      window.location.href = "https://zerodhaclone-dashboard-ka6o.onrender.com";
    } else {
      setPopupMessage(message || "Login failed");
    }
  };

  const closePopup = () => setPopupMessage("");

  return (
    <div className="logIn-container">
      <h2>Log In</h2>
      <form className="logIn-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          value={password}
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
      </form>

      {popupMessage && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
