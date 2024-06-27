import React from 'react';
import Map from '../components/welcome/Map';
import Map2 from '../components/welcome/Map2';
import styled from 'styled-components';
import backgroundImage from '../assets/image/background-image.png';
import ImageBox from '../components/welcome/ImageBox';

const WayToCome = () => {
  return (
    <Container>
      <Map />
      <Map2 />
      <ImageBox />
    </Container>
  );
};

export default WayToCome;

const Container = styled.div`
  /* position: relative; */
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  min-height: 100vh;

  &::before {
    content: '';
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2; /* Higher than the overlay */
  }
`;
