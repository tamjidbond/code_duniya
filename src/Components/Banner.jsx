import React from 'react';
import banerImage from './../assets/bannerImage.png'
import Button from './Button';
import Flex from '../Layout/Flex';
import Container from '../Layout/Container';

const Banner = () => {
    return (
        <section className='bg-primary relative'>
            <Container>
                <Flex className='justify-between pt-[82px] pb-[172px] items-center'>
                    <div>
                        <h1 className='font-bold text-[50px] text-white max-w-[435px] leading-20'>দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম </h1>
                        <p className='text-xl text-white max-w-[457px] my-[45px] leading-[41px]'>আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি এক্সপার্ট হিসেবে গড়ে তুলুন</p>
                        <Button title='কোর্স দেখুন'></Button>
                    </div>
                    <div>
                        <img src={banerImage} alt="bannerImage" className='' />
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default Banner;