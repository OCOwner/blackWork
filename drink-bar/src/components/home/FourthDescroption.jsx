import styled from "styled-components";
import image1 from "../../assets/image/image4.jpeg";
import image2 from "../../assets/image/image5.jpeg";
import backgroundImage from "../../assets/image/place6.jpeg";

const FourthDescription = () => {
    return (
        <Container>
            <Title>강남역 토킹바 가이드</Title>
            <ImageContainer>
            <Image src={image1}/>
            <Image src={image2}/>
            </ImageContainer>
        </Container>
    );
}

export default FourthDescription;

const Container = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover; /* 배경 이미지를 컨테이너에 맞춰서 늘리거나 줄입니다 */
    background-position: center; /* 배경 이미지를 가운데 정렬합니다 */
    background-repeat: no-repeat; /* 배경 이미지를 반복하지 않습니다 */
    color: #ffffff;
    text-align: center; // 타이틀을 가운데 정렬합니다
    padding: 100px;
`;
const Title = styled.h2`
    margin-bottom: 20px;
`;
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px; // 이미지 사이의 간격을 설정합니다
`;
const Image = styled.img`
    border-radius: 5px;
    width: 480px;
    height: 480px;
`;