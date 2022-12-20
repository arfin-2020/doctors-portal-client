import React from 'react';
import Slide from 'react-reveal/Slide';
import AllDoctors from '../../AllDoctors/AllDoctors';
import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
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
                <AllDoctors/>
                <AppointmentBanner/>
                <Footer/>
        </div>
    );
};

export default Home;