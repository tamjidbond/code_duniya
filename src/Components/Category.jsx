import React from 'react';
import Container from '../Layout/Container';
import Category_items from './ui/Category_items';
import icon1 from './../assets/icon1.png';
import icon2 from './../assets/icon2.png';
import icon3 from './../assets/icon3.png';
import icon4 from './../assets/icon4.png';
import Slider from 'react-slick';

import prev from './../assets/prev.png';
import next from './../assets/next.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom-slick.css"; 

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 -right-18 transform -translate-y-1/2 z-50 w-16 h-16 flex items-center justify-center rounded-full transition"
      onClick={onClick}
    >
      <img src={next} alt="Next" className="w-20 h-20" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 -left-18 transform -translate-y-1/2 z-50 w-16 h-16 flex items-center justify-center  rounded-full transition"
      onClick={onClick}
    >
      <img src={prev} alt="Prev" className="w-20 h-20" />
    </button>
  );
}

const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const items = [
    { name: "গ্রাফিকস", icon: icon1 },
    { name: "নেটওয়ার্কিং", icon: icon2 },
    { name: "সফটওয়্যার", icon: icon3 },
    { name: "ফিল্ম মিডিয়া", icon: icon4 },
    { name: "গ্রাফিকস", icon: icon1 },
    { name: "নেটওয়ার্কিং", icon: icon2 },
  ];

  return (
    <section className="absolute w-full top-[-100px] mx-auto">
      <Container>
        <div className="max-w-[1000px] mx-auto relative">
          <Slider {...settings}>
            {items.map((item, index) => (
              <Category_items key={index} item={item} />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Category;
