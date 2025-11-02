import React from 'react';
import BannerImage from './../assets/bannerImage.png'
import logo from './../assets/logo.png'
import Button from './Button';

const Navbar = () => {
    return (
        <div>
            <nav className='font-Anek  text-white flex justify-between items-center py-5.5 text-xl font-semibold'>
                <img src={logo} alt="logo" />
                <ul className='flex gap-[25px] '>
                    <li>হোম</li>
                    <li>আমাদের কোর্সসমহ</li>
                    <li>যোগাযোগ</li>
                    <li>ক্যারিয়ার গাইডলাইন</li>
                </ul>
                <Button title='কোর্স দেখুন'></Button>
            </nav>
        </div>
    );
};

export default Navbar;