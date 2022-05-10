import React from 'react';

const InfoCard = ({ img, infoTitle, infoDetail, bgInfo }) => {
    return (
        <div class={`card lg:card-side shadow-xl ${bgInfo}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />

            </figure>
            <div class='card-body text-white'>
                <h2 class="card-title">{infoTitle}</h2>
                <p>{infoDetail}</p>
            </div>
        </div >
    );
};

export default InfoCard;