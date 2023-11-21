/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { useWatchlistContext } from "../../Context/WatchlistContext";
import useFetch from "../../Hooks/useFetch";

const layout = [
  "anonymous",
  "signinpage",
  "signuppage",
  "editprofile",
  "manageprofiles",
  "usersettings",
  "/",
];
const comparePath = (pathname) => {
  for (let i = 0; i < layout.length; i++) {
    if (pathname.includes(layout[i])) {
      return true;
    }
  }
  return false;
};

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  // console.log(pathname)

  if (comparePath(pathname)) {
    return children;
  }

  return (
    <>
      <Header />
      <div className="z-0">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
