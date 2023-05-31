import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Categories = () => {
  const { setCat, page } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLink = (cat) => {
    setCat(cat);
    navigate(`/posts?page=${page}&cat=${cat}`);
  };
  
  return (
    <ul className="categories">
      <Link to="/" className="link" reloadDocument>
        <li>Home</li>
      </Link>

      <li onClick={() => handleLink("Data Breaches")}>Data Breaches</li>
      <li onClick={() => handleLink("Cyber Attacks")}>Cyber Attacks</li>
      <li onClick={() => handleLink("Vulnerablilities")}>Vulnerablilities</li>
      <li onClick={() => handleLink("Webinars")}>Webinars</li>
      <li onClick={() => handleLink("Webinars")}>Contact</li>
    </ul>
  );
};

export default Categories;
