import { useContext } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <Link to="/" className="link" reloadDocument>
            <img
              src="https://res.cloudinary.com/dqzwavus9/image/upload/v1681658596/blog/hacker_crjjgw.png"
              alt=""
            />
          </Link>
        </div>
        <div className="right">
          {currentUser.accessToken ? (
            <>
              <p>
                <AiOutlineBell className="icon" />
              </p>
              <Link to="/posts/new" className="link">
                <button>Write Post</button>
              </Link>
              <Link to={`/users/${currentUser.userId}`}>
                <button>{currentUser.name}</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="link">
                <button>Login</button>
              </Link>
              <Link to="/register" className="link">
                <button>Create an account</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
