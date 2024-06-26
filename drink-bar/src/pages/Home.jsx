import React from 'react';
import { styled } from 'styled-components';
import MainDescription from '../components/home/MainDescription';
import SecondDescription from '../components/home/SecondDescription';
import ThirdDescription from '../components/home/ThirdDescripton';
import FourthDescription from '../components/home/FourthDescroption';
import FifthDescription from '../components/home/FifththDescription';
import QandA from '../components/home/QandA';

const Home = () => {
  return (
    <Container>
      <MainDescription />
      <SecondDescription />
      <ThirdDescription />
      <FourthDescription />
      <FifthDescription />
      <QandA title={'Q & A'} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  /* flex: 1; */
`;
