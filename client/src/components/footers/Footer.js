import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <h2>Connect with us!</h2>
        <ul className="footerLinks">
          <li className="footerLinksItem">
            <AiFillTwitterSquare
              className="icon"
              style={{ background: "#1da1f2", color: "#fff" }}
            />
            <span>890,000 Followers</span>
          </li>
          <li className="footerLinksItem">
            <AiFillFacebook
              className="icon"
              style={{ background: "#4267b2", color: "#fff" }}
            />
            <span>890,000 Followers</span>
          </li>
          <li className="footerLinksItem">
            <AiFillLinkedin
              className="icon"
              style={{ background: "#007bb6", color: "#fff" }}
            />
            <span>890,000 Followers</span>
          </li>
          <li className="footerLinksItem">
            <AiFillInstagram
              className="icon"
              style={{
                background:
                  "linear-gradient(45deg,#f09433 0,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                color: "#fff",
              }}
            />
            <span>890,000 Followers</span>
          </li>
          <li className="footerLinksItem">
            <AiFillYoutube
              className="icon"
              style={{ background: "#ce332d", color: "#fff" }}
            />
            <span>890,000 Followers</span>
          </li>
        </ul>

        <ul className="footerList">
          <FooterItem />
          <FooterItem />
          <FooterItem />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
