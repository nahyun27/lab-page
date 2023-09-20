import logo from './logo.svg';
import './App.css';
import Main from 'pages/Main';
import ThemeProvider from 'context/themeProvider'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { GlobalStyle } from 'theme/GlobalStyle';
import { IntlProvider } from "react-intl";
import enUsMsg from "lang/en-US.json";
import koMsg from "lang/ko.json";

const locale = localStorage.getItem("locale") ?? "ko";
const messages = { 'en-US': enUsMsg, ko: koMsg}[locale];

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider> 
        <IntlProvider locale={locale} messages={messages} key={locale}>
          <GlobalStyle />
          <Main position="relative" id="Main" />
        </IntlProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

