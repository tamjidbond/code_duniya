import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const FooterTitle = () => {
    return (
        <div className='text-center text-white pb-10 xl:pb-[184px] flex flex-col items-center justify-around gap-8'>
            <h2 className='font-bold text-4xl  md:text-[80px]'>কোড দুনিয়া</h2>
            <h3 className='font-normal text-base md:text-3xl'>দেশের সর্ববৃহৎ আইটি ট্রেনিং প্লাটফর্ম</h3>
            <div className='flex text-[40px] gap-8'>
                <FaFacebook></FaFacebook>
                <FaLinkedin></FaLinkedin>
                <FaYoutube></FaYoutube>
                <FaXTwitter></FaXTwitter>
            </div>
        </div>
    );
};

export default FooterTitle;