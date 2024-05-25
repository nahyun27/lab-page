import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const NewsItem = ({ item, idx, onClick }) => (
  <BasicBox onClick={() => onClick(item)} className="item">
    <div className="row">
      <p className="idx">{idx + 1}</p>
      <div className="row-space">
        <p><FormattedMessage id={item.title} /></p>
        <GrayText className="date"> {item.date}</GrayText>
      </div>
    </div>
  </BasicBox>
);

const BasicBox = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
`;

const GrayText = styled.div`
  color: ${({ theme }) => theme.grayColor};
`;

export default NewsItem;
