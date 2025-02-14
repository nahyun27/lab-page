import './styles.scss';
import '../styles.scss';
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";
import PaperCard from './PaperCard';
import PublicationsModal from './PublicationsModal';

function Publication({ toggle, mode }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [data, setData] = useState([]);

  const BASE_URL = "https://192.168.0.166:443";
  // const BASE_URL = "https://166.104.245.67:443";

  // useEffect(() => {
  //   fetchPapers();
  // }, []);

  // const fetchPapers = () => {
  //   axios
  //     .get(`${BASE_URL}/api/papers`)
  //     .then((res) => {
  //       setData(res.data.reverse());
  //     })
  //     .catch((err) => console.error("Network Error: ", err));
  // };

  
  const memberList = [
    'Yeonjoon Lee', "Gagyeom Kim", "Taewan Kim", "Sungbin Park",
    "Sungju Yun", "Dahye Song", "Jiwon Han", "Jungmin Lee",
    "Zhen Yicheng", "Li Xiang", "Younghyun Lee", "Gunhee Cho",
    "Hoon Ji", "Minjae Kang", "Nahyun Kim", "Juyeon Kim"
  ];
  const data = [
    {
      "id": 27, 
      "author": "Dahye Song, Younghan Chung, Jaeyoung Kim, June Choi, and Yeonjoon Lee",
      "title": 'Cooperative GAN: Automated Tympanic Membrane Anomaly Detection Using a Cooperative Observation Network.',
      "conference": 'computer methods and programs in biomedicine, 2025',
      "link": '',
      "new": 'y',
      "selected": true,
    },
    {
      "id": 26, 
      "author": "Dahye Song, Taewan Kim, Yeonjoon Lee and Jaeyoung Kim",
      "title": 'Image-Based Artificial Intelligence Technology for Diagnosing Middle Ear Diseases: A Systematic Review.',
      "conference": 'Journal of Clinical Medicine, 2023',
      "link": 'https://doi.org/10.3390/jcm12185831',
      "new": 'y',
      "selected": true,
    },
    {
      "id": 25, 
      "author": "Dahye Song, In Sik Song, Jaeyoung Kim, June Choi, and Yeonjoon Lee",
      "title": 'Semantic Decomposition and Anomaly Detection of Tympanic Membrane Endoscopic Images.',
      "conference": 'Applied sciences, 2022',
      "link": 'https://doi.org/10.3390/app122211677',
      "new": 'y',
      "selected": true,
    },
    {
      "id": 24, 
      "author": "Jiwon Han, Byungmin Choi, Jae Young Kim, Yeonjoon Lee",
      "title": 'BO-CLAHE enhancing neonatal chest X-ray image quality for improved lesion classification',
      "conference": 'Scientific Reports, 2025',
      "link": 'https://www.nature.com/articles/s41598-025-88451-0',
      "new": 'y',
      "selected": true,
    },
    {
      "id": 23, 
      "author": "Sungbin Park, Changbae Seo, Xueqiang Wang, Yeonjoon Lee, Seung-Hyun Seo",
      "title": 'Exclusively In-Store: Acoustic Location Authentication for Stationary Business Devices',
      "conference": 'Journal of Network and Computer Applications, 2024',
      "link": 'https://www.sciencedirect.com/science/article/pii/S1084804524002054',
      "new": 'y',
      "selected": true,
    },
    {
      "id": 22, 
      "author": "Minjae Kang, Sungbin Park, and Yeonjoon Lee ",
      "title": 'A Survey on Satellite Communication System Security',
      "conference": 'MDPI Sensors, 2024',
      "link": 'https://www.mdpi.com/1424-8220/24/9/2897',
      "new": 'y',
      "selected": true,
    },
    {
      "id": 21, 
      "author": "Sungbin Park, Xueqiang Wang, Chen Kai, and Yeonjoon Lee ",
      "title": 'STATION: Gesture-based Authentication for Voice Interfaces',
      "conference": 'IEEE Internet of Things Journal, 2024',
      "link": 'https://ieeexplore.ieee.org/document/10485205',
      "new": 'y',
      "selected": true,
    },
    {
      "id": 20,
      "author": "Chang Yue, Chen Zhong, Kai Chen, Zhiyu Zhang, Yeonjoon Lee ",
      "title": 'DARKFLEECE: Probing the Dark Side of Android Subscription Apps ',
      "conference": '33rd USENIX Security Symposium, 2024',
      "link": 'https://www.usenix.org/conference/usenixsecurity24/presentation/yue',
      "new": 'y',
      "selected": true,
    },
    {
      "id": 19,
      "author": "Taewan Kim, Sangyeop Kim, Jaeyoung Kim, Yeonjoon Lee, June Choi ",
      "title": 'Automatic Diagnosis of Chronic Otitis Media with a Dual Neural Network Using Pure-Tone Audiometry and Tympanic Membrane Images ',
      "conference": 'SSRN 4390612 ',
      "link": 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4390612 ',
      "new": '',
      "selected": false,
    },
    {
      "id": 18,
      "author": "L Zhang, Y Lee",
      "title": 'Detection Techniques for Chinese Jargon: A Survey ',
      "conference": '한국통신학회 학술대회논문집, 1348-1349, 2023 ',
      "link": 'https://journal-home.s3.ap-northeast-2.amazonaws.com/site/2023w/abs/0274-KCZZE.new ',
      "new": '',
      "selected": false,
    },
    {
      "id": 17,
      "author": "Taewan Kim, KyoungHo Oh, Jaeyoung Kim, Yeonjoon Lee, June Choi ",
      "title": 'Development of ResNet152 UNet++-based segmentation algorithm for the tympanic membrane and affected areas ',
      "conference": 'IEEE Access, 2023',
      "link": 'https://ieeexplore.ieee.org/abstract/document/10138898',
      "new": '',
      "selected": false,
    },
    {
      "id": 16,
      "author": "Taewan Kim, Sangyeop Kim, Jaeyoung Kim, Yeonjoon Lee, June Choi ",
      "title": 'Toward better ear disease diagnosis: A multi-modal multi-fusion model using endoscopic images of the tympanic membrane and pure-tone audiometry ',
      "conference": 'IEEE Access, 2023',
      "link": 'https://ieeexplore.ieee.org/abstract/document/10286540',
      "new": '',
      "selected": false,
    },
    {
      "id": 15,
      "author": "Dahye Song, In Sik Song, Jaeyoung Kim, June Choi, Yeonjoon Lee ",
      "title": 'Semantic Decomposition and Anomaly Detection of Tympanic Membrane Endoscopic Images ',
      "conference": 'Applied Sciences, 2022',
      "link": 'https://www.mdpi.com/2076-3417/12/22/11677',
      "new": '',
      "selected": false,
    },
    {
      "id": 14,
      "author": "Cheng'an Wei, Yeonjoon Lee, Kai Chen, Guozhu Meng, Peizhuo Lv ",
      "title": 'Aliasing Backdoor Attacks on Pre-trained Models ',
      "conference": '32nd USENIX Security Symposium (USENIX Security 23), 2023',
      "link": 'https://www.usenix.org/conference/usenixsecurity23/presentation/wei-chengan',
      "new": '',
      "selected": true,
    },
    {
      "id": 13,
      "author": 'Dahye Song, Taewan Kim, Yeonjoon Lee, Jaeyoung Kim ',
      "title": 'Image-Based Artificial Intelligence Technology for Diagnosing Middle Ear Diseases: A Systematic Review ',
      "conference": 'Journal of Clinical Medicine, 2023',
      "link": 'https://www.mdpi.com/2077-0383/12/18/5831',
      "new": '',
      "selected": false,
    },
    {
      "id": 12,
      "author": "CB Seo, G Lee, Yeonjoon Lee, SH Seo ",
      "title": 'Echo-guard: Acoustic-based anomaly detection system for smart manufacturing environments',
      "conference": 'International Conference on Information Security Applications, 64-75, 2021',
      "link": 'https://link.springer.com/chapter/10.1007/978-3-030-89432-0_6',
      "new": '',
      "selected": false,
    }, 
    {
      "id": 11,
      "author": "Yeonjoon Lee, Yue Zhao, Jiutian Zeng, Kwangwuk Lee, Nan Zhang, Faysal Hossain Shezan, Yuan Tian, Kai Chen, XiaoFeng Wang.",
      "title": 'Using Sonar for Liveness Detection to Protect Smart Speakers Against Remote Attackers.',
      "conference": 'Accepted in the UbiComp 2020 / ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), 2020.',
      "link": 'http://yeonjoonlee.com/publication/2020speakersonar/',
      "new": '',
      "selected": false,
    }, 
    {
      "id": 10,
      "author": "Yeonjoon Lee, Xueqiang Wang, Xiaojing Liao, XiaoFeng Wang ",
      "title": 'Understanding Illicit UI in iOS apps Through Hidden UI Analysis. ',
      "conference": 'Accepted in the IEEE Transactions on Dependable and Secure Computing (TDSC), 2019.',
      "link": 'http://yeonjoonlee.com/publication/2019chameleon/',
      "new": '',
      "selected": false,
    }, 
    {
      "id": 9,
      "author": "Yeonjoon Lee, Xueqiang Wang, Kwangwuk Lee, Xiaojing Liao, XiaoFeng Wang,Tongxin Li, Xianghang Mi.",
      "title": 'Understanding iOS-based Crowdturfing Through Hidden UI Analysis. ',
      "conference": 'In USENIX Security, 2019.',
      "link": 'http://yeonjoonlee.com/publication/2019crowdturfing/',
      "new": '',
      "selected": true,
    }, 
    {
      "id": 8,
      "author": " Yeonjoon Lee, Tongxin Li, Nan Zhang, Soteris Demetriou, Mingming Zha, XiaoFeng Wang, Kai Chen, Xiaoyong Zhou, Xinhui Han, Michael Grace.",
      "title": 'Ghost Installer in the Shadow: Security Analysis of App Installation on Android.',
      "conference": 'In DSN, 2017.',
      "link": 'http://yeonjoonlee.com/publication/2017gia/',
      "new": '',
      "selected": false,
    }, 
    {
      "id": 7,
      "author": "Yi Chen, Wei You, Yeonjoon Lee, Kai Chen, XiaoFeng Wang, Wei Zou.",
      "title": 'Mass Discovery of Android Traffic Imprints through Instantiated Partial Execution. ',
      "conference": 'In CCS, 2017',
      "link": 'http://yeonjoonlee.com/publication/2017netsig/',
      "new": '',
      "selected": true,
    }, 
    {

      "id": 6,
      "author": "Soteris Demetriou, Nan Zhang, Yeonjoon Lee, XiaoFeng Wang, Carl A Gunter, Xiaoyong Zhou, Michael Grace.",
      "title": ' HanGuard: SDN-driven protection of smart home WiFi devices from malicious mobile apps.',
      "conference": 'In WISEC, 2017.',
      "link": 'http://yeonjoonlee.com/publication/2017hanguard/',
      "new": '',
      "selected": false,
    },  
    {
      "id": 5,
      "author": "Kai Chen, Xueqiang Wang, Yi Chen, Peng Wang, Yeonjoon Lee, XiaoFeng Wang, Bin Ma, Aohui Wang, Yingjun Zhang, Wei Zou.",
      "title": 'Following devil\'s footprints: Cross-platform analysis of potentially harmful libraries on android and ios.',
      "conference": 'In S&P, 2016.',
      "link": 'http://yeonjoonlee.com/publication/2016fdevfoot/',
      "new": '',
      "selected": true,
    }, 
    {
      "id": 4,
      "author": "Soteris Demetriou, Xiaoyong Zhou, Muhammad Naveed, Yeonjoon Lee, Kan Yuan, XiaoFeng Wang, Carl A Gunter.",
      "title": 'What\'s in Your Dongle and Bank Account? Mandatory and Discretionary Protection of Android External Resources.',
      "conference": 'In NDSS, 2015.',
      "link": 'http://yeonjoonlee.com/publication/2015seacat/',
      "new": '',
      "selected": true,
    }, 
    {
      "id": 3,
      "author": "Kai Chen, Peng Wang, Yeonjoon Lee, XiaoFeng Wang, Nan Zhang, Heqing Huang, Wei Zou, Peng Liu.",
      "title": 'Finding Unknown Malice in 10 Seconds: Mass Vetting for New Threats at the Google-Play Scale.',
      "conference": 'In USENIX Security, 2015.',
      "link": 'http://yeonjoonlee.com/publication/2015massvet/',
      "new": '',
      "selected": true,
    }, 
    {
      "id": 2,
      "author": "Xiaoyong Zhou, Yeonjoon Lee, Nan Zhang, Muhammad Naveed, XiaoFeng Wang.",
      "title": 'The peril of fragmentation: Security hazards in android device driver customizations.',
      "conference": 'In S&P, 2014.',
      "link": 'http://yeonjoonlee.com/publication/2014peril/',
      "new": '',
      "selected": true,
    }, 
    {
      "id": 1,
      "author": "Tongxin Li, Xiaoyong Zhou, Luyi Xing, Yeonjoon Lee, Muhammad Naveed, XiaoFeng Wang, Xinhui Han.",
      "title": ' Mayhem in the push clouds: Understanding and mitigating security hazards in mobile push-messaging services. ',
      "conference": 'In CCS, 2014.',
      "link": 'http://yeonjoonlee.com/publication/2014mayhem/',
      "new": '',
      "selected": true,
    }, 
  ]

  return (
    <GrayBox className="Publication">
      <div className="title-box">
        <h1><FormattedMessage id="publications" /></h1>
      </div>
      <div className="paper-list">
        {data.filter(d => d.selected).map((d) => (
          <PaperCard key={d.id} data={d} queries={memberList} />
        ))}
        <p onClick={() => setIsModalVisible(true)} className="more">see more ▶</p>
      </div>
      <PublicationsModal
        isVisible={isModalVisible}
        onHide={() => setIsModalVisible(false)}
        data={data}
        queries={memberList}
      />
    </GrayBox>
  );
}

export default Publication;

const GrayBox = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
`;