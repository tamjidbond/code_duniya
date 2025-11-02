import React from 'react';
import Container from '../Layout/Container';
import Category_items from './ui/Category_items';
import icon1 from './../assets/icon1.png'
import icon2 from './../assets/icon2.png'
import icon3 from './../assets/icon3.png'
import icon4 from './../assets/icon4.png'
import Slider from 'react-slick';

import prev from './../assets/prev.png'
import next from './../assets/next.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} right-5 z-50 flex items-center justify-center  rounded-full hover:bg-green-700 transition`}
      onClick={onClick}
    >
      {/* <img src={next} alt="Prev" className="w-10 h-10 " /> */}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} left-5 z-50 flex items-center justify-center  rounded-full hover:bg-green-700 transition`}
      onClick={onClick}
    >
      {/* <img src={prev} alt="Prev" className="w-10 h-10 " /> */}
    </div>
  );
}


const Category = () => {



    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow></SampleNextArrow>,
        prevArrow: <SamplePrevArrow />
    };



    let items = [
        {
            name: "গ্রাফিকস",
            icon: icon1
        },
        {
            name: "নেটওয়ার্কিং",
            icon: icon2
        },
        {
            name: "সফটওয়্যার",
            icon: icon3
        },
        {
            name: "ফিল্ম মিডিয়া",
            icon: icon4
        },
        {
            name: "গ্রাফিকস",
            icon: icon1
        },
        {
            name: "নেটওয়ার্কিং",
            icon: icon2
        },
    ]
    return (
        <section className='absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto'>
            <Container>
                <Slider {...settings}>

                    {
                        items.map((item) => (
                            <Category_items item={item}></Category_items>
                        ))
                    }
                </Slider>
            </Container>
        </section>
    );
};

export default Category;