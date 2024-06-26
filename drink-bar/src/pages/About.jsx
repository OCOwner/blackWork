import React from 'react';
import BestBar from '../components/about/BestBar';
import Discription from '../components/about/Discription';

import AboutTitle from '../components/about/AboutTitle';
import TimeMenu from '../components/about/TimeMenu';
import Menu from '../shared/Menu';
import Call from '../components/about/Call';
import Number from '../components/about/Number';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <AboutTitle />
      <BestBar />
      <Discription />
      <TimeMenu />
      <Menu barName={"강남역 착석바"} eng={"BAR11"}/>
      <Call />
      <Number />
    </Container>
  );
};

export default About;

const Container = styled.div`
  background-color: ${(props) => props.theme.color.background};
`;
