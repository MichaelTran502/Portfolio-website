import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Image from 'react-bootstrap/Image'
import Portfolio from '../../assets/img/projects/portfolio.webp';
import StudentRecorder from '../../assets/img/projects/dashboard.webp';
import LoginSystem from '../../assets/img/projects/login.webp';
import Button from 'react-bootstrap/Button';

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-center font-details-b pb-4">PROJECTS</h1>

      <CardDeck>
      <Card>
        <Card.Body className="d-flex justify-content-center flex-wrap">
          <Card.Title>Portfolio site</Card.Title>
          <Image variant="top" src={Portfolio} thumbnail/>
          <Card.Text>
            Developer Portfolio site built with React and styled with React Bootstrap components.
            This project showcases my personal projects and resume.
          </Card.Text>
          <a href="https://github.com/MichaelTran502/Portfolio-website" target="_blank" rel="noopener noreferrer">
            <Button className="m-2 mt-auto" variant="dark">
              Source Code
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="d-flex justify-content-center flex-wrap">
          <Card.Title>Student Recorder</Card.Title>
          <Image variant="top" src={StudentRecorder} thumbnail />
          <Card.Text>
            Fullstack React and Spring boot project. This project is a fullstack 
            CRUD app that allows users to create, read, update and delete students 
            from a database.
          </Card.Text>
          <a href="https://github.com/MichaelTran502/StudentRecorder" target="_blank" rel="noopener noreferrer">
            <Button className="m-2 mt-auto" variant="dark">
              Source Code
            </Button>
          </a>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="d-flex justify-content-center flex-wrap">
          <Card.Title>Login System</Card.Title>
          <Image variant="top" src={LoginSystem} thumbnail />
          <Card.Text>
            Secure Login and registration system built with Spring Security and Spring-data-JPA.
            This app allows user to register their accounts via a 15 minute expiring email link.
          </Card.Text>
          <a href="https://github.com/MichaelTran502/LoginSystem" target="_blank" rel="noopener noreferrer">
            <Button className="m-2 mt-auto" variant="dark">
              Source Code
            </Button>
          </a>
        </Card.Body>
      </Card>
    </CardDeck>

    </div>
  )
}

export default Projects;