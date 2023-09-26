import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black"}}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black",}}
//       onClick={onClick}
//     />
//   );
// }

// const SamplePrevArrow = (props) => {
//   const { className, onClick } = props
//   return (
//       <div 
//           className={className}
//           onClick={onClick}
//       >
//       </div>
//   );
// }


export default function CardSlider({photos}) {
  const settings = {
    centerMode: true,
    dots: true,
    centerPadding: "0px",
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  return (
    <Container>
      <Slider {...settings}>
				{photos.map((p) =>(
          <div className='cardCover'>
            <img className="card" src={p} alt="" />
          </div>
        ))}
      </Slider>
    </Container>
  );
}

const Container = styled.div`
	width: 400px;
  height: 400px;
  .slick-slide div { //슬라이더  컨텐츠
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .slick-dots {
    margin-top: 30px;
    .slick-active {
      button::before {
        color: ${({theme}) => theme.textColor}; 
      }
    }
    button::before {
      color: #888;
    }
  }
  .slick-prev, .slick-next {
    font-size: 15px !important;
    }
    
    .slick-prev:before, .slick-next:before  {
    content: '' !important;
    }
`;
