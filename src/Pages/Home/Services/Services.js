import React from 'react';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            img: flouride,
            name: 'Flouride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 2,
            img: cavity,
            name: 'Cavity Feeling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            img: teeth,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ];
    return (
        <div className='py-28'>
            <div className='text-center'>
                <h3 className='font-bold text-xl text-secondary uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Service We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;