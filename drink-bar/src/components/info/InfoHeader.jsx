import React from 'react';
import styled from 'styled-components';
import barberImage from '../../assets/image/barber-9.png';
import backgroundImage from '../../assets/image/background-image.png'; // 배경 이미지 경로

const InfoHeader = () => {
  return (
    <Container>
      <Overlay />
      <Title>강남 착석바</Title>
      <Subtitle>BAR11 CLUB</Subtitle>
      <ImageContainer>
        <Line />
        <StyledImage src={barberImage} alt="BAR11 CLUB" />
        <Line />
      </ImageContainer>
      <QA>Q & A</QA>
    </Container>
  );
};

export default InfoHeader;

const Container = styled.div`
  /* position: relative; //부모 요소 기준으로 자식 요소 위치 지정 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #333333;
  padding: 20px;
  background-image: url(${backgroundImage}); // 배경 이미지 설정
  background-size: cover; // 이미지를 컨테이너 크기에 맞춤
  background-repeat: no-repeat; // 이미지 반복 안 함
  background-position: center; // 배경 이미지 가운데 정렬
`;

const Overlay = styled.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  margin-top: 80px;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경 색상 설정 */
  filter: blur(8px); //배경 이미지 흐리게 처리
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 65px;
  color: white; // 배경 이미지와 대비되는 색상 설정
  /* z-index: 1; 텍스트가 오버레이 위에 나타나도록 설정 */
`;

const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 40px;
  color: white; // 배경 이미지와 대비되는 색상 설정
  /* z-index: 1; 텍스트가 오버레이 위에 나타나도록 설정 */
`;

const ImageContainer = styled.div`
  position: relative; /* 자식 요소의 위치 설정을 위해 부모 요소도 relative로 설정 */
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  gap: 20px;
  /* z-index: 1; 이미지가 오버레이 위에 나타나도록 설정 */
`;

const StyledImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 10px;
`;

const Line = styled.div`
  height: 2px;
  background-color: black;
  flex-grow: 1;
  max-width: 300px;
`;

const QA = styled.p`
  font-weight: 900;
  font-size: 65px;
  color: white; // 배경 이미지와 대비되는 색상 설정
  /* z-index: 1; 텍스트가 오버레이 위에 나타나도록 설정 */
`;
