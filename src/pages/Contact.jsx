import './styles.scss';
import React, {useState} from "react"
import mail from 'assets/mail.png';
import { FormattedMessage } from "react-intl";
import location from 'assets/location.png';
import Map from 'components/Map';
import styled from 'styled-components';
// const background = React.lazy(() => import ('../assets/background.png'));

function Contact ({ toggle, mode }) {

  return(
    <Background className="Contact">
      <div className="title-box">
        <h1><FormattedMessage id="Contact" /></h1>
        <p><FormattedMessage id="cont1" /></p>
        <p><FormattedMessage id="cont2" /></p>
      </div>
      {/* <img className='map' src={map} alt="" /> */}
      <Map></Map>
      <div className='info-box'>
        <div className='row-box'><a href="mailto:yeonjoonlee@hanyang.ac.kr" ><img className='icon' src={mail} alt="" /></a><p>yeonjoonlee@hanyang.ac.kr</p></div>
        <div className='row-box2'><img onClick={()=>{window.open('https://map.kakao.com/?urlX=463700&urlY=1054951&urlLevel=3&itemId=26973368&q=%ED%95%9C%EC%96%91%EB%8C%80%ED%95%99%EA%B5%90%20%EC%A0%9C4%EA%B3%B5%ED%95%99%EA%B4%80&srcid=26973368&map_type=TYPE_MAP')}} className='icon' src={location} alt="" />
          <div><p><FormattedMessage id="address" /></p><br /><p><FormattedMessage id="address2" /></p></div>
        </div>
      </div>
    </Background>
  );
}

export default Contact;


const Background = styled.div`
  background-color: ${props => props.theme.backgroundColor};
`;