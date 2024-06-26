import React from 'react';
import styled from 'styled-components';
import mapImage from '../../assets/image/image6.jpeg';
import Callbtn from '../public/CallBtn';
import Massagebtn from '../public/MassageBtn';

const Map2 = () => {
  return (
    <Container>
      <Image src={mapImage} alt="지도" />
      <Buttons>
        <Callbtn />
        <Massagebtn />
      </Buttons>
    </Container>
  );
};

export default Map2;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;

  max-width: 1200px; /* 최대 너비 제한 */
  margin: 0 auto; /* 중앙 정렬 */
`;

const Image = styled.img`
  width: 100%;
  max-width: 1000px;
  height: auto;
  border-radius: 10px; /* 이미지 둥근 모서리 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;
