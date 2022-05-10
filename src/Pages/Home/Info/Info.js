import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-8'>
            <InfoCard bgInfo="bg-gradient-to-r from-secondary to-primary" infoTitle="Opening Hours" infoDetail="Lorem ipsum dolor sit amet." img={clock}></InfoCard>
            <InfoCard bgInfo="bg-accent" infoTitle="Visit Our Location" infoDetail="Lorem ipsum dolor sit amet." img={marker}></InfoCard>
            <InfoCard bgInfo="bg-gradient-to-r from-secondary to-primary" infoTitle="Contact Us now" infoDetail="Lorem ipsum dolor sit amet." img={phone}></InfoCard>
        </div>
    );
};

export default Info;