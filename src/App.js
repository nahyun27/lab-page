import './App.css';
import Main from 'pages/Main';
import Admin from 'pages/admin/Admin';  // Admin 컴포넌트 임포트
import ThemeProvider from 'context/themeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'theme/GlobalStyle';
import { IntlProvider } from "react-intl";
import enUsMsg from "lang/en-US.json";
import koMsg from "lang/ko.json";
import NewsAdmin from 'pages/admin/NewsAdmin';
import PaperAdmin from 'pages/admin/PaperAdmin';

const locale = localStorage.getItem("locale") ?? "ko";
const messages = { 'en-US': enUsMsg, ko: koMsg}[locale];

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider> 
        <IntlProvider locale={locale} messages={messages} key={locale}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Main position="relative" id="Main" />} />
            <Route path="/admin" element={<Admin />}>
              <Route path="/admin/news" element={<NewsAdmin />} />
              <Route path="/admin/paper" element={<PaperAdmin />} />
            </Route>
          </Routes>
        </IntlProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
