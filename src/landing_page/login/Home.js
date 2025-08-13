import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3002";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post(
          `${apiUrl}/auth/check`,
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (err) {
        removeCookie("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    setUsername("");
    navigate("/login");
  };

  return (
    <>
      <div className="home_page">
        {username ? (
          <>
            <h4>
              Welcome <span>{username}</span>
            </h4>
            <button onClick={Logout}>LOGOUT</button>
          </>
        ) : (
          <>
            <Link to="/signup">
              <button>SIGNUP</button>
            </Link>
            <Link to="/login">
              <button>LOGIN</button>
            </Link>
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
