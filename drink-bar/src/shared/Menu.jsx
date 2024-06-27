import React from 'react';
import styled from 'styled-components';
import image1 from '../../src/assets/image/menu.jpg';
import image2 from '../../src/assets/image/image13.png';
import image3 from '../../src/assets/image/image10.jpeg';
import backgroundImage from '../../src/assets/image/image18.jpeg';

const Menu = ({ barName, eng }) => {
  return (
    <Container>
      {/* {barName !== '' ? <BarName>{eng}</BarName> : null} */}
      <Title>MENU</Title>
      <ImageContainer>
        <Image src={image1} alt="Menu" />
        <ImageRow>
          <Image2 src={image2} alt="servImage" />
          <Image2 src={image3} alt="servImage" />
        </ImageRow>
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; /* 가운데 정렬을 위해 */
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  padding: 10px;
  @media (max-width: 1028px) {
    width: calc(
      100% - 20px
    ); /* 모바일 화면에서 이미지가 전체 너비를 차지하도록 */
  }
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const Image2 = styled.img`
  width: calc(50% - 20px); /* 두 이미지가 한 줄에 나란히 있도록 */
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  margin: 18px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: calc(
      100% - 20px
    ); /* 모바일 화면에서 이미지가 전체 너비를 차지하도록 */
  }
`;

export default Menu;
