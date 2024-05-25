import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
import './styles.scss';
import { Link } from 'react-scroll';
import key from 'assets/key.png';
import security from 'assets/security.jpg';
import styled from 'styled-components';
import Home from 'pages/home/Home';
import Research from 'pages/Research';
import Members from 'pages/Members';
import Publication from 'pages/publication/Publication';
import Contact from 'pages/Contact';
import Gallery from 'pages/Gallery';
import Header from 'components/Header';
import { useTheme } from 'context/themeProvider';
import Footer from 'components/Footer';

function Main() {
  const [themeMode, toggleTheme] = useTheme();
  
  return (
    <div className='Main'>
        <Home position="relative" id="Home" toggle={toggleTheme} mode={themeMode} />
        <Research position="relative" id="Research" toggle={toggleTheme} mode={themeMode} />
        <Members position="relative" id="Members" toggle={toggleTheme} mode={themeMode} />
        <Publication position="relative" id="Publication" toggle={toggleTheme} mode={themeMode} />
        <Gallery position="relative" id="Contact" toggle={toggleTheme} mode={themeMode} />
        {/* <Contact position="relative" id="Contact" toggle={toggleTheme} mode={themeMode} /> */}
        <Footer toggle={toggleTheme} mode={themeMode} />
        <Header toggle={toggleTheme} mode={themeMode} />
    </div>
  );
}

export default Main;