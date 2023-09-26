import './styles.scss';
import React, {useState} from "react"
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";
import {Backdrop, ModifyModal} from 'components/ModifyModal';

function Publication ({ toggle, mode }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const renderBackdrop = (props) => <Backdrop {...props} />;
  const [imgLoading, setImgLoading] = useState(true);
  const data = [
    {
      "author": "Yeonjoon Lee, Yue Zhao, Jiutian Zeng, Kwangwuk Lee, Nan Zhang, Faysal Hossain Shezan, Yuan Tian, Kai Chen, XiaoFeng Wang.",
      "title": 'Using Sonar for Liveness Detection to Protect Smart Speakers Against Remote Attackers.',
      "conference": 'Accepted in the UbiComp 2020 / ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), 2020.',
      "link": 'http://yeonjoonlee.com/publication/2020speakersonar/',
      "pdf": '',
      "selected": false,
    }, 
    {
      "author": "Yeonjoon Lee, Xueqiang Wang, Xiaojing Liao, XiaoFeng Wang.",
      "title": 'Understanding Illicit UI in iOS apps Through Hidden UI Analysis. ',
      "conference": 'Accepted in the IEEE Transactions on Dependable and Secure Computing (TDSC), 2019.',
      "link": 'http://yeonjoonlee.com/publication/2019chameleon/',
      "pdf": '',
      "selected": false,
    }, 
    {
      "author": "Yeonjoon Lee, Xueqiang Wang, Kwangwuk Lee, Xiaojing Liao, XiaoFeng Wang,Tongxin Li, Xianghang Mi.",
      "title": 'Understanding iOS-based Crowdturfing Through Hidden UI Analysis. ',
      "conference": 'In USENIX Security, 2019.',
      "link": 'http://yeonjoonlee.com/publication/2019crowdturfing/',
      "pdf": '',
      "selected": false,
    }, 
    {
      "author": "Yeonjoon Lee, Yue Zhao, Jiutian Zeng, Kwangwuk Lee, Nan Zhang, Faysal Hossain Shezan, Yuan Tian, Kai Chen, XiaoFeng Wang.",
      "title": 'Using Sonar for Liveness Detection to Protect Smart Speakers Against Remote Attackers.',
      "conference": 'Accepted in the UbiComp 2020 / ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), 2020.',
      "link": 'http://yeonjoonlee.com/publication/2020speakersonar/',
      "pdf": '',
      "selected": false,
    }, 
    {
      "author": "Yeonjoon Lee, Yue Zhao, Jiutian Zeng, Kwangwuk Lee, Nan Zhang, Faysal Hossain Shezan, Yuan Tian, Kai Chen, XiaoFeng Wang.",
      "title": 'Using Sonar for Liveness Detection to Protect Smart Speakers Against Remote Attackers.',
      "conference": 'Accepted in the UbiComp 2020 / ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), 2020.',
      "link": 'http://yeonjoonlee.com/publication/2020speakersonar/',
      "pdf": '',
      "selected": false,
    }, 
    {
      "author": "Yeonjoon Lee, Yue Zhao, Jiutian Zeng, Kwangwuk Lee, Nan Zhang, Faysal Hossain Shezan, Yuan Tian, Kai Chen, XiaoFeng Wang.",
      "title": 'Using Sonar for Liveness Detection to Protect Smart Speakers Against Remote Attackers.',
      "conference": 'Accepted in the UbiComp 2020 / ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), 2020.',
      "link": 'http://yeonjoonlee.com/publication/2020speakersonar/',
      "pdf": '',
      "selected": false,
    }, 
    {
      "author": "Yeonjoon Lee, Yue Zhao, Jiutian Zeng, Kwangwuk Lee, Nan Zhang, Faysal Hossain Shezan, Yuan Tian, Kai Chen, XiaoFeng Wang.",
      "title": 'Using Sonar for Liveness Detection to Protect Smart Speakers Against Remote Attackers.',
      "conference": 'Accepted in the UbiComp 2020 / ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), 2020.',
      "link": 'http://yeonjoonlee.com/publication/2020speakersonar/',
      "pdf": '',
      "selected": false,
    }, 
  ]

  const highlightText = (text, query) => {
    if (query !== '' && text.includes(query)) {
      const parts = text.split(new RegExp(`(${query})`, 'gi'));
  
      return (
        <>
          {parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
              <span key={index}>{part}</span>
            ) : (
              part
            ),
          )}
        </>
      );
    }
  
    return text;
  };

  return(
    <GrayBox className="Publication">
      <div className="title-box">
        <h1><FormattedMessage id="publications" /></h1>
      </div>
      
      <div className="card-list">
        {data.map((d, idx) => (
          <BasicBox className="card">
            <p>{highlightText(d.author, 'Yeonjoon Lee')}</p>
            <Orange className='paper-link' onClick={()=>{window.open(d.link)}} >{d.title}</Orange>
            <p>{d.conference}</p>
          </BasicBox>
          ))
          }
          <p onClick={() => setIsModalVisible(true)} className='more'>see more ▶</p>
      </div>

      <ModifyModal
        show={isModalVisible}
        onHide={() => setIsModalVisible(false)}
        backdrop={true}
        renderBackdrop={renderBackdrop}
      >
      <GrayBox>
        <div className="register_modal_header">  
          <h2><FormattedMessage id="publications" /></h2>
        </div>
          <div className="card-list">
          {data.map((d, idx) => (
            <BasicBox className="card">
              <p>{highlightText(d.author, 'Yeonjoon Lee')}</p>
              <Orange className='paper-link' onClick={()=>{window.open(d.link)}} >{d.title}</Orange>
              <p>{d.conference}</p>
            </BasicBox>
            ))
            }
        </div>
      </GrayBox>
      </ModifyModal>

    </GrayBox>
  );
}

export default Publication;



const GrayBox = styled.div`
  background-color: ${({theme}) => theme.bgColor}; 
`;

const BasicBox = styled.div`
  background-color: ${({theme}) => theme.backgroundColor}; 
`;

const Orange = styled.p`
  color: ${({theme}) => theme.link}; 
`;