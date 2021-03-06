import React from 'react';
import '../styles/Works.css';
import amazon from '../images/amazon.png';
import slack from '../images/slack.png';
import csClub from '../images/csClub.png';
import Grid from './Grid';
import Fade from 'react-reveal/Fade';

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="works__mockups">
        <div className="works__mockups-heading">
          <div className="works__mockups-heading-div">
            <p>Let's check some of my works</p>
          </div>
        </div>
        <div className="works__mockups-images">
          <Fade bottom delay={300} duration={900} distance="100px">
            <img src={csClub} alt="" />
          </Fade>
          <Fade bottom delay={300} duration={1000}>
            <img src={amazon} alt="" />
          </Fade>
          <Fade bottom delay={300} duration={900} distance="100px">
            <img src={slack} alt="" />
          </Fade>
        </div>
      </div>
      <Grid />
    </div>
  );
};

export default Works;
