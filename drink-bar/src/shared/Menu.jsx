import styled from "styled-components";
import image1 from "../../src/assets/image/menu.jpg";
import image2 from "../../src/assets/image/image13.png";
import image3 from "../../src/assets/image/image10.jpeg";
import backgroundImage from "../../src/assets/image/image18.jpeg";

const Menu = ({barName, eng}) => {
    return (
        <Container>
            {barName !== "" ? <BarName>{barName}<br/>{eng}</BarName> : null}
            <Title>MENU</Title>
            <ImageContainer>
                <Image src= {image1} alt="Menu"/>
                <ImageRow>
                    <Image2 src= {image2} alt="servImage" />
                    <Image2 src= {image3} alt="servImage" />
                </ImageRow>
            </ImageContainer>
        </Container>
    );
}
export default Menu;

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
    display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h1`
    text-align: center;
`;
const ImageContainer = styled.div`
`;
const Image = styled.img`
    border-radius: 5px;
    max-width: 60%;
    height: auto;
`;
const ImageRow = styled.div`
    display: flex; // 플렉스 박스로 설정
    justify-content: center; // 내부 요소들을 가로로 가운데 정렬
    margin-top: 20px; // 이미지 간의 간격을 위해 상단 여백 추가
    flex-wrap: wrap; /* 자식 요소들이 한 줄에 다 들어가지 않으면 여러 줄로 나뉘게 설정 */
`;
const Image2 = styled.img`
    width: 100%; /* 부모 컨테이너의 너비를 100%로 채우기 */
    max-width: ${(props) =>
    props.large ? '850px' : '400px'}; /* 이미지의 최대 너비 제한 */
    height: auto; /* 비율을 유지하면서 높이를 자동 조정 */
    border-radius: 20px;
    margin: 10px;
    object-fit: cover; /* 비율을 유지하면서 이미지를 잘 맞춰줌 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 약간의 그림자 효과 추가 */
`;
const BarName = styled.p`
    font-size: 41px;
    text-align: center;
    margin: 0px;
`;


