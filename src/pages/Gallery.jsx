import React, { useState, useEffect,} from 'react';
import { FormattedMessage } from "react-intl";
import CardSlider from 'components/CardSlider';
import styled from 'styled-components';
import p1 from 'assets/gallery/001.jpeg';
import p2 from 'assets/gallery/002.jpeg';
import p3 from 'assets/gallery/003.jpeg';
import p4 from 'assets/gallery/004.jpeg';
import p5 from 'assets/gallery/005.jpeg';
import p6 from 'assets/gallery/006.jpeg';
import p7 from 'assets/gallery/007.jpeg';
import p8 from 'assets/gallery/008.jpeg';
import p9 from 'assets/gallery/009.jpeg';
import p10 from 'assets/gallery/010.jpeg';
import p11 from 'assets/gallery/011.jpeg';
import p12 from 'assets/gallery/012.jpeg';
import p13 from 'assets/gallery/013.png';
import p14 from 'assets/gallery/014.jpeg';
import p15 from 'assets/gallery/015.jpeg';
import p16 from 'assets/gallery/016.jpeg';
import p17 from 'assets/gallery/017.jpeg';
import p18 from 'assets/gallery/018.png';
import p19 from 'assets/gallery/019.jpeg';
import p20 from 'assets/gallery/020.jpeg';
import p21 from 'assets/gallery/021.jpeg';
import p22 from 'assets/gallery/022.png';

function Gallery() {

  const photos1 = [ p1, p19, p20, p3, p14, ]
  const photos2 = [ p7, p9, p11, p12, p2]
  const photos3 = [ p8, p18, p15, p16, p17]
  const photos4 = [ p13, p21, p22, p6, p10,]
  
  return (
    <div className='Gallery'>
      <div className='title-box'>
        <h1><FormattedMessage id="Gallery" /></h1> 
        <p><FormattedMessage id="gal1" /></p>
        <p><FormattedMessage id="gal2" /></p>
      </div>
      <div className='row-box'>
        <div className='cardBox'>
          {/* <h2> Single Item</h2> */}
          <CardSlider photos={photos1}/>
        </div>
        <div className='cardBox'>
          {/* <h2> Single Item</h2> */}
          <CardSlider photos={photos2}/>
        </div>
      </div>

      <div className='row-box'>
        <div className='cardBox'>
          <CardSlider photos={photos3}/>
        </div>
        <div className='cardBox'>
          <CardSlider photos={photos4}/>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

const GrayBox = styled.div`
  background-color: ${({theme}) => theme.bgColor}; 
`;