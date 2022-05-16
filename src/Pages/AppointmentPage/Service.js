import React from 'react';

const Service = ({ service, setServiceForm }) => {
    const { name, slots } = service;

    return (
        <div className="card bg-base-100 lg:w-96 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-title text-secondary text-2xl justify-center">{name}</h2>
                <p className='text-center'>
                    {
                        slots.length
                            ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500'>Try another day</span>
                    }
                </p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setServiceForm(service)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment Now</label>
                </div>
            </div>
        </div>
    );
};

export default Service;