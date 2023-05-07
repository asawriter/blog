import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

const Share = () => {
  return (
    <ul className="share">
      <p>SHARE</p>
      <li className="shareItem">
        <AiFillTwitterSquare
          className="icon"
          style={{ background: "#1da1f2", color: "#fff" }}
        />
      </li>
      <li className="shareItem">
        <AiFillFacebook
          className="icon"
          style={{ background: "#4267b2", color: "#fff" }}
        />
      </li>
      <li className="shareItem">
        <AiFillLinkedin
          className="icon"
          style={{ background: "#007bb6", color: "#fff" }}
        />
      </li>
      <li className="shareItem">
        <AiFillInstagram
          className="icon"
          style={{
            background:
              "linear-gradient(45deg,#f09433 0,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            color: "#fff",
          }}
        />
      </li>
      <li className="shareItem">
        <AiFillYoutube
          className="icon"
          style={{ background: "#ce332d", color: "#fff" }}
        />
      </li>
    </ul>
  );
};

export default Share;
