import React from 'react';
import styled from 'styled-components';
import BarImage from '../../assets/image/background-image.png';
import backgroundImage from '../../assets/image/place4.jpeg'; // 배경 이미지 경로
import CallBtn from '../public/CallBtn';
import MassageBtn from '../public/MassageBtn';

const Description = () => {
  return (
    <Container>
      <Element>
        <ImageWrapper>
          <Image alt="사진" src={BarImage} />
        </ImageWrapper>
        <Content>
          <Paragraph>
            기존 로테이션 바, 모던바와는 달리 메인 초이스 홀에서 초이스를 해서
            자리가 끝나실 때까지 계속 여성분이 상주합니다.
          </Paragraph>
          <Paragraph>
            또한 테이블, 부스, 노래방 룸까지 겸비되어 있으며 각종 모임 자리 대관
            행사도 가능한 규모의 업장입니다.
          </Paragraph>
          <Paragraph>
            판매되는 술의 경우에도 원가에 진행하고 있어 좋은 술을 굉장히
            합리적인 가격으로 즐기실 수 있습니다.
          </Paragraph>
          <CallBtn />
          <MassageBtn />
        </Content>
      </Element>
    </Container>
  );
};

export default Description;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const Element = styled.div`
  flex-wrap: wrap; /* Allow items to wrap onto new lines */
  justify-content: center; /* Center items horizontally */

  max-width: 1200px; /* Adjust max-width as needed */
  padding: 20px;
`;

const ImageWrapper = styled.div`
  flex: 0 0 40%; /* Take up 40% of the container width */
  overflow: hidden;
  border-radius: 20px;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px; /* Ensure image corners are rounded */
`;

const Content = styled.div`
  flex: 1; /* Take up remaining space */
  text-align: left; /* Left-align the content */
  color: #ffffff;
  line-height: 1.6;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
