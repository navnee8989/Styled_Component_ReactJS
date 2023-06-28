import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaWhatsapp, FaInstagramSquare, FaBars } from 'react-icons/fa';

const Head = styled.div`
  width: 100%;
  background-image: linear-gradient(45deg,#d1edcc,#edccdd);
`;

const Headercontainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  padding-top: 10px;
  justify-content: space-between;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  @media (min-width: 301px) and (max-width: 576px) {
    width: 400px;
    margin: 0 auto;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    width: 550px;
    margin: 0 auto;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    width: 700px;
    margin: 0 auto;
  }
  @media (min-width: 992px) and (max-width: 1400px) {
    width: 960px;
    margin: 0 auto;
  }
`;

const Links = styled(Link)`
  color: red;
  @media (min-width: 301px) and (max-width: 576px) {
    display: none;
  }
  @media (min-width: 577px) and (max-width: 768px) {
   display: none;
  }
 
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-left: 20px;
    font-family: 'Prompt', sans-serif;
    font-family: 'Roboto', sans-serif;
    color: Red;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  font-weight: 300;
  color: red;
`;

const Logo = styled.div`
  display: flex;

  h1 {
    font-size: 25px;
    color: red;
    text-align: center;
  }
`;

const Icon = styled.div`
  @media (min-width: 300px) {
    display: none;
  }
  @media (max-width: 300px) {
    display: none;
  }
`;

const Instagram = styled(FaInstagramSquare)`
  background-image: linear-gradient(to right, #fd5d94, #ec4c7a, #d53262, #bf184a, #a80033);
  margin-left: 20px;
  color: white;
  border-radius: 20%;
  font-size: 20px;
`;

const WhatsApp = styled(FaWhatsapp)`
  margin-left: 20px;
  color: green;
  font-size: 20px;
`;

const Twitter = styled(FaTwitter)`
  margin-left: 20px;
  color: #5894f5;
  font-size: 20px;
`;

const Linkedin = styled(FaLinkedin)`
  margin-left: 20px;
  color: #1959bf;
  font-size: 20px;
`;

const Manubar = styled(FaBars)`
  cursor: pointer;
  font-size: 20px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Bars = styled.div`
  cursor: pointer;
  @media (min-width: 300px) {
    display: block;
  }
  ul {
    list-style: none;
  }

  li {
    margin: 20px;
  }
`;

function Header() {
  const [display, setdisplay] = useState(false);

  const links = ["Home", "About", "Promo", "Blog", "Contact Us"];

  const Navbar = links.map((item, index) => (
    <li key={index}>
      <StyledLink to={item}>{item}</StyledLink>
    </li>
  ));

  const handleBar = () => {
    setdisplay(!display);
  };

  return (
    <Fragment>
      <Head>
        <Headercontainer>
          <Logo>
            <h1>Hotel</h1>
            <span>Lucxury</span>
          </Logo>
          <Links>
            <ul>{Navbar}</ul>
          </Links>
          <Icon>
            <Instagram />
            <WhatsApp />
            <Twitter />
            <Linkedin />
          </Icon>
          <Manubar>
            <FaBars onClick={handleBar} />
          </Manubar>
        </Headercontainer>
      </Head>

      {display && (
        <Bars>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Promo">Promo</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </Bars>
      )}
    </Fragment>
  );
}

export default Header;
