import React from 'react';
import Container from '../Layout/Container';
import Flex from '../Layout/Flex';
import bannerImage from './../assets/bannerImage.png'
import Title from './ui/Title';
import { FaDotCircle } from "react-icons/fa";


const Speciality = () => {
    return (
        <section className='p-4 xl:p-0 lg:mt-[252px] mb-10 lg:mb-20'>
            <Container>
                <Flex className='flex-col-reverse items-center lg:flex-row justify-between  '>
                    <img className='border-8 rounded-3xl boreder-black' src={bannerImage} alt="bannerimage" />
                    <div>
                        <Title className=' text-center md:text-start' title='আমাদের ক্লাসের বিশেষত্ব'></Title>
                        <div className='flex flex-col gap-8 text-base xl:text-2xl  mt-8 p-4 '>
                            <p className='flex items-center gap-2'><FaDotCircle></FaDotCircle> সপ্তাহে ২ - ৩ দিন ক্লাস</p>
                            <p className='flex items-center gap-2'><FaDotCircle></FaDotCircle> অনলাইন / অফলাইন ক্লাস প্রতিটি কোর্সে</p>
                            <p className='flex items-center gap-2'><FaDotCircle></FaDotCircle> মনোরম ক্লাস রুম</p>
                            <p className='flex items-center gap-2'><FaDotCircle></FaDotCircle> অনলাইন ২৪/৭ সাপোর্ট</p>
                            <p className='flex items-center gap-2'><FaDotCircle></FaDotCircle> অত্যাধুনিক মনিটর এবং প্রজেক্টর এর সুবিধা</p>
                        </div>
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default Speciality;