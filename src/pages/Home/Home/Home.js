import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import Message from '../Message/Message';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentCard></AppointmentCard>
            <Reviews></Reviews>
            <Message></Message>
        </div>
    );
};

export default Home; 