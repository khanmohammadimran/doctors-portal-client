import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [serviceForm, setServiceForm] = useState(null)


    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div>
            <h2 className='text-2xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setServiceForm={setServiceForm}
                    ></Service>)
                }
            </div>
            {serviceForm && <BookingModal serviceForm={serviceForm} date={date} setServiceForm={setServiceForm}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;