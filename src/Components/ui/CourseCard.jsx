import React from 'react';

const CourseCard = ({ course }) => {


    const {name, dept, price, img, rating, studentCount} = course; 
    console.log(course)
    return (
        <div className='bg-[#415A77] text-white rounded-3xl'>
            <img className='w-full' src={img} alt="" />
            <div className='p-4'>
                <div className='flex justify-between text-[15px] font-medium pt-2'>
                    <p>{dept}</p>
                    <p className='font-extralight'>{studentCount}</p>
                </div>
                <h2 className='font-bold text-2xl pt-2'>{name}</h2>
                <div className='flex justify-between pt-3'>
                    <h4 className='font-extrabold text-2xl'>৳ {price}</h4>
                    <button className='bg-primary px-4.5 py-1 rounded-xl'>ডিসকাউন্ট নিন</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;