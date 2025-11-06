import React from 'react';

const WhyBestCard = ({ card }) => {
    return (
        <div className='bg-secondary text-white w-[350px] h-[370px] p-7 rounded-[15px]'>
            <h2 className='text-4xl pt-9'>{card.count}</h2>
            <h2 className='text-4xl mt-4'>{card.title}</h2>
            <p className='text-base mt-6 mb-[86px]'>{card.subTitle}</p>
        </div>
    );
};

export default WhyBestCard;