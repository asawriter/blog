import { useQuery } from "@tanstack/react-query";
import makeRequest from "../services/makeRequest";
import { Link } from "react-router-dom";
import Title from "./Title";
import Loading from "./Loading";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const BreakingNews = () => {
  const { currentUser } = useContext(AuthContext);
  const { isLoading, data, error } = useQuery(["breaking"], () =>
    makeRequest
      .get("/posts/breaking")
      .then((res) => res.data.posts)
  );

  return (
    <div className="breaking">
      <div className="breakingContainer">
        <Title title="Breaking News" />
        {isLoading ? (
          <Loading />
        ) : error ? (
          <p>Somethings wents wrong...</p>
        ) : (
          <ul className="breakingList">
            {data.map((post) => (
              <Link
                className="link"
                to={`/posts/${post.title}/${post._id}`}
                key={post._id}
                reloadDocument
              >
                <li className="breakingItem">
                  <div className="breakingImg">
                    <img src={post.image} alt="" />
                  </div>
                  <p className="breakingTitle">{post.title}</p>
                  <p className="breakingDesc">{post.desc}</p>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BreakingNews;
