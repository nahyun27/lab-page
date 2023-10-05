import { BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './styles.scss';
import logoW from 'assets/logoW.png';
import logoB from 'assets/logoB.png';
import styled from 'styled-components';
import ThemeToggle from 'components/ThemeToggle';
import { FormattedMessage } from "react-intl";
import LangChange from './LangChange';


function Header({ toggle, mode }) {
    return(
      <BasicBox className="Header">
        <div className='box'>
          <nav className="navbar">
            <Link to="Home" spy={true} smooth={true}>
            <div className="navbar__logo">
              <img src={mode === 'light' ? logoB: logoW} className="logo banselect" alt="logo" />
              <div className="name-box">
                <p className="name banselect" ><FormattedMessage id="labName"/></p>
                <p className="desc" >Hanyang <Texts>A</Texts>I & <Texts>C</Texts>yber S<Texts>E</Texts>curity Lab</p>
                {/* <p className="desc banselect" ><FormattedMessage id="labName2"/></p> */}
              </div>
            </div>
            </Link>
              <ul className="navbar__menu">
                <Link to="Home" spy={true} smooth={true}><li><FormattedMessage id="Home"/></li></Link>
                <Link to="Research" spy={true} smooth={true}><li><FormattedMessage id="Research"/></li></Link>
                <Link to="Members" spy={true} smooth={true}><li><FormattedMessage id="Members"/></li></Link>
                <Link to="Publication" spy={true} smooth={true}><li><FormattedMessage id="Publications"/></li></Link>
                <Link to="Gallery" spy={true} smooth={true}><li><FormattedMessage id="Gallery"/></li></Link>
                <Link to="Contact" spy={true} smooth={true}><li><FormattedMessage id="Contact"/></li></Link>
                <li className='noMargin'><LangChange></LangChange></li>
                <li className='noMargin'><ThemeToggle toggle={toggle} mode={mode}></ThemeToggle></li>
              </ul>

            <input type="checkbox" id="menuicon"/>
            <label htmlFor="menuicon">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <GrayBox className="sidebar">
                <ul className="sidebar__menu">
                  <Link to="Home" spy={true} smooth={true}><li><FormattedMessage id="Home"/></li></Link>
                  <Link to="Research" spy={true} smooth={true}><li><FormattedMessage id="Research"/></li></Link>
                  <Link to="Members" spy={true} smooth={true}><li><FormattedMessage id="Members"/></li></Link>
                  <Link to="Publication" spy={true} smooth={true}><li><FormattedMessage id="Publications"/></li></Link>
                  <Link to="Gallery" spy={true} smooth={true}><li><FormattedMessage id="Gallery"/></li></Link>
                  <Link to="Contact" spy={true} smooth={true}><li><FormattedMessage id="Contact"/></li></Link>
                  <li><LangChange></LangChange></li>
                  <li><ThemeToggle toggle={toggle} mode={mode}></ThemeToggle></li>
                </ul>
            </GrayBox>
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


const Texts = styled.div`
  color: ${({theme}) => theme.textColor} !important; 
  font-weight: 600;
  display: inline-block;
`;

const Ham = styled.span`
  color: ${({theme}) => theme.textColor} !important;
`;
