import React from 'react';
import Slide from 'react-reveal/Slide';
import Banner from '../../Banner/Banner';
import Informations from '../../Information/Informations';
import ServicesCare from '../../ServicesCare/ServicesCare';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
        
                <Navigation/>
                <Banner/>
                <Slide right>
                <Informations/>
            </Slide>
                <Services/>
                <ServicesCare/>
                <AppointmentBanner/>
        </div>
    );
};

export default Home;