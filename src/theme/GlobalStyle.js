import {createGlobalStyle} from 'styled-components'; // 글로벌 스타일 적용을 도와주는 styled-components내장 메서드
import reset from 'styled-reset';
import notoLight from 'fonts/NotoSansKR-Light.woff';
import notoRegular from 'fonts/NotoSansKR-Regular.woff';
import notoMedium from 'fonts/NotoSansKR-Medium.woff';
import notoBold from 'fonts/NotoSansKR-Bold.woff';
import notoThin from 'fonts/NotoSansKR-Thin.woff';
// import notoLight from 'fonts/NotoSansKR-Light.woff';

export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: "Noto Sans KR";
		font-style: normal;
		font-weight: lighter;
		src: url(${notoThin}) format("woff");
	}
	
	@font-face {
		font-family: "Noto Sans KR";
		font-style: normal;
		font-weight: 100;
		src: url(${notoLight}) format("woff");
	}

	@font-face {
		font-family: "Noto Sans KR";
		font-style: normal;
		font-weight: normal;
		src: url(${notoRegular}) format("woff");
	}

	@font-face {
		font-family: "Noto Sans KR";
		font-style: normal;
		font-weight: 500;
		src: url(${notoMedium}) format("woff");
	}

	@font-face {
		font-family: "Noto Sans KR";
		font-style: normal;
		font-weight: bold;
		src: url(${notoBold}) format("woff");
	}

	${reset}

	html, body {
		font-family: "Noto Sans KR", sans-serif;
	}
	body{
		background: ${({theme}) => theme.backgroundColor}; 
		color: ${({theme}) => theme.textColor}; 
	}

  li, a {
    color: ${({theme}) => theme.textColor}; 
  }
  span{
		background: ${({theme}) => theme.span}; 
  }

`;