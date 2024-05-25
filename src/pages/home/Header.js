import React from 'react';
import { FormattedMessage } from 'react-intl';

const Header = () => (
  <div className="title-box">
    <h1><FormattedMessage id="welcome" /></h1>
    <p><FormattedMessage id="intro1" /></p>
    <p><FormattedMessage id="intro2" /></p>
  </div>
);

export default Header;
