import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "./styles/index.scss";
import Navigation from "./components/Navigation";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import NewPost from "./pages/NewPost";
import PostDetails from "./pages/PostDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostPage from "./pages/PostPage";
import PostSearch from "./pages/PostSearch";
import PostSaved from "./pages/PostSaved";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const PrivateRoute = () => {
    return currentUser?.accessToken ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <NavBar />
      {currentUser?.accessToken && <Navigation />}
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/users/:userId" element={<Profile />} />
          <Route path="/users/:userId/edit" element={<EditProfile />} />
          <Route path="/posts/search" element={<PostSearch />} />
          <Route path="/users/:userId/notification" />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/saved" element={<PostSaved />} />
          <Route path="/posts/:titleUrl/:postId" element={<PostDetails />} />
          <Route path="/posts/:titleUrl/:postId/edit" />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;