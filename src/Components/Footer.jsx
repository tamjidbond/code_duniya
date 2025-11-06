import React from 'react';
import FooterAddmission from './ui/FooterAddmission';
import Container from '../Layout/Container';
import { FaLocationArrow } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import FooterTitle from './FooterTitle';


const Footer = () => {
    return (
        <section className='bg-primary'>
            <Container>
                <FooterAddmission></FooterAddmission>
                <div className='text-white px-6 xl:px-0 lg:flex justify-between pb-15'>
                    <div className='font-semibold text-xl xl:text-2xl leading-[60px]'>
                        <h4>আমাদের ঠিকানা</h4>
                        <p className='flex gap-4 items-center '> <FaLocationArrow></FaLocationArrow>২৮ / ২, মেহের প্লাজা, ধানমন্ডি, ঢাকা</p>
                        <p className='flex gap-4 items-center '><FaPhoneAlt></FaPhoneAlt> +৮৮ ০১৭১৫৫৫৭৮৯৬</p>
                        <p className='flex gap-4 items-center '><IoMail></IoMail> info@codeduniya.com</p>
                    </div>
                    <div className='text-xl font-normal leading-[60px]'>
                        <h4 className='font-semibold text-2xl'>গুরুত্বপূর্ণ লিংক</h4>
                        <p>আমাদের কোর্স</p>
                        <p>মেন্টর</p>
                        <p>আমাদের ব্লগ</p>
                        <p>প্রাইভেসি পলিসি</p>
                        <p>আমাদের সেমিনার</p>
                    </div>
                    <div className='text-xl font-normal leading-[60px]'>
                        <h4 className='font-semibold text-2xl '>জনপ্রিয় কোর্সগুল</h4>
                        <p>আমাদের কোর্স</p>
                        <p>মেন্টর</p>
                        <p>আমাদের ব্লগ</p>
                        <p>প্রাইভেসি পলিসি</p>
                        <p>আমাদের সেমিনার</p>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29217.3635381146!2d90.3621045095191!3d23.741300688094913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1762252664521!5m2!1sen!2sbd" 
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>

                    </div>
                </div>
                <FooterTitle></FooterTitle>
            </Container>
        </section>
    );
};

export default Footer;