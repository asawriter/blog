import { useQuery } from "@tanstack/react-query";
import BreakingNews from "../components/BreakingNews";
import Trending from "../components/Trending";
import Footer from "../components/footers/Footer";
import Posts from "../components/posts/Posts";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import makeRequest from "../services/makeRequest";

const PostPage = () => {
  const { cat, page, currentUser } = useContext(AuthContext);
  const { isLoading, data, error } = useQuery(["categories", cat], () =>
    makeRequest
      .get(`/posts?page=${page}&cat=${cat}`)
      .then((res) => res.data.posts)
  );

  return (
    <div
      className="postPage"
      style={{ backgroundColor: "#fff", width: "100%" }}
    >
      <div
        className="postPageContainer"
        style={{ display: "flex", maxWidth: "1070px", margin: "0 auto" }}
      >
        <Posts isLoading={isLoading} error={error} posts={data} />
        <Trending />
      </div>
      <BreakingNews />
      <Footer />
    </div>
  );
};

export default PostPage;
