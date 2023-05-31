import {
  MdOutlineLogout,
  MdOutlineAccountCircle,
  MdOutlineSettings,
  MdOutlineCreateNewFolder,
} from "react-icons/md";
import { BsBookmarkHeart } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";
import makeRequest from "../services/makeRequest";

const MenuOptions = ({ showMenuOptions, setMenuOptions }) => {
  const { currentUser, loading, setLoading, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    // setLoading(true);
    try {
      const refreshToken = await makeRequest.get(
        `/auth/${currentUser.userId}/refresh-token`
      );

      console.log(refreshToken);

      if (refreshToken) {
        await logout(refreshToken);
      }

      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className={showMenuOptions ? "menuOptions active" : "menuOptions"}>
      <ul className="menuList" onClick={() => setMenuOptions(false)}>
        <Link to={`/users/${currentUser.userId}`} className="link">
          <li className="menuItem">
            <MdOutlineAccountCircle className="icon" />
            <span style={{ fontWeight: "600", color: "#3732b3" }}>
              {currentUser.name}
            </span>
          </li>
        </Link>
        <Link to="/posts/new" className="link">
          <li className="menuItem">
            <MdOutlineCreateNewFolder className="icon" />
            <span>Create Post</span>
          </li>
        </Link>
        <Link className="link" to={`/posts/saved`}>
          <li className="menuItem">
            <BsBookmarkHeart className="icon" />
            <span>Saved Post</span>
          </li>
        </Link>
        <li className="menuItem">
          <MdOutlineSettings className="icon" />
          <span>Settings</span>
        </li>
        <li className="menuItem" onClick={handleLogout}>
          <MdOutlineLogout className="icon" />
          <span>Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuOptions;
