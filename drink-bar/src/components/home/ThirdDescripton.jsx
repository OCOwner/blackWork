import styled from "styled-components";
import image from "../../assets/image/background-image.png";

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
            </TextContainer>
            <Image src={image} alt="Background" />
        </ContentContainer>
    </Container>
  );
};
export default ThirdDescription;

// 전체 컨테이너 스타일 설정
const Container = styled.div`
    background-color: ${(props) => props.theme.color.background};
    color: #ffffff;
    padding: 2%; // 상대적인 내부 여백 설정
    border-style: solid; // 테두리 스타일 설정
    text-align: center; // 자식 요소들을 가운데 정렬
`;

// 컨텐츠 컨테이너 스타일 설정
const ContentContainer = styled.div`
    display: flex; // 내부 요소를 플렉스 박스로 배치
    justify-content: center; // 내부 요소들을 가운데 정렬
    align-items: flex-start; // 세로 축에서 위로 정렬
    margin-top: 2%; // 상대적인 위쪽 여백 설정
`;

// 텍스트 컨테이너 스타일 설정
const TextContainer = styled.div`
    display: flex; // 내부 요소를 플렉스 박스로 배치
    flex-direction: column; // 세로로 요소들을 배열
    max-width: 50%; // 최대 너비 설정
    text-align: left; // 텍스트를 왼쪽 정렬
`;

// 제목 스타일 설정
const Title = styled.h1`
    font-size: 24px; // 글꼴 크기 설정
    margin: 0 auto; // 가운데 정렬을 위한 외부 여백 설정
`;

// 작은 제목 스타일 설정
const LittleTitle = styled.h2`
    font-size: 20px; // 글꼴 크기 설정
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
