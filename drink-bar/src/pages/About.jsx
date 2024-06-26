import React from 'react';
import AboutTitle from '../components/about/AboutTitle';
import TimeMenu from '../components/about/TimeMenu';
import Menu from '../components/home/Menu';
import Call from '../components/about/Call';
import Number from '../components/about/Number';

const About = () => {
  return (
    <div>
      <AboutTitle />
      <TimeMenu />
      <Menu barName={"강남역 착석바"} eng={"BAR11"}/>
      <Call />
      <Number />
    </div>
  );
};

export default About;
