import React from 'react';
import { styled } from 'styled-components';
import MainDescription from '../components/home/MainDescription';
import SecondDescription from '../components/home/SecondDescription';
import ThirdDescription from '../components/home/ThirdDescripton';
import FourthDescription from '../components/home/FourthDescroption';
import FifthDescription from '../components/home/FifththDescription';
import QandA from '../components/home/QandA';
import Review from '../components/info/Review';
import HowToGetThere from '../components/home/HowToGetThere';

const Home = () => {
  return (
    <Container>
      <MainDescription />
      <SecondDescription />
      <ThirdDescription />
      <FourthDescription />
      <FifthDescription />
      <QandA title={'Q & A'} manager={"신동실장"} number={"010-5691-6578"} />
      <Review />
      <HowToGetThere />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  /* flex: 1; */
`;
