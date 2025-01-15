import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './register.css';

function AdminNavbar() {

    return(

        <Navbar  bg="dark" variant="dark"  >
        <Container >
       

        <img
              src="./images/balance.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <a className='nav-link ' href="./AdminHomePage" >Home</a>
            <a className='nav-link' href="./AdminAboutUs" >About Us</a>
            <a className='nav-link' href="./AdminCrimeInfo" >Crime Info</a>
            <a className='nav-link' href="./AdminContact" >Contact Us</a>
            <a className='nav-link' href="./AdminUpdateRecords">Update Record</a>
            <a className='nav-link' href="./" >Login / SignUp</a>
        </Container>
      </Navbar>
    )
}

export default AdminNavbar;
