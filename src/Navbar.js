import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function Navbar() {
  const { user, logout, loading } = useAuth();
  if (loading) return null;

  return (
    
    <nav
    
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "#FFF",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "0 20px",
        zIndex: 1000,
      }}
    >
      
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "25%" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>

          
            <li className="nav-item d-flex align-items-center mx-2">
              <img
                src="media/images/line.webp"
                style={{ width: "4%", opacity: "0.8" }}
                alt=""
              />
            </li>

            {/* Conditional buttons */}
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={logout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
