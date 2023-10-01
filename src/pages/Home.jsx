import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import './styles.scss';
import { Link } from 'react-scroll';
import key from 'assets/key.png';
import security from 'assets/security.jpg';
import styled from 'styled-components';

function Home() {
  
  return (
    <div className='Home'>
      <div className='title-box'>
        <h1><FormattedMessage id="welcome" /></h1> 
      <p><FormattedMessage id="intro1" /></p>
      <p><FormattedMessage id="intro2" /></p>
      </div>
      <img className='blur' src={security} alt="" />
      <GrayBox className='intro'>
        <img className='profile' src={key} alt="" />
        <div>
          {/* <p className='title'>[컴퓨터공학과/인공지능융합학과] <span>대학원생 및 학부연구생</span> 모집중 </p> */}
          <p className='title'><FormattedMessage id="recruitingTitle" /></p>
          <p><FormattedMessage id="recruitingDesc" /></p>
        </div>
      </GrayBox>
      <Link to="Contact" spy={true} smooth={true}><PointBox className='contact_button'><FormattedMessage id="button" /></PointBox></Link>
    </div>
  );
}

export default Home;

const GrayBox = styled.div`
  background-color: ${({theme}) => theme.bgColor}; 
`;

const PointBox = styled.button`
  background-color: ${({theme}) => theme.pointColor}; 
`;