import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Items from './Items';

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <Items></Items>
            <Footer></Footer>
        </div>
    );
};

export default Home;