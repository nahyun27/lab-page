import './styles.scss';
import React, {useState} from "react"
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { FormattedMessage } from "react-intl";

import prof from 'assets/members/professor.jpeg';
import home from 'assets/home.png';
import nahyun from 'assets/members/nahyun.png';
import jiwon from 'assets/members/jiwon.jpeg';
import sungju from 'assets/members/sungju.png';
import sungbin from 'assets/members/sungbin.png';
import geonhee from 'assets/members/geonhee.png';
import lixiang from 'assets/members/lixiang.jpeg';
import dahye from 'assets/members/dahye.jpeg';
import hoon from 'assets/members/hoon.png';
import minjae from 'assets/members/minjae.jpeg';
import cheng from 'assets/members/cheng.jpeg';
import gagyeom from 'assets/members/gagyeom.jpeg';
import yonghyun from 'assets/members/yonghyun.jpeg';
import jungmin from 'assets/members/jungmin.png';
import styled from 'styled-components';
import user from 'assets/user.png';

function Members ({ toggle, mode }) {
  const [imgLoading, setImgLoading] = useState(true);
  const homepageUrl = "http://yeonjoonlee.com/"
  const phds = [
    {
      "name": "gagyeom",
      "image": gagyeom,
      "email": 'rkrua5283@hanyang.ac.kr',
      "mbti": '404',
      "interest": 'gagyeomR',
    }, 
    {
      "name": "sungbin",
      "image": sungbin,
      "email": 'pbt98@hanyang.ac.kr',
      "mbti": 'ENFJ',
      "interest": 'sungbinR',
    }, 
    {
      "name": "sungju",
      "image": sungju,
      "email": 'tjdwn77777@hanyang.ac.kr',
      "mbti": 'MATH',
      "interest": 'sungjuR',
    }, 
    {
      "name": "dahye",
      "image": dahye,
      "email": 'dahyesong99@hanyang.ac.kr',
      "mbti": 'ISTJ',
      "interest": 'dahyeR',
    }, 
  ]
  const masters = [
    {
      "name": "jiwon",
      "image": jiwon,
      "email": 'jwhero12@hanyang.ac.kr',
      "mbti": 'ESFJ',
      "interest": 'jiwonR',
    }, 
    {
      "name": "jungmin",
      "image": jungmin,
      "email": 'lsmp12@hanyang.ac.kr',
      "mbti": 'ISFJ',
      "interest": 'jungminR',
    }, 
    {
      "name": "cheng",
      "image": cheng,
      "email": 'zyc0928@hanyang.ac.kr',
      "mbti": 'ESFP',
      "interest": 'chengR',
    }, 
    {
      "name": "lixiang",
      "image": lixiang,
      "email": 'lx913247225@hanyang.ac.kr',
      "mbti": 'ENFP',
      "interest": 'lixiangR',
    }, 
    {
      "name": "yonghyun",
      "image": yonghyun,
      "email": 'yonghyunlee@hanyang.ac.kr',
      "mbti": 'ENTP',
      "interest": 'yonghyunR',
    }, 
    {
      "name": "geonhee",
      "image": geonhee,
      "email": 'ksknh7@hanyang.ac.kr',
      "mbti": 'ICBM',
      "interest": 'geonheeR',
    }, 
    {
      "name": "hoon",
      "image": hoon,
      "email": 'yujihoon89@hanyang.ac.kr',
      "mbti": 'INFP',
      "interest": 'hoonR',
    }, 
    {
      "name": "minjae",
      "image": minjae,
      "email": 'minjae0110@hanyang.ac.kr',
      "mbti": 'ENTP',
      "interest": 'minjaeR',
    }, 
    {
      "name": "nahyun",
      "image": nahyun,
      "email": 'ksknh7@hanyang.ac.kr',
      "mbti": 'ENTJ',
      "interest": 'nahyunR',
    }, 
  ]
  return(
    <div className="Members">
      <div className="prof-box">
        <h1><FormattedMessage id="prof" /></h1>
        <img className='profile' src={prof} alt="" />
        <div className='row-box'>
          <p className='name'><FormattedMessage id="yeonjoon" /></p>
          <img onClick={()=>{window.open(homepageUrl)}} className='home' src={home} alt="" />
        </div>
        <div className='desc'>
          <p><FormattedMessage id="profDesc1" /></p>
          <p><FormattedMessage id="profDesc2" /></p>
        </div>
      </div>
      
      <div className="phd-box">
        <h1><FormattedMessage id="phd" /></h1>
        <div className='container'>
          {phds.map((p, idx) => (
            <div className='item'>
              <img className='profile' src={p.image} alt="" />
              <p className='name'><FormattedMessage id={p.name} /></p>
              <p className='email'>{p.email}</p>
              <div className='row-box'>
                <Tooltip message={p.mbti}>
                  <MBTIBox className='mbti'>MBTI</MBTIBox>
                </Tooltip>
                <Tooltip message={p.interest}>
                  <MBTIBox className='interest'><FormattedMessage id="interest"/></MBTIBox>
                </Tooltip>
              </div>
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
              <p className='name'><FormattedMessage id={m.name} /></p>
              <p className='email'>{m.email}</p>
              {/* <p className='email'>{m.mbti}</p>
              <p className='email'><FormattedMessage id={m.interest}/></p> */}
              <div className='row-box'>
                <Tooltip message={m.mbti}>
                  <MBTIBox className='mbti'>MBTI</MBTIBox>
                </Tooltip>
                <Tooltip message={m.interest}>
                  <MBTIBox className='interest'><FormattedMessage id="interest"/></MBTIBox>
                </Tooltip>
              </div>
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


const Tooltip = ({ children, message }) => {
  return (
    <Container>
      {children}
      <div className="tooltip"><FormattedMessage id={message}/></div>
    </Container>
  );
};


const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: inline-block;

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }
  .mb {
    width: max-content !important;
  }
  .tooltip {
    white-space: pre-line;
    display: none;
    position: absolute;
    bottom: -20%;
    left: 50%;
    background-color: ${({theme}) => theme.tipB}; 
    border: #7689fd solid 2px;
    border-color: ${({theme}) => theme.tipBr}; 
    border-radius: 15px;
    color: ${({theme}) => theme.tipBr}; 
    font-size: 1.2em;
    font-weight: 500;
    height: auto;
    width: max-content;
    letter-spacing: -0.25px;
    margin-top: 9px;
    padding: 10px 13px;
    text-align: center;
    z-index: 100;
    transform: translate(-44%, 110%);
  }

// 말풍선 테두리와 꼬리를 위한 before, after
  .tooltip::after {
    border-color:  ${({theme}) => theme.tipBack}; 
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: -6px;
    width: 0;
    z-index: 1;
  }

  .tooltip::before {
    border-color: ${({theme}) => theme.tipBorder}; 
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: -10px;
    width: 0;
    z-index: 0;
  }
`;



const MBTIBox = styled.div`
  background-color: ${({theme}) => theme.mbtiBack}; 
  border: 1px solid ${({theme}) => theme.mbtiBorder};
  color: ${({theme}) => theme.mbtiBorder}; 
`;