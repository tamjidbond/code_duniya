import React, { useState } from 'react';
import Container from '../Layout/Container';
import Title from './ui/Title';
import SuccessCard from './ui/SuccessCard';
import videothumb from './../assets/video.png';
import Button from './Button';

const Success = () => {
  const [videoCount, setVideoCount] = useState(4);

  const videos = [
    { id: 1, img: videothumb },
    { id: 2, img: videothumb },
    { id: 3, img: videothumb },
    { id: 4, img: videothumb },
    { id: 5, img: videothumb },
    { id: 6, img: videothumb },
  ];

  const showVideo = videos.slice(0, videoCount);

  const handleToggle = () => {
    if (videoCount < videos.length) {
      setVideoCount(videos.length); // Show all
    } else {
      setVideoCount(4); // Collapse back to 4
    }
  };

  return (
    <section>
      <Container>
        <Title
          className="text-center "
          title="আমাদের সফলতার গল্পগুলো"
          subTitle="আমাদের হাতে তৈরি হওয়া প্রতিটি নক্ষত্র"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 xl:p-0 mt-10 md:mt-[90px] ">
          {showVideo.map((v) => (
            <SuccessCard key={v.id} v={v} />
          ))}
        </div>
        <Button
          className="mx-auto block mt-8 md:mt-15 mb-15 md:mb-24"
          title={videoCount < videos.length ? 'আরও দেখুন' : 'কম দেখুন'}
          onClick={handleToggle}
        />
      </Container>
    </section>
  );
};

export default Success;
