import React from 'react';
import { styled } from 'styled-components';
import MainDescription from '../components/home/MainDescription'
import SecondDescription from '../components/home/SecondDescription';
import ThirdDescription from '../components/home/ThirdDescroption';

const Home = () => {
  return (
    <Container>
      <MainDescription />
      <SecondDescription />
      <ThirdDescription />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  /* flex: 1; */
`;
