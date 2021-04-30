import logo from './logo.svg';
import './App.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import bcg from './images/bcg0.jpg';
import NavBar from './components/NavBar/NavBar'
import Simcard from './components/SimpleCard/SimpleCard'
import About from './components/AboutUs/aboutus'
import Whatwedo from './components/Whatwedo/whatwedo';
import ContactUs from './components/ContactUs/ContactUs'
import Logo from "./images/Navbarlogo.jpg";

const divStyle = {
  width: '100%',
  height: '1000px',
  backgroundImage: `url(${bcg})`,
  backgroundSize:'auto'
};

function App() {
  
  return (
    <div className="App">
      <div style={{ paddingTop: "0px" }}>
        <NavBar />
        <div className="Header">
          <Simcard />
        </div>
        <Container fixed>
          <div id="aboutus" className="AboutUs">
            <h2 style={{ color: "white" }}>ABOUT US</h2>
            <hr />
            <About />
          </div>
          <div id="whatwedo" className="WhatWeDo">
            <h2 style={{ color: "white" }}>WHAT WE DO</h2>
            <hr />
            <div style={{ textAlign: "center" }}>
              <h3 style={{ color: "#E7F6F7" }}>
                WE JUST SUFFER IN NOTHINGNESS
              </h3>
            </div>
            <Whatwedo></Whatwedo>
          </div>

          <div id="contactus" className="ContactUs">
            <h2 style={{ color: "white" }}>Contact US</h2>
            <hr />
            <div style={{ textAlign: "center" }}>
              <h3 style={{ color: "#E7F6F7" }}>Feel Free to Contact Us</h3>
            </div>
            <div>
              <img
                style={{ width: "105px", backgroundColor: "white" }}
                src={Logo}
                alt={"Welcome"}
              ></img>
            </div>
            <ContactUs />
          </div>
        </Container>
      </div>
    </div>
  );
}


export default App;
