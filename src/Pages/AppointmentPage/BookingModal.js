import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ serviceForm, date, setServiceForm }) => {
    const { _id, name, slots } = serviceForm;


    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setServiceForm(null)
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg pb-5">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered input-accent w-full" />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Full Name" className="input input-bordered input-accent w-full" />
                        <input type="number" name="number" placeholder="Phone Number" className="input input-bordered input-accent w-full" />
                        <input type="email" name="email" placeholder="Email" className="input input-bordered input-accent w-full" />
                        <input type="submit" value="submit" placeholder="Type here" className="btn bg-accent w-full input input-bordered input-accent" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;