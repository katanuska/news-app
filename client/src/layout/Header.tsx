import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  //TODO: add linear gradient and image
  //TODO: strech to full page width
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h2 className="homepage-link">Make MyNews your homepage</h2>
          <h3 className="header-text">
            Every day discover what’s trending on the internet!
          </h3>
        </div>
        <div className="header-right">
          <h3 className="dismiss-text">No, Thanks</h3>
          <button className="get-button big-button light">GET</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
