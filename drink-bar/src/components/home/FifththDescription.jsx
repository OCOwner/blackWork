import styled from "styled-components";
import image from "../../assets/image/background-image.png"

const FifthDescription = () => {
    return (
        <Container>
            <Title>MENU</Title>
            <Image src= {image} alt="Menu"/>
            <ImageRow>
            <Image2 src= {image} alt="servImage" />
            <Image2 src= {image} alt="servImage" />
            </ImageRow>
        </Container>
    );
}
export default FifthDescription;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.background};
    border-style: solid;
    display: flex; // 플렉스 박스로 설정
    flex-direction: column; // 요소들을 세로로 정렬
    align-items: center; // 내부 요소들을 수직 축에서 가운데 정렬
`;
const Title = styled.h1`
    text-align: center;
`;
const Image = styled.img`
    width: 842px;
    heigth: 900px;
`;
const ImageRow = styled.div`
    display: flex; // 플렉스 박스로 설정
    justify-content: center; // 내부 요소들을 가로로 가운데 정렬
    margin-top: 20px; // 이미지 간의 간격을 위해 상단 여백 추가
`;
const Image2 = styled.img`
    width: 421px;
    heigth: 421px;
    margin-left: 10px;
`;



