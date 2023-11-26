import './styles.scss';
import React, {useState} from "react"
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { FormattedMessage } from "react-intl";

import prof from 'assets/members/professor.jpeg';
import home from 'assets/home.png';
import nahyun from 'assets/members/nahyun.png';
import nahyunB from 'assets/members/nahyunB.jpeg';
import jiwon from 'assets/members/jiwon.jpeg';
import taewan from 'assets/members/taewan.jpeg';
import jiwonB from 'assets/members/jiwonB.jpeg';
import sungju from 'assets/members/sungju.png';
import sungbin from 'assets/members/sungbin.png';
import gunhee from 'assets/members/gunhee.png';
import gunheeB from 'assets/members/gunheeB.jpeg';
import lixiang from 'assets/members/lixiang.png';
import dahye from 'assets/members/dahye.jpeg';
import dahyeB from 'assets/members/dahyeB.jpeg';
import hoon from 'assets/members/hoon.png';
import minjae from 'assets/members/minjae.jpeg';
import cheng from 'assets/members/cheng.jpeg';
import gagyeom from 'assets/members/gagyeom.jpeg';
import yonghyun from 'assets/members/yonghyun.jpeg';
import yonghyunB from 'assets/members/yonghyunB.png';
import jungmin from 'assets/members/jungmin.png';
import jungminB from 'assets/members/jungminB.png';
import styled from 'styled-components';

function Members ({ toggle, mode }) {
  const [isListHover, setIsListHover] = useState(false);
  const [number, setNumber] = useState(-1);
  const [isListHover2, setIsListHover2] = useState(false);
  const [number2, setNumber2] = useState(-1);
  const homepageUrl = "http://yeonjoonlee.com/"
  const phds = [
    {
      "name": "gagyeom",
      "image": gagyeom,
      "imageB": gagyeom,
      "email": 'rkrua5283@hanyang.ac.kr',
      "mbti": 'ISFJ',
      "interest": 'gagyeomR',
    }, 
    {
      "name": "sungbin",
      "image": sungbin,
      "imageB": sungbin,
      "email": 'pbt98@hanyang.ac.kr',
      "mbti": 'ENFJ',
      "interest": 'sungbinR',
    }, 
    {
      "name": "sungju",
      "image": sungju,
      "imageB": sungju,
      "email": 'tjdwn77777@hanyang.ac.kr',
      "mbti": 'MATH',
      "interest": 'sungjuR',
    }, 
    {
      "name": "dahye",
      "image": dahye,
      "imageB": dahyeB,
      "email": 'dahyesong99@hanyang.ac.kr',
      "mbti": 'ISTJ',
      "interest": 'dahyeR',
    }, 
  ]
  const masters = [
    {
      "name": "jiwon",
      "image": jiwon,
      "imageB": jiwonB,
      "email": 'jwhero12@hanyang.ac.kr',
      "mbti": 'ESFJ',
      "interest": 'jiwonR',
    }, 
    {
      "name": "jungmin",
      "image": jungmin,
      "imageB": jungminB,
      "email": 'lsmp12@hanyang.ac.kr',
      "mbti": 'ISFJ',
      "interest": 'jungminR',
    }, 
    {
      "name": "cheng",
      "image": cheng,
      "imageB": cheng,
      "email": 'zyc0928@hanyang.ac.kr',
      "mbti": 'ESFP',
      "interest": 'chengR',
    }, 
    {
      "name": "lixiang",
      "image": lixiang,
      "imageB": lixiang,
      "email": 'lx913247225@hanyang.ac.kr',
      "mbti": 'ENFP',
      "interest": 'lixiangR',
    }, 
    {
      "name": "yonghyun",
      "image": yonghyun,
      "imageB": yonghyunB,
      "email": 'yonghyunlee@hanyang.ac.kr',
      "mbti": 'ENTP',
      "interest": 'yonghyunR',
    }, 
    {
      "name": "gunhee",
      "image": gunhee,
      "imageB": gunheeB,
      "email": 'no1gun2@hanyang.ac.kr',
      "mbti": 'ICBM',
      "interest": 'gunheeR',
    }, 
    {
      "name": "hoon",
      "image": hoon,
      "imageB": hoon,
      "email": 'yujihoon89@hanyang.ac.kr',
      "mbti": 'INFP',
      "interest": 'hoonR',
    }, 
    {
      "name": "minjae",
      "image": minjae,
      "imageB": minjae,
      "email": 'minjae0110@hanyang.ac.kr',
      "mbti": 'ENTP',
      "interest": 'minjaeR',
    }, 
    {
      "name": "nahyun",
      "image": nahyun,
      "imageB": nahyunB,
      "email": 'ksknh7@hanyang.ac.kr',
      "mbti": 'ENTJ',
      "interest": 'nahyunR',
    }, 
    {
      "name": "taewan",
      "image": taewan,
      "imageB": taewan,
      "email": 'taewankim778@hanyang.ac.kr',
      "mbti": 'ENTJ',
      "interest": 'taewanR',
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
              <img 
                onMouseOver={() => {setIsListHover2(true); setNumber2(idx)}}
                onMouseOut={() => setIsListHover2(false)}
                className='profile' src={isListHover2 && number2 === idx? p.imageB : p.image} alt="" />
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
              <img  
              onMouseOver={() => {setIsListHover(true); setNumber(idx)}}
              onMouseOut={() => setIsListHover(false)}
              className='profile' src={isListHover && number === idx? m.imageB : m.image} alt="" />
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
    background-color: ${({theme}) => theme.tipB}; 
    border: #7689fd solid 2px;
    border-color: ${({theme}) => theme.tipBr}; 
    border-radius: 15px;
    color: ${({theme}) => theme.tipBr};
  }

// 말풍선 테두리와 꼬리를 위한 before, after
  .tooltip::after {
    border-color:  ${({theme}) => theme.tipBack}; 
  }

  .tooltip::before {
    border-color: ${({theme}) => theme.tipBorder}; 

  }
`;



const MBTIBox = styled.div`
  background-color: ${({theme}) => theme.mbtiBack}; 
  border: 1px solid ${({theme}) => theme.mbtiBorder};
  color: ${({theme}) => theme.mbtiBorder}; 
`;