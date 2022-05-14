import React from 'react';

const InfoCard = ({ img, infoTitle, infoDetail, bgInfo }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgInfo} pt-5`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />

            </figure>
            <div className='card-body text-white'>
                <h2 className="card-title">{infoTitle}</h2>
                <p>{infoDetail}</p>
            </div>
        </div >
    );
};

export default InfoCard;