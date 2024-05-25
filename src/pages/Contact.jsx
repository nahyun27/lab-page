import './styles.scss';
import React, {useState} from "react"
import sha256 from 'crypto-js/sha256';
import { FormattedMessage } from "react-intl";
import Map from 'components/Map';
import styled from 'styled-components';
import {Backdrop, ModifyModal} from 'components/ModifyModal';
import image from 'assets/blossom_back.jpeg';
// const background = React.lazy(() => import ('../assets/background.png'));

function Contact ({ toggle, mode }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pw, setPw] = useState('');
  const handleInputPwd = e => {
    setPw(e.target.value);
  };
  const renderBackdrop = (props) => <Backdrop {...props} />;

  return(
    <Background className="Contact">
      <div className="title-box">
        <h1><FormattedMessage id="Contact" /></h1>
        <p><FormattedMessage id="cont1" /></p>
        <p><FormattedMessage id="cont2" /></p>
      <img className='backImage' src={image} alt="" />
      </div>
      {/* <img className='map' src={map} alt="" /> */}
      <Map></Map>
        <div className='info-box'>
        {/* <div className='row-box'> */}
          <a href="mailto:yeonjoonlee@hanyang.ac.kr" ><p className='info-text'>yeonjoonlee@hanyang.ac.kr</p></a>
          <p onClick={()=>{window.open('https://map.kakao.com/?urlX=463700&urlY=1054951&urlLevel=3&itemId=26973368&q=%ED%95%9C%EC%96%91%EB%8C%80%ED%95%99%EA%B5%90%20%EC%A0%9C4%EA%B3%B5%ED%95%99%EA%B4%80&srcid=26973368&map_type=TYPE_MAP')}} className='info-text'><FormattedMessage id="address" /></p><br />
          <p className='info-text'><FormattedMessage id="address2" /></p>
        {/* </div> */}
        <PointBox onClick={() => setIsModalVisible(true)} className='welcomeBtn'>
          <p >WELCOME DOCS</p>
        </PointBox>
      </div>
      <ModifyModal
        show={isModalVisible}
        onHide={() => setIsModalVisible(false)}
        backdrop={true}
        renderBackdrop={renderBackdrop}
      >
        <GrayBox>
          <div className="register_modal_header">  
            <h2><FormattedMessage id="password" /></h2>
          </div> 
          <div className="pw-box">
            <input
              className="id-input"
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={handleInputPwd}
              value={pw}
            />
          </div>
          <button className='submit' onClick={()=>{sha256(pw) == 'a7c13af5ffdd1b9a224612e3becdcc45f8b127032de8a1c84a1a4346d1afee7b' ? window.open('https://acelab-welcome-docs.notion.site/Welcome-Document-8158c3274ce04455b6bd3d0b6bea6949?pvs=4') : alert('땡~')}}>
            <p>제출</p>
          </button> 
        </GrayBox>
      </ModifyModal>
    </Background>
  );
}

export default Contact;

const GrayBox = styled.div`
  background-color: ${({theme}) => theme.bgColor}; 
`;

const Background = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const PointBox = styled.button`
  width: 150px;
  align-self: center;
  background-color: ${({theme}) => theme.pointColor}; 
`;


const PointDiv = styled.div`
  background-color: ${({theme}) => theme.pointColor}; 
`;