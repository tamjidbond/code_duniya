import React, { useState } from 'react';
import Title from './ui/Title';
import Container from '../Layout/Container';
import Button from './Button';
import Mern from './../assets/course_mern.png'
import ui from './../assets/ui.png'
import videEditing from './../assets/videoediting.png'
import CourseCard from './ui/CourseCard';

const Courses = () => {

    const [displayCourseCount, setDisplayoCourseCoutn] = useState(3)


    const courses = [
        {
            name: 'MERN Stack Development',
            dept: 'Web and Software',
            img: Mern,
            studentCount: '৩০০০',
            rating: 450,
            price: 120000
        },
        {
            name: 'UI Design And Development',
            dept: 'Web and Software',
            img: ui,
            studentCount: '৩০০০',
            rating: 450,
            price: 120000
        },
        {
            name: 'Video Editing',
            dept: 'Films and Media',
            img: videEditing,
            studentCount: '৩০০০',
            rating: 450,
            price: 120000
        },
        {
            name: 'UI Design And Development',
            dept: 'Web and Software',
            img: ui,
            studentCount: '৩০০০',
            rating: 450,
            price: 120000
        },
        {
            name: 'Video Editing',
            dept: 'Films and Media',
            img: videEditing,
            studentCount: '৩০০০',
            rating: 450,
            price: 120000
        },

    ]

    const displayCount = courses.slice(0,displayCourseCount)

    const handleShowMore = ()=>{
        if(displayCourseCount < courses.length){
            setDisplayoCourseCoutn(courses.length)
        }else{
            setDisplayoCourseCoutn(3)
        }
    }

    return (
        <section className='mt-[170px] mb-[90px]'>
            <Container>
                <Title className='text-center' title='আমাদের কোর্স সমুহ' subTitle='আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত  এবং সমৃদ্ধ রিসোর্স দ্বারা পরিপূর্ণ'></Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-11 mt-16 p-6 xl:p-0">
                    {
                        displayCount.map((course)=>(
                            <CourseCard course={course}></CourseCard>
                        ))
                    }
                </div>
                <Button onClick={handleShowMore} className='mx-auto block' title={(displayCourseCount < courses.length)? "আরও কোর্স দেখুন": "কম কোর্স দেখুন"}></Button>
            </Container>
        </section>
    );
};

export default Courses;