import './styles.scss';
import React, {useState} from "react"
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { FormattedMessage } from "react-intl";

import prof from 'assets/professor.jpeg';
import home from 'assets/home.png';
import nahyun from 'assets/nahyun.jpeg';
import sungbin from 'assets/sungbin.png';
import geonhee from 'assets/geonhee.png';
import styled from 'styled-components';
import user from 'assets/user.png';

function Members ({ toggle, mode }) {
  const [imgLoading, setImgLoading] = useState(true);
  const homepageUrl = "http://yeonjoonlee.com/"
  const phds = [
    {
      "name": "SungBin Park ",
      "image": sungbin,
      "email": 'ksknh7@hanyang.ac.kr',
    }, 
    {
      "name": "SungJu Park",
      "image": user,
      "email": 'ksknh7@hanyang.ac.kr',
    }, 
    {
      "name": "Nahyun Kim",
      "image": user,
      "email": 'ksknh7@hanyang.ac.kr',
    }, 
    {
      "name": "Nahyun Kim",
      "image": user,
      "email": 'ksknh7@hanyang.ac.kr',
    },
  ]
  const masters = [
    {
      "name": "NaHyun Kim",
      "image": nahyun,
      "email": 'ksknh7@hanyang.ac.kr',
    }, 
    {
      "name": "JiWon Han",
      "image": user,
      "email": 'ksknh7@hanyang.ac.kr',
    }, 
    {
      "name": "GeonHee Jo",
      "image": geonhee,
      "email": 'ksknh7@hanyang.ac.kr',
    }, 
    {
      "name": "MinJae Kang",
      "image": user,
      "email": 'ksknh7@hanyang.ac.kr',
    }, 
    {
      "name": "Hun Ji",
      "image": user,
      "email": 'ksknh7@hanyang.ac.kr',
    }, 
    {
      "name": "Nahyun Kim",
      "image": user,
      "email": 'ksknh7@hanyang.ac.kr',
    }, 
  ]
  return(
    <div className="Members">
      <div className="prof-box">
        <h1><FormattedMessage id="prof" /></h1>
        <img className='profile' src={prof} alt="" />
        <div className='row-box'>
          <p className='name'>Yeonjoon Lee</p>
          <img onClick={()=>{window.open(homepageUrl)}} className='home' src={home} alt="" />
        </div>
        <div className='desc'>
          <p>Assistant Professor, Hanyang university ERICA</p>
          <p>PhD in Security Informatics in Indiana University Bloomington</p>
        </div>
      </div>
      
      <div className="phd-box">
        <h1><FormattedMessage id="phd" /></h1>
        <div className='container'>
          {phds.map((p, idx) => (
            <div className='item'>
              <img className='profile' src={p.image} alt="" />
              <p className='name'>{p.name}</p>
              <p className='email'>{p.email}</p>
              {p.home ? <img onClick={()=>{window.open(homepageUrl)}} className='home' src={home} alt="" />:<></>}
            </div>
          ))
          }
        </div>
      </div>
      
      <div className="master-box">
        <h1><FormattedMessage id="master" /></h1>
        <div className='container'>
          {masters.map((m, idx) => (
            <div className='item'>
              <img className='profile' src={m.image} alt="" />
              <p className='name'>{m.name}</p>
              <p className='email'>{m.email}</p>
              {m.home ? <img onClick={()=>{window.open(homepageUrl)}} className='home' src={home} alt="" />:<></>}
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default Members;