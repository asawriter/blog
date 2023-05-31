import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [cat, setCat] = useState("All");

  let [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );

  // (async () => {
  //   const res = await axios.get(
  //     `http://localhost:5000/auth/${currentUser?.userId}/refresh-token`
  //   );
  //   setRefreshToken(res.data.refreshToken);
  // })();

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", data);
      if (res.status === 200) {
        setCurrentUser(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/register", data);
      if (res.status === 200) {
        setCurrentUser(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async (refreshToken) => {
    try {
      await axios.delete("http://localhost:5000/auth/logout", { refreshToken });
      localStorage.removeItem("userData");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        page,
        setPage,
        cat,
        setCat,
        searchValue,
        setSearchValue,
        loading,
        setLoading,
        logout,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
