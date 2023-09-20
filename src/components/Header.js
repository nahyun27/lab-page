import { BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './styles.scss';
import logo from 'assets/logo.png';
import styled from 'styled-components';
import ThemeToggle from 'components/ThemeToggle';
import { FormattedMessage } from "react-intl";
import LangChange from './LangChange';

function Header({ toggle, mode }) {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const updateScroll = () => {
  //     setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  // }
  // useEffect(()=>{
  //     window.addEventListener('scroll', updateScroll);
  // });
  
    return(
      <BasicBox className="Header">
        <div className='box'>
          <nav className="navbar">
            <Link to="Home" spy={true} smooth={true}>
            <div className="navbar__logo">
              <img src={logo} className="logo" alt="logo" />
              <div className="name-box">
                <p className="name" ><FormattedMessage id="labName"/></p>
                <p className="desc" ><FormattedMessage id="labName2"/></p>
              </div>
            </div>
            </Link>
              <ul className="navbar__menu">
                <Link to="Home" spy={true} smooth={true}><li><FormattedMessage id="Home"/></li></Link>
                <Link to="Research" spy={true} smooth={true}><li><FormattedMessage id="Research"/></li></Link>
                <Link to="Members" spy={true} smooth={true}><li><FormattedMessage id="Members"/></li></Link>
                <Link to="Publication" spy={true} smooth={true}><li><FormattedMessage id="Publications"/></li></Link>
                <Link to="Contact" spy={true} smooth={true}><li><FormattedMessage id="Contact"/></li></Link>
                <li><LangChange></LangChange></li>
                <li><ThemeToggle toggle={toggle} mode={mode}></ThemeToggle></li>
              </ul>

            <input type="checkbox" id="menuicon"/>
            <label htmlFor="menuicon">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className="sidebar">
                <ul className="sidebar__menu">
                  <Link to="Home" spy={true} smooth={true}><li><FormattedMessage id="Home"/></li></Link>
                  <Link to="Research" spy={true} smooth={true}><li><FormattedMessage id="Research"/></li></Link>
                  <Link to="Members" spy={true} smooth={true}><li><FormattedMessage id="Members"/></li></Link>
                  <Link to="Publication" spy={true} smooth={true}><li><FormattedMessage id="Publications"/></li></Link>
                  <Link to="Contact" spy={true} smooth={true}><li><FormattedMessage id="Contact"/></li></Link>
                </ul>
            </div>
          </nav>
        </div>
      </BasicBox>
    );
}

export default Header;


const GrayBox = styled.div`
  background-color: ${({theme}) => theme.bgColor}; 
`;

const BasicBox = styled.div`
  background-color: ${({theme}) => theme.backgroundColor}; 
`;

const Orange = styled.p`
  color: ${({theme}) => theme.mode === 'light' ? '#3E53BF' : 'orange'}; 
`;