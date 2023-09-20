import './styles.scss';
import React, {useState} from "react"
import ai from 'assets/ai.jpg';
import mobile from 'assets/mobile.jpg';
import system from 'assets/system.jpg';
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";

function Research () {
  const [imgLoading, setImgLoading] = useState(true);
  const data = [
    {
      "name": "ai",
      "img": ai,
      "desc": 'aiDesc',
    },
    {
      "name": "mobile",
      "img": mobile,
      "desc": 'mobileDesc',
    }, 
    {
      "name": "system",
      "img": system,
      "desc": 'systemDesc',
    },
    // {
    //   "name": "Cyber Crime",
    //   "img": crime,
    //   "desc": 'Cybercrime is a rapidly growing issue in the digital age. Our lab conducts research to analyze patterns of cybercrime and explore preventive measures. By providing new tools and insights, our research aids in investigations and prevention efforts, enhancing security in the digital realm.',
    // },
  ]
  return(
    <GrayBox className= "Research">
      <div className="title-box">
        <h1> <FormattedMessage id="research" /></h1>
        <p> <FormattedMessage id="researchDesc1"/></p>
          <br/>
        <p> <FormattedMessage id="researchDesc2"/></p>
      </div>
      <div className="top__contents">
        {data.map((d, idx) => (
          <BasicBox className="card">
            <h1><FormattedMessage id={d.name}/></h1>
            <img className='image' src={d.img} alt="" /> 
            <p><FormattedMessage id={d.desc}/></p>
          </BasicBox>
          ))
          }
      </div>
    </GrayBox>
  );
}

export default Research;


const GrayBox = styled.div`
  background-color: ${({theme}) => theme.bgColor}; 
`;

const BasicBox = styled.div`
  background-color: ${({theme}) => theme.backgroundColor}; 
`;