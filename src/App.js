import React from 'react';
import './App.css';

// components
import MyNavbar from './components/my-navbar/mynavbar';
import MyCarousel from './components/my-carousel/my-carousel';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
    </div>
  );
}

export default App;
