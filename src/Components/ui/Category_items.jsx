import React from 'react';

const Category_items = ({item}) => {
    return (
        <div className='bg-secondary max-w-[200px] h-[200px] rounded-[25px] pt-3.5 pb-8 text-center'>
            <img className='mx-auto' src={item.icon} alt="" />
            <h3 className='text-2xl font-semibold text-white mt-2.5'>{item.name}</h3>
        </div>
    );
};

export default Category_items;