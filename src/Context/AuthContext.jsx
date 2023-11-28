import { useContext, useState } from "react";
import { createContext } from "react";

const authContext = createContext();
const initialData = {
  token: null,
  authenticated: false,
  user: {
    name: "",
  },
};

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(initialData);

  const signUser = (payload) => {
    const { token, data } = payload;
    const userData = data?.user ? data.user : data;
    console.log(userData);

    setAuthData((prev) => ({
      ...prev,
      token,
      user: userData,
      authenticated: true,
    }));
    localStorage.setItem("prime_token", token);
    localStorage.setItem("prime_user", JSON.stringify(userData));
  };

  const logoutUser = () => {
    setAuthData(initialData);
    localStorage.removeItem("prime_token");
    localStorage.removeItem("prime_user");
  };

  const isUserLoggedIn = () => {
    const token = localStorage.getItem("prime_token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("prime_user"));
      setAuthData((prev) => ({
        ...prev,
        token,
        user,
        authenticated: true,
      }));
    }
  };

  const setUser = ({ data }) => {
    console.log(data, "here");
    localStorage.setItem("prime_user", JSON.stringify(data));
    // const user = JSON.parse(localStorage.getItem("prime_user"));
    setAuthData((prev) => ({
      ...prev,
      user: data,
    }));
  };
  return (
    <authContext.Provider
      value={{
        signUser,
        logoutUser,
        isUserLoggedIn,
        authenticated: authData.authenticated,
        user: authData.user,
        setUser,
        token: authData.token,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(authContext);
