import React from 'react';
import Blogs from '../../Blogs/Blogs';
import BusinessInfo from '../../BusinessInfo/BusinessInfo';
import Footer from '../../Footer/Footer';
import Reviews from '../../Reviews/Reviews';
import Services from '../../Services/Services';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <BusinessInfo/>
            <Services/>
            <Reviews/>
            <Blogs/>
            <Footer/>
            
        </div>
    );
};

export default Home;