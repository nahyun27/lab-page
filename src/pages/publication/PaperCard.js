import React from 'react';
import styled from 'styled-components';
import HighlightText from './HighlightText';

const PaperCard = ({ data, queries }) => {
  
  return (
    <BasicBox className="paperCard">
      {data.new === 'y' && <span className='newLabel'>NEW</span>}
      <Orange className='paper-link' onClick={() => { data.link !== '' && window.open(data.link) }}>{data.title}</Orange>
      <p>{HighlightText({ text: data.author, queries })}{' '}</p>
      <p>{data.conference}</p>
    </BasicBox>
  );
};

export default PaperCard;

const BasicBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor}; 
`;

const Orange = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.link}; 
`;

