import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../Shared/Navbar/PrimaryButton/PrimaryButton';

const DentalCare = () => {
    return (
        <div class="hero min-h-screen py-8 mb-8 mx-auto">
            <div class="hero-content flex-col lg:flex-row justify-around gap-16">
                <img src={treatment} class=" flex-1 max-w-sm rounded-lg shadow-2xl" />
                <div className='flex-1' >
                    <h1 class="text-6xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;