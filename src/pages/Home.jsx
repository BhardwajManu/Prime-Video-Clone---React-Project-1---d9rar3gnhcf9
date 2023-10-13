import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landingpage from '../components/Landingpage'
import Banner from '../components/moviespage/Banner'
import Anonymus from '../components/Anonymus'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import WatchList from '../components/myStuff/WatchList'
import Rent from '../components/myStuff/Rent'
import BannerProfitPage from '../components/PrimeProfits/BannerProfitPage'
import Userprofile from '../components/userLogin/Userprofile'
import Useredit from '../components/userLogin/Useredit'
import SignIn from '../components/userLogin/SignIn'
import SignUp from '../components/userLogin/SignUp'
import Contentdetails from '../components/moviespage/content/Contentdetails'


const Home = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Landingpage />} />
                <Route path='/home' element={<Landingpage />} />
                <Route path='/banner' element={<Banner />} />
                <Route path='/anonymous' element={<Anonymus />} />
                <Route path='/watchlist' element={<WatchList />} />
                <Route path='/rent' element={<Rent />} />
                <Route path='/primeprofits' element={<BannerProfitPage />} />
                <Route path='/manageprofiles' element={<Userprofile />} />
                <Route path='/editprofile' element={<Useredit />} />
                <Route path='/signinpage' element={<SignIn />} />
                <Route path='/signuppage' element={<SignUp />} />
                <Route path='/moviedetails' element={<Contentdetails />} />
            </Routes>
            <Footer />

        </div>
    )
}

export default Home
