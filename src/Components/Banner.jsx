import React from 'react';
import banerImage from './../assets/bannerImage.png'
import Button from './Button';
import Flex from '../Layout/Flex';
import Container from '../Layout/Container';

const Banner = () => {
    return (
        <section className='bg-primary lg:px-2'>
            <Container>
                <Flex className=' flex-col-reverse  lg:flex-row justify-between pt-10 md:pt-[82px] pb-[172px] items-center px-4 lg:px-0'>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='font-bold text-4xl md:text-[50px] text-white max-w-[435px] mt-4 lg:mt-auto leading-14 md:leading-20'>দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম </h1>
                        <p className='text-base md:text-xl text-white max-w-[457px] my-4 md:my-[45px] leading-[41px]'>আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি এক্সপার্ট হিসেবে গড়ে তুলুন</p>
                        <Button title='কোর্স দেখুন'></Button>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img src={banerImage} alt="bannerImage" className='' />
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default Banner;