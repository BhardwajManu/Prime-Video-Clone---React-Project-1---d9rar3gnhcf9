import React from 'react'

import CardOne from '../components/CardOne'
import Banner from '../components/Banner'
import Header from '../components/Header/Header'
// import BannerPage from '../components/movies/BannerPage'
// import Footer from '../components/Footer'
// import Landingpage from '../components/Landingpage'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <CardOne title='Drama movie' />
            <CardOne title='Short film' />
            <CardOne title='Video Song' />
            <CardOne title='web series' />
            <CardOne title='tv show' />
            {/* <Landingpage /> */}
            {/* <Footer /> */}
            {/* <BannerPage /> */}


        </div>
    )
}

export default Home
