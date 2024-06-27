import styled from "styled-components";
import CallBtn from "../public/CallBtn";
import MassageBtn from "../public/MassageBtn";
import backgroundImage from "../../assets/image/image17.jpeg";

const MainDescription = () => {
    return (
        <Container>
            <Manager>BAR11 신동실장 010-3102-0233</Manager>
            <ShopName>강남착석바 BAR 11</ShopName>
            <Description>
                강남유일의, 최대 규모의 클럽형 착석바입니다.<br/>
                급변하는 트랜드만큼 고객님들의 니즈에 발맞추고<br/>
                <br/>
                기존의 진부하고 고루했던 시스템을 탈피, 끊임없이 연구한 결과<br/>
                트랜드의 걸맞는 신개념 시스템을 도입했습니다.
            </Description>
            <Call>
                <CallBtn />
                <MassageBtn />
            </Call>
        </Container>
    );
};

export default MainDescription;

const Container = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover; /* 배경 이미지를 컨테이너에 맞춰서 늘리거나 줄입니다 */
    background-position: center; /* 배경 이미지를 가운데 정렬합니다 */
    background-repeat: no-repeat; /* 배경 이미지를 반복하지 않습니다 */
    color: #ffffff;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center; /* 수직 방향 가운데 정렬 */
    align-items: center; /* 수평 방향 가운데 정렬 */
    text-align: center; /* 텍스트 가운데 정렬 */
    height: 95vh; /* 화면 전체 높이에 맞추기 위해 */
`;

const Manager = styled.p`
    font-size: 24px;
 
`;

const ShopName = styled.p`
    font-size: 94px;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 50px;
    }
`;

const Description = styled.p`
    font-size: 17px;
    margin-bottom: 20px; /* 텍스트 아래 여백 추가 */
`;

const Call = styled.div`
    display: flex;
    flex-direction: row; /* 자식 요소들을 가로로 배열 */
    margin-top: 20px; /* 위쪽 여백 추가 */
`;
