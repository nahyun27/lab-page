import React, { useState, useEffect } from 'react';
import NavigationBar from './Header';
import { BrowserRouter } from 'react-router-dom';
import './styles.scss';
import { Link } from 'react-scroll';
// import logoHanyang from 'assets/logo-hanyang.png';

function Footer() {
  return (
    <div className='Footer'>
      <div className='contents_root'>
        <div>
          <p>Join us and explore exciting opportunities with us!</p>
          <div className='infos'>
            <p>Hanyang Univ. ACE Lab</p> 
            <p>한양대학교 인공지능 보안 연구실 </p> 
            <p>yeonjoonlee@hanyang.ac.kr</p>
            <p>Copyright © 2023 ACE Lab All rights reserved </p>
          </div>
        </div>
        <div className='logos'>
          <img className='logo' src='' alt="" />
          <img className='logo' src="" alt="" />
          <img className='logo' src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;