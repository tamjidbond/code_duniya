import React from 'react';

const Button = ({title}) => {
    return (
        <button className='bg-[#415A77] py-1 px-14 rounded-[10px] text-xl text-white font-semibold'>
            {title}
        </button>
    );
};

export default Button;