import React from 'react';
import { styled } from 'styled-components';
import MainDescription from '../components/home/MainDescription';
import SeatBar from '../components/home/SeatBar';
import TalkBar from '../components/home/TalkBar';
import TalkBarGuide from '../components/home/TalkBarGuide';
import Menu from '../shared/Menu';
import QandA from '../components/home/QandA';
import Review from '../components/info/Review';
import HowToGetThere from '../components/home/HowToGetThere';
import Call from '../components/home/Call';

const Home = () => {
  return (
    <Container>
      <MainDescription />
      <SeatBar />
      <TalkBar />
      <TalkBarGuide />
      <Menu />
      <QandA title={'Q & A'} manager={"신동실장"} number={"010-3102-0233"} />
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
