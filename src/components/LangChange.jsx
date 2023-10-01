import { useState, useEffect} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import styled from 'styled-components';

function LangChange() {
  const [locale, setLocale] = useState(localStorage.getItem("locale") ?? "ko");
  const intl = useIntl();


  useEffect(()=>{
    localStorage.setItem("locale", locale);
    console.log(localStorage.getItem("locale"))
  }, [locale]);

  return (
    <form onSubmit={() => localStorage.setItem("locale", locale)}>
        <LangWapper 
        className='banselect' 
        onClick={() => setLocale(locale === "ko" ? 'en-US' : 'ko')} ><FormattedMessage
          id="option"
        /></LangWapper>
    </form>
  );
}

export default LangChange;

const LangWapper = styled.button`
  z-index: 999999;
  cursor: pointer;
  // width: 45px;
  background-color: transparent;
  border-width: 0;
  font-weight: 700;
  display: flex;
  color: ${({theme}) => theme.textColor}; 
  // margin-right: -20px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin: 0;
  padding: 0;
`;