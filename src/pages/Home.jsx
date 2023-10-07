import React from 'react'

import CardOne from '../components/CardOne'
import Banner from '../components/Banner'
import Header from '../components/Header/Header'
import WatchList from '../components/WatchList'
import SearchList from '../components/SearchList'
// import SignIn from '../components/userLogin/SignIn'
// import SignUp from '../components/userLogin/SignUp'
// import BannerPage from '../components/movies/BannerPage'
// import Footer from '../components/Footer'
// import Landingpage from '../components/Landingpage'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <CardOne title='movie' />
            <CardOne title='short film' />
            <CardOne title='tv show' />
            <CardOne title='web series' />
            <CardOne title='video song' />
            <WatchList />
            <SearchList />
            {/* <SignIn />
            <SignUp /> */}
            {/* <Landingpage /> */}
            {/* <Footer /> */}
            {/* <BannerPage /> */}


        </div>
    )
}

export default Home
