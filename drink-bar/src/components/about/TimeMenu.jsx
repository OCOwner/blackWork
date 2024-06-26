import styled from "styled-components";
import image1 from "../../assets/image/place3.jpeg";
import image2 from "../../assets/image/place6.jpeg";
import image3 from "../../assets/image/place7.jpeg";
import menu from "../../assets/image/image8.jpeg";

const TimeMenu = () => {
    return(
        <Container>
            <Title>메뉴와 함께 읽어주시면<br/>감사하겠습니다!</Title>
            <ImageBox>
                <Image src={image1}/>
                <Image src={image2}/>
                <Image src={image3}/>
            </ImageBox>
            <Menu src={menu}/>
        </Container>
    );
}
export default TimeMenu;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.background};
    color: #ffffff;
    display: flex; /* 플렉스 박스로 설정 */
    flex-direction: column; /* 요소들을 세로로 정렬 */
    align-items: center; /* 내부 요소들을 수직 축에서 가운데 정렬 */
    margin-bottom: 10px;
    max-width: 100%;
`;

const Title = styled.p`
    font-size: 2.5rem; /* 기본 폰트 사이즈 */
    text-align: center; /* 타이틀을 가운데 정렬 */
`;

const ImageBox = styled.div`
    display: flex; /* 플렉스 박스로 설정 */
    flex-wrap: wrap; /* 요소들이 한 줄에 다 들어가지 않으면 다음 줄로 넘김 */
    justify-content: center; /* 수평 가운데 정렬 */
    gap: 10px; /* 이미지 간격 설정 */
`;

const Image = styled.img`
    border-radius: 5px;
    max-width: 20%; /* 이미지 최대 너비 설정 */
    height: auto;
`;

const Menu = styled.img`
    /* object-fit: cover; 이미지 비율을 유지하면서 크기를 맞춤 */
    width: 61%;
    height: auto;
    margin-top: 10px;
`;
