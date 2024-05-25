import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import key from 'assets/key.png';

const RecruitingSection = () => (
  <GrayBox>
    <div className='intro'>
      <img className='profile' src={key} alt="" />
      <div>
        <p className='title'><FormattedMessage id="recruitingTitle" /></p>
        <p><FormattedMessage id="recruitingDesc" /></p>
      </div>
    </div>
  </GrayBox>
);

const GrayBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  background-color: rgba(0,0,0,0.5);
`;

export default RecruitingSection;