import styled from "styled-components";
import image from "../../assets/image/image12.jpeg";
import backgroundImage from "../../assets/image/place7.jpeg";
import Call from "./Call.jsx";

const ThirdDescription = () => {
  return (
    <Container>
      <Title>강남토킹바</Title>
      <ContentContainer>
        <TextContainer>
          <LittleTitle>이런 분들에게<br />추천드립니다.</LittleTitle>
          <Contents>
            1. 화류계에 질리신 대표님들<br />
            <br />
            2. 매번 색다른 여성들을 만나고 싶으신 분들<br />
            <br />
            3. 어린 20대 일반인 여성을 만나고 싶으신 분들<br />
            <br />
            투잡으로 정말 다양한 직업군의 여성분들이 50~60명씩 항시 대기중<br />
            입니다. 매번 색다르고 질리지 않는 홀초이스 서비스로 대표님들을<br /> 
            만족시켜드립니다.
          </Contents>
          <CallContainer>
            <Call />
          </CallContainer>
        </TextContainer>
        <Image src={image} alt="사진" />
      </ContentContainer>
    </Container>
  );
};

export default ThirdDescription;

// 전체 컨테이너 스타일 설정
const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover; /* 배경 이미지를 컨테이너에 맞춰서 늘리거나 줄입니다 */
  background-position: center; /* 배경 이미지를 가운데 정렬합니다 */
  background-repeat: no-repeat; /* 배경 이미지를 반복하지 않습니다 */
  color: #ffffff;
  padding: 2%; // 내부 여백 설정
  text-align: center; // 자식 요소들을 가운데 정렬
`;

// 컨텐츠 컨테이너 스타일 설정
const ContentContainer = styled.div`
  display: flex; // 내부 요소를 플렉스 박스로 배치
  justify-content: center; // 내부 요소들을 가운데 정렬
  align-items: center; // 세로 축에서 가운데 정렬
  margin-top: 2%; // 위쪽 여백 설정
`;

// 텍스트 컨테이너 스타일 설정
const TextContainer = styled.div`
  display: flex; // 내부 요소를 플렉스 박스로 배치
  flex-direction: column; // 세로로 요소들을 배열
  max-width: 50%; // 최대 너비 설정
  text-align: left; // 텍스트를 왼쪽 정렬
  align-items: flex-start; // 세로 방향에서 왼쪽 정렬
  position: relative; // 상대 위치 설정
  padding-left: 2%; // 내부 여백 설정
`;

// 제목 스타일 설정
const Title = styled.h1`
  font-size: 24px; // 글꼴 크기 설정
  margin: 0 auto; // 가운데 정렬을 위한 외부 여백 설정
`;

// 작은 제목 스타일 설정
const LittleTitle = styled.h2`
  font-size: 30x; // 글꼴 크기 설정
  margin-bottom: 1%; // 하단 여백 설정
  margin-left: 25%; // 왼쪽 여백 설정
`;

// 본문 내용 스타일 설정
const Contents = styled.p`
  font-size: 16px; // 글꼴 크기 설정
  line-height: 1.5; // 줄 간격 설정
`;

// 이미지 스타일 설정
const Image = styled.img`
  width: 50%; // 너비 설정
  height: auto; // 높이 자동 설정
  margin-left: 2%; // 왼쪽 여백 설정
`;

// 콜 컨테이너 스타일 설정
const CallContainer = styled.div`
  margin-top: 20px; // 위쪽 여백 설정
  margin-left: -130px; // 왼쪽 여백 설정, LittleTitle과 맞추기 위해 조정
`;
