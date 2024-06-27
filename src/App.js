import './App.css';
import Main from 'pages/Main';
import Admin from 'pages/admin/Admin';
import ThemeProvider from 'context/themeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'theme/GlobalStyle';
import { IntlProvider } from "react-intl";
import enUsMsg from "lang/en-US.json";
import koMsg from "lang/ko.json";
import NewsAdmin from 'pages/admin/NewsAdmin';
import PaperAdmin from 'pages/admin/PaperAdmin';
import { AuthProvider } from 'AuthContext';
import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component

const locale = localStorage.getItem("locale") ?? "ko";
const messages = { 'en-US': enUsMsg, ko: koMsg}[locale];

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <IntlProvider locale={locale} messages={messages} key={locale}>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Main position="relative" id="Main" />} />
              <Route path="/admin" element={<PrivateRoute element={<Admin />} />}>
                <Route path="news" element={<PrivateRoute element={<NewsAdmin />} />} />
                <Route path="paper" element={<PrivateRoute element={<PaperAdmin />} />} />
              </Route>
            </Routes>
          </IntlProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
