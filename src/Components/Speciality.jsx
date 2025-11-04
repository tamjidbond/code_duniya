import React from 'react';
import Container from '../Layout/Container';
import Flex from '../Layout/Flex';
import bannerImage from './../assets/bannerImage.png'
import Title from './ui/Title';
import { FaDotCircle } from "react-icons/fa";


const Speciality = () => {
    return (
        <section className='mt-[282px] mb-32'>
            <Container>
                <Flex className='justify-between '>
                    <img className='border-8 rounded-3xl boreder-black' src={bannerImage} alt="bannerimage" />
                    <div>
                        <Title className='text-start' title='আমাদের ক্লাসের বিশেষত্ব'></Title>
                        <div className='flex flex-col gap-8 text-2xl mt-8 p-4'>
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