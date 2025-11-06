import React, { useState } from 'react';
import BannerImage from './../assets/bannerImage.png'
import logo from './../assets/logo.png'
import Button from './Button';
import Container from '../Layout/Container';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

const Navbar = () => {

    const [showMenu, SetShowMenu] = useState(false)

    const handleToggleMenu = () =>{
        SetShowMenu(!showMenu)
    }
    return (
        <div className='bg-primary'>
            <Container>
                <nav className={`font-Anek  text-white flex justify-between items-center py-5.5 text-xl font-semibold px-4 lg:px-2 gap-2`}>
                    <img className=' w-[120px] md:w-auto' src={logo} alt="logo" />
                    <ul className={`${showMenu ?'absolute top-20 w-full p-4 left-0 bg-primary':'hidden'} md:flex gap-[25px] text-[15px] `}>
                        <li>হোম</li>
                        <li>কোর্সসমহ</li>
                        <li>যোগাযোগ</li>
                        <li>গাইডলাইন</li>
                    </ul>
                    <div className='flex gap-4 items-center'>
                        <Button className={``} title='কোর্স দেখুন'></Button>
                        <button className='md:hidden' onClick={handleToggleMenu}>{showMenu ? <ImCross></ImCross> : <GiHamburgerMenu></GiHamburgerMenu>}</button>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;