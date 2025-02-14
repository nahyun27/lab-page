import React from 'react';
import styled from 'styled-components';
import HighlightText from './HighlightText';

const PaperCard = ({ data, queries }) => {
  return (
    <BasicBox className="paperCard">
      {data.new === 'y' && <NewLabel>NEW</NewLabel>}
      <Orange className='inline paper-link' onClick={() => { data.link && window.open(data.link) }}>
        {data.title}
      </Orange>
      <br/>
      <p className='inline'>{HighlightText({ text: data.author, queries })}</p>
      <p style={{fontStyle: 'italic', color: '#666'}}>{data.conference}</p>
    </BasicBox>
  );
};

export default PaperCard;


const BasicBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor}; 
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12);
  }

  p {
    font-size: 0.9em;
    line-height: 1.4;
  }
`;

const Orange = styled.p`
  font-size: 1em;
  font-weight: bold;
  color: ${({ theme }) => theme.link}; 
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #cc5500;
  }
`;

const NewLabel = styled.span`
  display: inline-block;
  background-color: #ff4d4d;
  color: white;
  font-weight: bold;
  font-size: 0.8em;
  padding: 4px 10px;
  border-radius: 15px;
  margin-bottom: 5px;
  margin-right: 10px;
  text-transform: uppercase;
`;
