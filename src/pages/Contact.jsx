import './styles.scss';
import React, { useState } from "react";
import CryptoJS from 'crypto-js';
import { FormattedMessage } from "react-intl";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Backdrop, ModifyModal } from 'components/ModifyModal';
import { useAuth } from 'AuthContext';  // AuthContext 가져오기
import image from 'assets/blossom_back.jpeg';
import sha256 from 'crypto-js/sha256';
import Map from 'components/Map';

const encryptedLink = 'U2FsdGVkX18HyXrFWHdGOkOwkQOl87+lK7pLpDOG+dJisfaRsR++xQnM8nXUSwhMKpIghcZ3B6UxJ6GkXAxSSgnSP8V57+qfA3PdlpmfmCWq8dU/MTBfNhoXOX/TYrUiG9JkVv+FC3ztep0foU/5dA==';

function Contact({ toggle, mode }) {
  const navigate = useNavigate();
  const { login } = useAuth();  // login 함수 가져오기
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pw, setPw] = useState('');

  const handleInputPwd = e => {
    setPw(e.target.value);
  };

  const renderBackdrop = (props) => <Backdrop {...props} />;
  
  const handleAdminAccess = () => {
    const hash = CryptoJS.SHA256(pw).toString(CryptoJS.enc.Hex);
    if (hash === 'a7c13af5ffdd1b9a224612e3becdcc45f8b127032de8a1c84a1a4346d1afee7b') { 
      login();
      navigate('/admin');
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const handleSubmit = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedLink, pw);
      const originalLink = bytes.toString(CryptoJS.enc.Utf8);
      if (originalLink) {
        window.open(originalLink);
      } else {
        alert('땡~');
      }
    } catch (e) {
      alert('땡~');
    }
  };

  return (
    <Background className="Contact">
      <div className="title-box">
        <h1><FormattedMessage id="Contact" /></h1>
        <p><FormattedMessage id="cont1" /></p>
        <p><FormattedMessage id="cont2" /></p>
        <img className='backImage' src={image} alt="" />
      </div>
      <Map></Map>
      <div className='info-box'>
        <a href="mailto:yeonjoonlee@hanyang.ac.kr"><p className='info-text'>yeonjoonlee@hanyang.ac.kr</p></a>
        <p onClick={() => { window.open('https://map.kakao.com/?urlX=463700&urlY=1054951&urlLevel=3&itemId=26973368&q=%ED%95%9C%EC%96%91%EB%8C%80%ED%95%99%EA%B5%90%20%EC%A0%9C4%EA%B3%B5%ED%95%99%EA%B4%80&srcid=26973368&map_type=TYPE_MAP') }} className='info-text'><FormattedMessage id="address" /></p><br />
        <p className='info-text'><FormattedMessage id="address2" /></p>
        <PointBox onClick={() => {setIsModalVisible(true); }} className='welcomeBtn'>
          <p>WELCOME DOCS</p>
        </PointBox>
        {/* <PointBox onClick={() => {setIsModalVisible2(true);}} className='welcomeBtn'>
          <p>ADMIN PAGE</p>
        </PointBox> */}
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
          <button className='submit' onClick={handleSubmit}>
            <p>제출</p>
          </button>
        </GrayBox>
      </ModifyModal>
      <ModifyModal
        show={isModalVisible2}
        onHide={() => setIsModalVisible2(false)}
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
          <button className='submit' onClick={()=>handleAdminAccess()}>
            <p>제출</p>
          </button>
        </GrayBox>
      </ModifyModal>
    </Background>
  );
}

export default Contact;

const GrayBox = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
`;

const Background = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const PointBox = styled.button`
  width: 150px;
  align-self: center;
  background-color: ${({ theme }) => theme.pointColor};
`;
