import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {
    const [serviceForm, setServiceForm] = useState(null)
    const formattedDate = format(date, 'PP')
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setServiceForm={setServiceForm}
                    ></Service>)
                }
            </div>
            {serviceForm && <BookingModal
                serviceForm={serviceForm}
                refetch={refetch}
                date={date}
                setServiceForm={setServiceForm}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;