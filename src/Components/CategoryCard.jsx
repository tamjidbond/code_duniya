import React from 'react';

const CategoryCard = ({item}) => {
    return (
        <div className='bg-[#1B263B] py-5 px-16 rounded-3xl'>
            <img src={item.icon} alt="" />
            <p className='text-2xl font-semibold text-white'>{item.name}</p>
        </div>
    );
};

export default CategoryCard;