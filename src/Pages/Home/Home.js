import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';
import Items from './Items';
import MechanicalNeed from './MechanicalNeed';
import QualificationsAndEnquiry from './QualificationsAndEnquiry';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Banner></Banner>
                <Items></Items>
            </div>
            <MechanicalNeed></MechanicalNeed>
            <div className="max-w-7xl mx-auto">
                <BusinessSummary></BusinessSummary>
            </div>
            <QualificationsAndEnquiry></QualificationsAndEnquiry>
            <div className="max-w-7xl mx-auto">
                <Reviews></Reviews>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;