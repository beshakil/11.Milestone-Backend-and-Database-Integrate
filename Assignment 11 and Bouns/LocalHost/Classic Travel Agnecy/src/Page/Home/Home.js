import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Event from '../Events/Event';
import ServicesForHome from '../ServicesForHome/ServicesForHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesForHome></ServicesForHome>
            <Event></Event>
            <Contact></Contact>
        </div>
    );
};

export default Home;