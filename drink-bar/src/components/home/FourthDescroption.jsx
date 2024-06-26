import styled from "styled-components";
import image1 from "../../assets/image/background-image.png"
import image2 from "../../assets/image/background-image.png"
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
    border-style: solid;
    text-align: center; // 타이틀을 가운데 정렬합니다
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
    width: 480px;
    height: 480px;
`;