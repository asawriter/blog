import { useContext } from "react";
import Posts from "../components/posts/Posts";
import { AuthContext } from "../context/AuthContext";
import makeRequest from "../services/makeRequest";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "../components/Sidebar";
import BreakingNews from "../components/postsAll/BreakingNews";

const Home = () => {
  const { page } = useContext(AuthContext);

  const { isLoading, data, error } = useQuery(["posts", page], () =>
    makeRequest.get(`/posts?page=${page}`).then((res) => res.data.posts)
  );

  return (
    <div className="home">
      <div className="homeContainer">
        <Posts isLoading={isLoading} error={error} posts={data} />
        <Sidebar />
      </div>
      <BreakingNews />
    </div>
  );
};

export default Home;
