import React from 'react';
import styled from 'styled-components';

function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleWrapper className='banselect' onClick={toggle} mode={mode}>
      {mode === 'dark' ? '🌝' : '🌚'}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.p`
  z-index: 99;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;