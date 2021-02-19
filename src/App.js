import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";

// components
import MyNavbar from './components/my-navbar/mynavbar';
import MyCarousel from './components/my-carousel/my-carousel';
import Intro from './components/my-intro/intro';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';

const App = () => {
  return (
    <div className="App" style={{ position: "relative"}}>
      <MyNavbar />
      <MyCarousel />
      <Intro />



      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <About />
          </Fade>
        </Container>
      </div>


      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>

    </div>
  );
}

export default App;

