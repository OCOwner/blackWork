import styled from "styled-components";
import image1 from "../../assets/image/menu.jpg";
import image2 from "../../assets/image/image13.png";
import image3 from "../../assets/image/image8.jpeg";
import backgroundImage from "../../assets/image/image18.jpeg";

const FifthDescription = () => {
    return (
        <Container>
            <Title>MENU</Title>
            <Image src= {image1} alt="Menu"/>
            <ImageRow>
            <Image2 src= {image2} alt="servImage" />
            <Image2 src= {image3} alt="servImage" />
            </ImageRow>
        </Container>
    );
}
export default FifthDescription;

const Container = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover; /* 배경 이미지를 컨테이너에 맞춰서 늘리거나 줄입니다 */
    background-position: center; /* 배경 이미지를 가운데 정렬합니다 */
    background-repeat: no-repeat; /* 배경 이미지를 반복하지 않습니다 */
    color: #ffffff;
    display: flex; // 플렉스 박스로 설정
    flex-direction: column; // 요소들을 세로로 정렬
    align-items: center; // 내부 요소들을 수직 축에서 가운데 정렬
    padding-bottom:20px;
`;
const Title = styled.h1`
    text-align: center;
`;
const Image = styled.img`
    max-width: 842px;
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



