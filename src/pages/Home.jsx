import React from 'react'
import Header from "../components/header/Header"
import BannerProfitPage from "../components/PrimeProfits/BannerProfitPage";
import CardsProfit from "../components/PrimeProfits/CardsProfit";
import SignUp from '../components/userLogin/SignUp'
import SignIn from '../components/userLogin/SignIn'
import Useredit from '../components/userLogin/Useredit'
import Userprofile from '../components/userLogin/Userprofile'
import Landingpage from '../components/Landingpage'
import SearchList from '../components/SearchList'
import WatchList from '../components/WatchList'
import Footer from '../components/Footer'
import Banner from '../components/moviespage/Banner'
import CardOne from '../components/moviespage/CardOne'
import Contentdetails from '../components/moviespage/content/Contentdetails'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Contentdetails />
            <CardOne title='movie' />
            <CardOne title='short film' />
            <CardOne title='tv show' />
            <CardOne title='web series' />
            <CardOne title='video song' />

            <BannerProfitPage />
            <CardsProfit />
            <SignUp />
            <SignIn />
            <Useredit />
            <Userprofile />
            <Landingpage />
            <SearchList />
            <WatchList />
            <Footer />
        </div>
    )
}

export default Home
