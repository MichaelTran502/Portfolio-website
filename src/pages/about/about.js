import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Profile from '../../assets/img/profile/profile.webp';

import './about.css';

const About = () => {
  return (
    <div id="about">
    <div className="About">
    <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
    <Container>
      <Row className="pt-3 pb-5 align-items-center">

        <Col xs={12} md={6}>
          <Row className="justify-content-center mb-2 mr-2" >
          <Image className="profile justify-content-end" src={Profile} thumbnail />
          </Row>
        </Col>

        <Col xs={12} md={6}>
          <Row className=" align-items-start p-2 my-details rounded">
            
            Hi there! I am <strong>&nbsp;Michael Tran</strong>
            <br />A passionate programmer from Sydney Australia.
            <br />
            I am a Computer Science graduate from the University of New South Wales.
            <br />
            I am an aspiring Java Developer looking to build enterprise applications with Java and the Spring Framework.
            <br />
            My most experienced Tech Stack is ReactJs(javascript) frontend, Springboot(Java) backend and PostgreSQL database. 
            <br />I enjoy working on personal projects in my spare time.
            <br /> <br />

          </Row>
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div>
                <a href="#contact">
                  <Button className="m-2" variant="primary">Contact Me</Button>
                </a>
              </div>
              <div>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Button className="m-2" variant="success">
                    My Resume
                  </Button>
                </a>
              </div>
              <div>
                <a href="https://github.com/MichaelTran502" target="_blank" rel="noopener noreferrer">
                  <Button className="m-2" variant="dark">
                    GitHub
                  </Button>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/michael-tran-3708041b7/" target="_blank" rel="noopener noreferrer">
                  <Button className="m-2" variant="info">
                    LinkedIn
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
    </div>
    </div>
  )
}

export default About;