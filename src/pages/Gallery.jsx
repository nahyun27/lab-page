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
import food from 'assets/gallery/food.jpeg';
import bread from 'assets/gallery/bread.jpeg';
import ricecake from 'assets/gallery/ricecake.jpeg';
import snowman from 'assets/gallery/snowman.jpeg';
import bear from 'assets/gallery/bear.jpeg';
import pochacco from 'assets/gallery/pochacco.jpeg';
import group from 'assets/gallery/group.png';
import group2 from 'assets/gallery/group2.png';
import snack from 'assets/gallery/snack.jpeg';
import duck from 'assets/gallery/duck.jpeg';
import duck2 from 'assets/gallery/duck2.jpeg';
import duck3 from 'assets/gallery/duck3.jpeg';
import eat from 'assets/gallery/eat.jpeg';
import eat2 from 'assets/gallery/eat2.jpeg';
import lab from 'assets/gallery/lab-image.jpeg';
import b1 from 'assets/gallery/blossom1.jpeg';
import b3 from 'assets/gallery/blossom3.jpeg';
import b_erica from 'assets/gallery/blossom_erica.jpeg';
import b_ace from 'assets/gallery/blossom_ace.jpeg';

function Gallery() {

  const photos1 = [ lab, p1, p2, p19, p20, p3, p14, snack, pochacco]
  const photos2 = [ p8, eat, eat2, group, group2, p13, p21, p22, bear]
  const photos3 = [ b1, b_ace, b_erica, p18, snowman, duck, duck2, duck3, p16,]
  const photos4 = [ p7, food, ricecake, bread, p11, p9, p12, p10, p15,]
  
  return (
    <Background className='Gallery'>
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
    </Background>
  );
}

export default Gallery;

const GrayBox = styled.div`
  background-color: ${({theme}) => theme.bgColor}; 
`;


const Background = styled.div`
  background-color: ${props => props.theme.backgroundColor};
`;