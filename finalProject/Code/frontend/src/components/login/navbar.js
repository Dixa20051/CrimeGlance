import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './login.css'

function navbar() {

    return(
      <>
      <Navbar  bg="dark" variant="dark"  >
        <Container className="container">
          <img
            src="./images/balance.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
            <a className='nav-link ' href="./userHomePage" >Home</a>
            <a className='nav-link' href="./aboutUs" >About Us</a>
            <a className='nav-link' href="./CrimeInfo">Crime Info</a>
            <a className='nav-link' href="./ContactUs" >Contact Us</a>
            <a className='nav-link' href="./">Login / SignUp</a>
        </Container>
      </Navbar>
      
      </>
    )
}

export default navbar;
