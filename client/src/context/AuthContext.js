import { createContext, useEffect, useState } from "react";
import makeRequest from "../services/makeRequest";
export const AuthContext = createContext();
import jwtDecode from "jwt-decode"

export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [cat, setCat] = useState("All");

  // auth state
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || {}
  );
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(currentUser));
    const getRefreshToken = async () => {
      const res = await makeRequest.get(
        `/users/${currentUser?.userId}/refresh-token`
      );
      setRefreshToken(res.data.refreshToken);
    };
    getRefreshToken();
  }, [currentUser]);

  useEffect(()=> {
    const decoded = jwtDecode(currentUser?.accessToken);
    const tokenExpirationTime = decoded.exp;
    
  })









  const logout = async () => {
    localStorage.removeItem("userData");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
