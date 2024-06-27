import styled from 'styled-components';
import image from '../../assets/image/image12.jpeg';
import backgroundImage from '../../assets/image/place7.jpeg';
import Call from './Call';

const ThirdDescription = () => {
  return (
    <Container>
      <Title>강남토킹바</Title>
      <ContentContainer>
        <TextContainer>
          <LittleTitle>이런 분들에게 추천드립니다.</LittleTitle>
          <Contents>
            <Ment>1. 화류계에 질리신 대표님들</Ment>
            <Ment>2. 매번 색다른 여성들을 만나고 싶으신 분들</Ment>
            <Ment>3. 어린 20대 일반인 여성을 만나고 싶으신 분들</Ment>
            <Ment>
              4. 투잡으로 정말 다양한 직업군의 여성분들이 50~60명씩 항시 대기중
              입니다. 
            </Ment>
            <Ment>
              5. 매번 색다르고 질리지 않는 홀초이스 서비스로 대표님들을
              만족시켜드립니다.
            </Ment>
          </Contents>
        </TextContainer>

        <Image src={image} alt="사진" />
      </ContentContainer>
      <Call />
    </Container>
  );
};

export default ThirdDescription;

// 전체 컨테이너 스타일 설정
const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 부드러운 그림자 추가
  border-radius: 10px; // 모서리를 둥글게 설정
`;

// 컨텐츠 컨테이너 스타일 설정
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1500px;
  margin-top: 2%;
`;

// 텍스트 컨테이너 스타일 설정
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  min-width: 230px;
  text-align: left;
  align-items: flex-start;
  padding: 65px 10px;
  background: rgba(0, 0, 0, 0.6); // 반투명 배경색 추가
  border-radius: 10px; // 모서리를 둥글게 설정
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 부드러운 그림자 추가
  /* @media screen and (max-width: 1023px) {
    
  } */
`;

// 제목 스타일 설정
const Title = styled.p`
  font-size: 50px;
  text-align: center;
  color: #ffeb3b; // 강조된 색상으로 변경
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // 텍스트 그림자 추가
  margin-bottom: 10px; // 하단 여백 추가
`;

// 작은 제목 스타일 설정
const LittleTitle = styled.p`
  font-size: 30px;
  margin-bottom: 1%;
  font-weight: bold;
  color: #ffeb3b; // 강조된 색상으로 변경
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); // 텍스트 그림자 추가
`;

// 본문 내용 스타일 설정
const Contents = styled.div`
  font-size: 20px;
  line-height: 1.5;
  color: #ffffff;
`;

// 멘트 스타일 설정
const Ment = styled.p`
  margin-bottom: 10px; // 각 멘트 간에 약간의 여백 추가
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

// 이미지 스타일 설정
const Image = styled.img`
  max-width: 50%;
  min-width: 250px;
  height: auto;
  border-radius: 10px; // 모서리를 둥글게 설정
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 부드러운 그림자 추가
  @media (max-width: 768px) {
        font-size: 1px;
    }
`;
