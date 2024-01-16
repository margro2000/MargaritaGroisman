import React from 'react';
import './SplitScreen.css';
import IntroText from './IntroText';
import FrontPageImage from './FrontPageImg.png'; // adjust the path as needed

function SplitScreen() {
  return (
    <div className="split-screen">
      <div className="left">
        <IntroText />
      </div>
      <div className="right"></div>
      <img src={FrontPageImage} alt="Front Page" />
    </div>
  );
}

export default SplitScreen;