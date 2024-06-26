import React from 'react';
import MainDescription from '../components/home/MainDescription'
import { styled } from 'styled-components';
import SecondDescription from '../components/home/SecondDescription';

const Home = () => {
  return (
    <Container>
      <MainDescription />
      <SecondDescription />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  /* flex: 1; */
`;
