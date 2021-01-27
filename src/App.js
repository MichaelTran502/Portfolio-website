import React from 'react';
import './App.css';

// components
import MyNavbar from './components/my-navbar/mynavbar';
import MyCarousel from './components/my-carousel/my-carousel';
import Intro from './components/my-intro/intro';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <Intro />
    </div>
  );
}

export default App;
