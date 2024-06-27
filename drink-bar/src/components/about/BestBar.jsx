import React from 'react';
import styled from 'styled-components';

const BestBar = () => {
  return (
    <Container>
      <Title>강남BAR11이 최고인 이유</Title>
      <FeaturesContainer>
        <Element>
          <BestBarTitle>강남 최대규모</BestBarTitle>
          <BestBarDescription>아가씨 퀄리티</BestBarDescription>
        </Element>
        <Element>
          <BestBarTitle>신개념 홀 초이스</BestBarTitle>
          <BestBarDescription>빠른 예약</BestBarDescription>
        </Element>
        <Element>
          <BestBarTitle>계속 상주 가능</BestBarTitle>
          <BestBarDescription>합리적인 가격</BestBarDescription>
        </Element>
      </FeaturesContainer>
    </Container>
  );
};

export default BestBar;

const Container = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.color.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff; /* 흰색 글자 색상 */
  text-align: center; /* 가운데 정렬 */
  @media (max-width: 768px) {
    font-size: 30px; /* 글자 크기 설정 */
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* 가운데 정렬 */
  flex-wrap: wrap;
`;

const Element = styled.div`
  display: flex;
  flex-direction: column; /* 요소들을 위아래로 정렬 */
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.color.background};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 10px;
  border: 3px solid #ffffff;
  border-radius: 20px;
`;

const BestBarTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 5px; /* 타이틀과 디스크립션 사이에 간격 주기 */
`;

const BestBarDescription = styled.p`
  font-size: 14px;
  color: #ffffff;
`;
