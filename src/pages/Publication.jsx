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
      "author": "Soteris Demetriou, Xiaoyong Zhou, Muhammad Naveed, Yeonjoon Lee, Kan Yuan, XiaoFeng Wang, Carl A Gunter.",
      "title": 'What\'s in Your Dongle and Bank Account? Mandatory and Discretionary Protection of Android External Resources.',
      "conference": 'In NDSS, 2015.',
      "link": 'http://yeonjoonlee.com/publication/2015seacat/',
      "pdf": '',
      "selected": true,
    }, 
    {
      "author": "Kai Chen, Peng Wang, Yeonjoon Lee, XiaoFeng Wang, Nan Zhang, Heqing Huang, Wei Zou, Peng Liu.",
      "title": 'Finding Unknown Malice in 10 Seconds: Mass Vetting for New Threats at the Google-Play Scale.',
      "conference": 'In USENIX Security, 2015.',
      "link": 'http://yeonjoonlee.com/publication/2015massvet/',
      "pdf": '',
      "selected": true,
    }, 
    {
      "author": "Xiaoyong Zhou, Yeonjoon Lee, Nan Zhang, Muhammad Naveed, XiaoFeng Wang.",
      "title": 'The peril of fragmentation: Security hazards in android device driver customizations.',
      "conference": 'In S&P, 2014.',
      "link": 'http://yeonjoonlee.com/publication/2014peril/',
      "pdf": '',
      "selected": true,
    }, 
    {
      "author": "Kai Chen, Xueqiang Wang, Yi Chen, Peng Wang, Yeonjoon Lee, XiaoFeng Wang, Bin Ma, Aohui Wang, Yingjun Zhang, Wei Zou.",
      "title": 'Following devil\'s footprints: Cross-platform analysis of potentially harmful libraries on android and ios.',
      "conference": 'In S&P, 2016.',
      "link": 'http://yeonjoonlee.com/publication/2016fdevfoot/',
      "pdf": '',
      "selected": true,
    }, 
    {
      "author": "Soteris Demetriou, Nan Zhang, Yeonjoon Lee, XiaoFeng Wang, Carl A Gunter, Xiaoyong Zhou, Michael Grace.",
      "title": ' HanGuard: SDN-driven protection of smart home WiFi devices from malicious mobile apps.',
      "conference": 'In WISEC, 2017.',
      "link": 'http://yeonjoonlee.com/publication/2017hanguard/',
      "pdf": '',
      "selected": false,
    },  
    {
      "author": "Tongxin Li, Xiaoyong Zhou, Luyi Xing, Yeonjoon Lee, Muhammad Naveed, XiaoFeng Wang, Xinhui Han.",
      "title": ' Mayhem in the push clouds: Understanding and mitigating security hazards in mobile push-messaging services. ',
      "conference": 'In CCS, 2014.',
      "link": 'http://yeonjoonlee.com/publication/2014mayhem/',
      "pdf": '',
      "selected": true,
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
      "author": "Yi Chen, Wei You, Yeonjoon Lee, Kai Chen, XiaoFeng Wang, Wei Zou.",
      "title": 'Mass Discovery of Android Traffic Imprints through Instantiated Partial Execution. ',
      "conference": 'In CCS, 2017',
      "link": 'http://yeonjoonlee.com/publication/2017netsig/',
      "pdf": '',
      "selected": true,
    }, 
    {
      "author": "Yeonjoon Lee, Xueqiang Wang, Kwangwuk Lee, Xiaojing Liao, XiaoFeng Wang,Tongxin Li, Xianghang Mi.",
      "title": 'Understanding iOS-based Crowdturfing Through Hidden UI Analysis. ',
      "conference": 'In USENIX Security, 2019.',
      "link": 'http://yeonjoonlee.com/publication/2019crowdturfing/',
      "pdf": '',
      "selected": true,
    }, 
    {
      "author": " Yeonjoon Lee, Tongxin Li, Nan Zhang, Soteris Demetriou, Mingming Zha, XiaoFeng Wang, Kai Chen, Xiaoyong Zhou, Xinhui Han, Michael Grace.",
      "title": 'Ghost Installer in the Shadow: Security Analysis of App Installation on Android.',
      "conference": 'In DSN, 2017.',
      "link": 'http://yeonjoonlee.com/publication/2017gia/',
      "pdf": '',
      "selected": false,
    }, 


    {
      "author": "CB Seo, G Lee, Yeonjoon Lee, SH Seo",
      "title": 'Echo-guard: Acoustic-based anomaly detection system for smart manufacturing environments',
      "conference": 'International Conference on Information Security Applications, 64-75, 2021',
      "link": 'https://link.springer.com/chapter/10.1007/978-3-030-89432-0_6',
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
      "author": 'Dahye Song, Taewan Kim, Yeonjoon Lee, Jaeyoung Kim',
      "title": 'Image-Based Artificial Intelligence Technology for Diagnosing Middle Ear Diseases: A Systematic Review ',
      "conference": 'Journal of Clinical Medicine, 2023',
      "link": 'https://www.mdpi.com/2077-0383/12/18/5831',
      "pdf": '',
      "selected": false,
    }, 
    {
      "author": "Cheng'an Wei, Yeonjoon Lee, Kai Chen, Guozhu Meng, Peizhuo Lv",
      "title": 'Aliasing Backdoor Attacks on Pre-trained Models ',
      "conference": '32nd USENIX Security Symposium (USENIX Security 23), 2023',
      "link": 'https://www.usenix.org/conference/usenixsecurity23/presentation/wei-chengan',
      "pdf": '',
      "selected": true,
    }, 
    {
      "author": "Dahye Song, In Sik Song, Jaeyoung Kim, June Choi, Yeonjoon Lee",
      "title": 'Semantic Decomposition and Anomaly Detection of Tympanic Membrane Endoscopic Images ',
      "conference": 'Applied Sciences, 2022',
      "link": 'https://www.mdpi.com/2076-3417/12/22/11677',
      "pdf": '',
      "selected": false,
    }, 
    {
      "author": "Taewan Kim, Sangyeop Kim, Jaeyoung Kim, Yeonjoon Lee, June Choi",
      "title": 'Toward better ear disease diagnosis: A multi-modal multi-fusion model using endoscopic images of the tympanic membrane and pure-tone audiometry ',
      "conference": 'IEEE Access, 2023',
      "link": 'https://ieeexplore.ieee.org/abstract/document/10286540',
      "pdf": '',
      "selected": false,
    }, 
    {
      "author": "Taewan Kim, KyoungHo Oh, Jaeyoung Kim, Yeonjoon Lee, June Choi",
      "title": 'Development of ResNet152 UNet++-based segmentation algorithm for the tympanic membrane and affected areas ',
      "conference": 'IEEE Access, 2023',
      "link": 'https://ieeexplore.ieee.org/abstract/document/10138898',
      "pdf": '',
      "selected": false,
    }, 
    {
      "author": "L Zhang, Y Lee",
      "title": 'Detection Techniques for Chinese Jargon: A Survey ',
      "conference": '한국통신학회 학술대회논문집, 1348-1349, 2023 ',
      "link": 'https://journal-home.s3.ap-northeast-2.amazonaws.com/site/2023w/abs/0274-KCZZE.pdf ',
      "pdf": '',
      "selected": false,
    }, 
    {
      "author": "Taewan Kim, Sangyeop Kim, Jaeyoung Kim, Yeonjoon Lee, June Choi",
      "title": 'Automatic Diagnosis of Chronic Otitis Media with a Dual Neural Network Using Pure-Tone Audiometry and Tympanic Membrane Images ',
      "conference": 'SSRN 4390612 ',
      "link": 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4390612 ',
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
        {/* <p><FormattedMessage id="gub1" /></p> */}
      </div>
      
      <div>
        {data.map((d, idx) => {
          if (d.selected === true) return (
          <BasicBox className="card">
            <p>{highlightText(d.author, 'Yeonjoon Lee')}</p>
            <Orange className='paper-link' onClick={()=>{window.open(d.link)}} >{d.title}</Orange>
            <p>{d.conference}</p>
          </BasicBox>
          )})}
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
              <p>{highlightText(d.author, 'Yeonjoon Lee')}{' '}</p>
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