import React from 'react';
import Banner from '../../Banner/Banner';
import Informations from '../../Information/Informations';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Services from '../Services/Services';
import ServicesCare from '../../ServicesCare/ServicesCare'
const Home = () => {
    return (
        <div>
                <Navigation/>
                <Banner/>
                <Informations/>
                <Services/>
                <ServicesCare/>
                <AppointmentBanner/>
        </div>
    );
};

export default Home;