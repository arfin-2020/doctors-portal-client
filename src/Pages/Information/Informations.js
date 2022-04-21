import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Information from './Information';
const Informations = () => {

    const information = [
        {
            title: 'Opening Hours',
        description: 'We are open 7 Days',
        icon: faClock,
        background:'primary' ,
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn, NY3 1003, USA',
            icon: faPhone,
            background:'dark'
        },
        {
            title: 'Call Us Now',
            description: '+89556246624',
            icon: faMapMarker,
            background:'primary'
        },
    ]
    return (
        <section className = "d-flex justify-content-center mt-5">
            <div className = 'w-75 row'>
                {
                    information.map(infoData =><Information key={infoData.title}  {...infoData}/>)
                }
            </div>
        </section>
    );
};

export default Informations;