// Home.js
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import './styles.scss';
import '../styles.scss';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import NewsList from './NewsList';
import RecruitingSection from './RecruitingSection';
import i1 from 'assets/news/i1.png';
import i2 from 'assets/news/i2.png';
import i3 from 'assets/news/i3.png';
import i4 from 'assets/news/i4.png';
import i5 from 'assets/news/i5.png';
import { Backdrop, ModifyModal } from '../../components/ModifyModal';

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState({});
  const renderBackdrop = (props) => <Backdrop {...props} />;

  const data = [
    {
      title: 't1',
      date: '2024.03.29',
      contents: 'c1',
      image: i1,
    },
    {
      title: 't2',
      date: '2024.03.29',
      contents: 'c2',
      image: i2, 
    },
    {
      title: 't3',
      date: '2024.03.29',
      contents: 'c3',
      image: i3, 
    },
    {
      title: 't4',
      date: '2024.03.29',
      contents: 'c4',
      image: i4, 
    },
    {
      title: 't5',
      date: '2024.05.21',
      contents: 'c5',
      image: i5,
    },
  ];

  const clickHandler = (data) => {
    setSelected(data);
    setIsModalVisible(true);
  };

  return (
    <>
      <BgDiv className='Home'>
        {/* <div className="black"></div> */}
        <div className="background"></div>
        <div className="title-box">
          <h1><FormattedMessage id="welcome" /></h1>
          <p><FormattedMessage id="intro1" /></p>
          <p><FormattedMessage id="intro2" /></p>
        </div>
        <NewsList newsData={data} onItemClick={clickHandler} />
        <RecruitingSection />
        <Link to="Contact" spy={true} smooth={true}>
          <PointBox className='contact_button'>
            <FormattedMessage id="button" />
          </PointBox>
        </Link>
      </BgDiv>
      <ModifyModal
        show={isModalVisible}
        onHide={() => setIsModalVisible(false)}
        backdrop={true}
        renderBackdrop={renderBackdrop}
      >
        <GrayBox2 className='textBox'>
          <div className="register_modal_header">
            <h2>ACE NEWS</h2>
          </div>
          <div className='newsBox'>
            <NewsModalBox className="textBox">
              <p className="title"><FormattedMessage id={selected.title} /></p>
              <GrayText className="date"> {selected.date}</GrayText>
              <p className="contents"><FormattedMessage id={selected.contents} /></p>
              {selected.image &&
                <img className='newsImg' src={selected.image} alt="" />}
            </NewsModalBox>
          </div>
        </GrayBox2>
      </ModifyModal>
    </>
  );
}

const BgDiv = styled.div`
  // background-color: ${({ theme }) => theme.bgColor};
`;
const NewsModalBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const GrayText = styled.div`
  color: ${({ theme }) => theme.grayColor};
`;

const GrayBox2 = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
`;

const PointBox = styled.button`
  background-color: ${({ theme }) => theme.pointColor};
`;

export default Home;
