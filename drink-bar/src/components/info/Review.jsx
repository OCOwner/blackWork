import React from 'react';
import styled from 'styled-components';
import stars from '../../assets/image/stars.png';

const Review = () => {
  const contant = [
    {
      title: '"처음보는 착석바"',
      value:
        '매번 화류계쪽 친구들은 질렸는데 이곳은 일반인 여성분들이 많아 새롭고 좋았네요. 홀초이스라는 처음보는 착석바 개념이 새롭네요.',
    },
    {
      title: '"예약없는 대기"',
      value:
        '기존의 로테이션바랑 달리 메인 초이스 홀에서 초이스했는데 자리 끝날때 까지 같이 상주하는게 맘에 들었습니다.',
    },
    {
      title: '"단체모임에 좋음"',
      value:
        '부스랑 노래방 룸이 있어 사업하시는 지인분들 자리하는데 모임 장소로 적합한 것 같습니다. 석구실장 통해 서비스 많이 받고갑니다.',
    },
    {
      title: '"거품없는 가격"',
      value:
        '강남에서 제일 크다고 해서 가격이 걱정됐는데 메뉴판에 있는 그대로, 원가로 끊어주시니 부담없는 합리적인 가격으로 놀다 갑니다. 다음에 또 석구실장님께 연락 드리곘습니다.',
    },
  ];

  return (
    <Container>
      <Header>
        <ClubName>GANGNAM BAR11 CLUB</ClubName>
        <Title>Review</Title>
      </Header>
      <Contants>
        {contant.map((item, index) => (
          <ReviewCard key={index}>
            <img src={stars} alt="별점" />
            <ReviewTitle>{item.title}</ReviewTitle>
            <ReviewValue>{item.value}</ReviewValue>
          </ReviewCard>
        ))}
      </Contants>
    </Container>
  );
};

export default Review;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const ClubName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #555;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  font-weight: 900;
  color: #ffffff;
`;

const Contants = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

const ReviewCard = styled.div`
  flex: 1 1 calc(25% - 20px); /* 각 카드가 4개가 될 때까지 최대 25% 차지 */
  min-width: 250px; /* 각 카드의 최소 너비 */
  max-width: 300px; /* 각 카드의 최대 너비 */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const ReviewTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #444;
`;

const ReviewValue = styled.p`
  font-size: 16px;
  color: #666;
`;
