import React from 'react';
import Navbar from './Components/Navbar';
import Container from './Layout/Container';
import Banner from './Components/Banner';
import Category from './Components/Category';

const App = () => {
  return (
    <main>
      <div className='bg-primary '>
        <Container>
          <Navbar></Navbar>
          <Banner></Banner>
        </Container>
      </div>
      <Category></Category>
    </main>
  );
};

export default App;