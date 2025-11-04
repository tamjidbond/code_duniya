import React from 'react';

const Button = ({title, className, onClick}) => {
    return (
        <button onClick={onClick} className={`bg-[#415A77] py-1 px-14 rounded-[10px] text-xl text-white font-semibold ${className}`}>
            {title}
        </button>
    );
};

export default Button;