import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-parallax";

// components
import MyNavbar from './components/my-navbar/mynavbar';
import MyCarousel from './components/my-carousel/my-carousel';
import Intro from './components/my-intro/intro';
import About from './pages/about/about';

const App = () => {
  return (
    <div className="App" style={{ position: "relative"}}>
      <MyNavbar />
      <MyCarousel />
      <Intro />


      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/background/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;

