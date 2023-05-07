import { useContext } from "react";
import BreakingNews from "../components/BreakingNews";
import Trending from "../components/Trending";
import Footer from "../components/footers/Footer";
import Posts from "../components/posts/Posts";
import { AuthContext } from "../context/AuthContext";
import makeRequest from "../services/makeRequest";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { page, currentUser } = useContext(AuthContext);

  const { isLoading, data, error } = useQuery(["posts", page], () =>
    makeRequest.get(`/posts?page=${page}`).then((res) => res.data.posts)
  );

  return (
    <div className="home">
      <div className="homeContainer">
        <Posts isLoading={isLoading} error={error} posts={data} />
        <Trending />
      </div>
      <BreakingNews />
      <Footer />
    </div>
  );
};

export default Home;
