import { useContext } from "react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="link">
            <img
              src="https://res.cloudinary.com/dqzwavus9/image/upload/v1681658596/blog/hacker_crjjgw.png"
              alt=""
            />
          </Link>
        </div>

        {currentUser.userId ? (
          <Link to="/posts/new" className="link">
            <div className="navbar-subcribe">
              <MdEmail />
              <p>Subscribe to Newletter</p>
            </div>
          </Link>
        ) : (
          <div className="navbar-auth">
            <Link to="/login">
              <button>Sign In</button>
            </Link>
            <Link to="/register">
              <button style={{ backgroundColor: "white" }}>Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
