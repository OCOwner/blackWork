import React from 'react';
import { styled } from 'styled-components';
import MainDescription from '../components/home/MainDescription';
import SecondDescription from '../components/home/SecondDescription';
import ThirdDescription from '../components/home/ThirdDescripton';
import FourthDescription from '../components/home/FourthDescroption';
import Menu from '../components/home/Menu';
import QandA from '../components/home/QandA';
import Review from '../components/info/Review';
import HowToGetThere from '../components/home/HowToGetThere';
import Call from '../components/home/Call';

const Home = () => {
  return (
    <Container>
      <MainDescription />
      <SecondDescription />
      <ThirdDescription />
      <FourthDescription />
      <Menu />
      <QandA title={'Q & A'} manager={"신동실장"} number={"010-5691-6578"} />
      <Review />
      <HowToGetThere />
      <Call />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: ${(props) => props.theme.color.background};
`;
