import React from 'react';
import appoinment from '../../../assets/images/appointment.png'
const Contact = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }}>
            <div className='py-8 text-center w-1/2 mx-auto'>
                <h3 className='text-2xl text-white'>Contact us</h3>
                <h2 className='text-white text-5xl py-5'>Stay connected with us</h2>
                <form>
                    <input className='w-full py-5 p-3 rounded-lg mb-8' type="email" placeholder='Enter Your Email Address' />
                    <br />
                    <input className='w-full py-5 p-3 rounded-lg mb-8' type="text" placeholder='Subject' />
                    <br />
                    <textarea className='w-full py-5 p-3 rounded-lg mb-8' placeholder='Your Message' id="" cols="30" rows="10"></textarea>
                    <input class="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary" type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default Contact;