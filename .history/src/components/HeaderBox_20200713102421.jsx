import React from 'react';
import './HeaderBox.scss';

const HeaderBox = () => {
  return (
    <header className="header box">
      <div className="header__left">
        <div className="header__photo">
          <img className="header__photo-img" src="./vCard - About_files/main-photo.svg" alt="Ronald Robertson" />
        </div>
        <div className="header__base-info">
          <h4 className="title titl--h4">Ronald Robertson</h4>
        <div className="status">Creative Director</div>
          <ul className="header__social">
              <li><a href="https://www.facebook.com/"><i className="font-icon icon-facebook1"></i></a></li>
              <li><a href="https://www.twitter.com/"><i className="font-icon icon-twitter1"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="font-icon icon-instagram1"></i></a></li>
          </ul>
        </div>
      </div>
    <div className="header__right">
        <ul className="header__contact">
          <li><span className="overhead">Email</span>ronald@example.com</li>
        <li><span className="overhead">Phone</span>+1 (070) 123–8459</li>
      </ul>
      <ul className="header__contact">
          <li><span className="overhead">Birthday</span>17 March, 1995</li>
        <li><span className="overhead">Location</span>San-Francisco, USA</li>
      </ul>
    </div>
    </header>
  );
}

export default HeaderBox;

