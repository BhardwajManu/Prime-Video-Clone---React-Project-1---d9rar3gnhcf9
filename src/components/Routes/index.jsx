import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "../moviespage/Banner";
import Anonymus from "../Anonymus";
import WatchList from "../myStuff/WatchList";
import Rent from "../myStuff/Rent";
import BannerProfitPage from "../PrimeProfits/BannerProfitPage";
import Userprofile from "../userLogin/Userprofile";
import Useredit from "../userLogin/Useredit";
import SignIn from "../userLogin/SignIn";
import SignUp from "../userLogin/SignUp";
import Contentdetails from "../moviespage/content/Contentdetails";
import Carddetail from "../moviespage/Carddetail";
import Search from "../../pages/Search";
import { useAuthContext } from "../../Context/AuthContext";
import Landingpage from "../landingpage/Landingpage";
import Help from "../userLogin/Help";
import MoreMovies from "../../pages/MoreMovies";
import LearnMore from "../userLogin/LearnMore";
import UserSetting from "../userLogin/Settings/UserSetting";
import VideoBanner from "../moviespage/VideoBanner";
import { ToastContainer } from "react-toastify";

const Routing = () => {
  const { isUserLoggedIn } = useAuthContext();

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/anonymous" element={<Anonymus />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/primeprofits" element={<BannerProfitPage />} />
        <Route path="/manageprofiles" element={<Userprofile />} />
        <Route path="/editprofile" element={<Useredit />} />
        <Route path="/signinpage" element={<SignIn />} />
        <Route path="/signuppage" element={<SignUp />} />
        <Route path="/moviedetails" element={<Contentdetails />} />
        <Route path="/details/:id" element={<Carddetail />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/moremovies/:type" element={<MoreMovies />} />
        <Route path="*" element={<Landingpage />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/help" element={<Help />} />
        <Route path="/usersettings" element={<UserSetting />} />
        <Route path="/videoplay/:id" element={<VideoBanner />} />
      </Routes>
    </>
  );
};
export default Routing;
