import React from 'react';
import BestBar from '../components/about/BestBar';
import Discription from '../components/about/Discription';

import AboutTitle from '../components/about/AboutTitle';
import TimeMenu from '../components/about/TimeMenu';
import Menu from '../components/home/Menu';
import Call from '../components/about/Call';
import Number from '../components/about/Number';

const About = () => {
  return (
    <div>
      <AboutTitle />
      <BestBar />
      <Discription />
      <TimeMenu />
      <Menu barName={"강남역 착석바"} eng={"BAR11"}/>
      <Call />
      <Number />

    </div>
  );
};

export default About;
