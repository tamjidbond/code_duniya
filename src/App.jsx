import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Category from './Components/Category';
import Courses from './Components/Courses';
import WhyBest from './Components/WhyBest';
import Speciality from './Components/Speciality';
import Success from './Components/Success';
import Footer from './Components/Footer';
import CopyRitght from './Components/ui/CopyRitght';

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='relative'>
        <Category></Category>
      </div>
      <Courses></Courses>
      <WhyBest></WhyBest>
      <Speciality></Speciality>
      <Success></Success>
      <Footer></Footer>
      <CopyRitght></CopyRitght>
    </main>
  );
};

export default App;