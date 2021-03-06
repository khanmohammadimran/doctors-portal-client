import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <div className='w-full'>
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='w-full'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;