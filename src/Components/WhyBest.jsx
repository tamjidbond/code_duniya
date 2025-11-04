import React from 'react';
import Container from '../Layout/Container';
import Title from './ui/Title';
import Slider from 'react-slick';
import WhyBestCard from './ui/WhyBestCard';

import prev from './../assets/darkprev.png';
import next from './../assets/darknext.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute bottom-[-150px] left-1/2 transform -translate-y-1/2 z-50 w-14 h-14 flex items-center justify-center "
      onClick={onClick}
    >
      <img src={next} alt="Next" className="w-10 h-10" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute bottom-[-150px] right-1/2 transform -translate-y-1/2 z-50 w-14 h-14 flex items-center justify-center "
      onClick={onClick}
    >
      <img src={prev} alt="Prev" className="w-10 h-10" />
    </button>
  );
}

const WhyBest = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3, // adjusted for better spacing
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const cards = [
    {
      title: 'সফলতার হার',
      subTitle:'এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে',
      count: 90,
    },
    {
      title: 'ক্যারিয়ার প্লেসমেন্ট',
      subTitle: 'এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে',
      count: 10000,
    },
    {
      title: 'স্টুডেন্ট এর পছন্দ',
      subTitle:
        'এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে',
      count: 4000,
    },
    {
      title: 'সফলতার হার',
      subTitle:
        'এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে',
      count: 90,
    },
    {
      title: 'ক্যারিয়ার প্লেসমেন্ট',
      subTitle:
        'এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে',
      count: 10000,
    },
    {
      title: 'স্টুডেন্ট এর পছন্দ',
      subTitle:
        'এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে',
      count: 4000,
    },
  ];

  return (
    <section className="py-12">
      <Container>
        <Title className='text-center' title="কেন আমরাই সেরা" subTitle="কেন আপনি আমাদের লার্নার হবেন" />
        <div className="relative mt-15"> 
          <Slider {...settings}>
            {cards.map((card, index) => (
              <WhyBestCard key={index} card={card} />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default WhyBest;
