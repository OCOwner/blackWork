import React from 'react';
import styled from 'styled-components';
import Element1Image1 from '../../assets/image/image4.jpeg';
import Element1Image2 from '../../assets/image/image5.jpeg';
import Element2Image1 from '../../assets/image/image11.jpeg';
import Element2Image2 from '../../assets/image/image12.jpeg';
import Element2Image3 from '../../assets/image/image1.gif';

const ImageBox = () => {
  return (
    <Container>
      <Element1>
        <ElementImage src={Element1Image1} alt="BAR11 시뮬레이션" />
        <ElementImage src={Element1Image2} alt="Visiting Tips" />
      </Element1>
      <Element3>
        <ElementImage src={Element2Image3} alt="신동실장2" large />
      </Element3>
      <Element2>
        <ElementImage src={Element2Image1} alt="신동실장1" />
        <ElementImage src={Element2Image2} alt="신동실장2" />
      </Element2>
    </Container>
  );
};

export default ImageBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px; /* 컨테이너 내의 각 요소들 사이의 간격 */
`;

const Element1 = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; /* 이미지 사이의 간격 */
`;

const Element2 = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; /* 이미지 사이의 간격 */
`;

const Element3 = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; /* 이미지 사이의 간격 */
`;

const ElementImage = styled.img`
  width: 100%; /* 부모 컨테이너의 너비를 100%로 채우기 */
  max-width: ${(props) =>
    props.large ? '850px' : '400px'}; /* 이미지의 최대 너비 제한 */
  height: auto; /* 비율을 유지하면서 높이를 자동 조정 */
  border-radius: 20px;
  margin: 10px;
  object-fit: cover; /* 비율을 유지하면서 이미지를 잘 맞춰줌 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 약간의 그림자 효과 추가 */

  @media (max-width: 768px) {
    max-width: 100%; /* 작은 화면에서는 이미지가 화면 너비에 맞게 조정 */
  }
`;
