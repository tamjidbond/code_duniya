import React from 'react';

const Title = ({title, subTitle, className}) => {
    return (
        <div className={`${className}`}>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-xl font-medium mt-4'>{subTitle}</p>
        </div>
    );
};

export default Title;