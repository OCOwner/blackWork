import styled from "styled-components";
import image from "../../assets/image/image18.jpeg";

const SecondDescription = () => {
    return (
        <Container>
            <Content>
                <Image src={image} />
                <DescriptionContainer>
                    <Title>강남역 착석바</Title>
                    <Contents>
                        저희 BAR11은 강남유일의 클럽형 착석바입니다.<br />
                        급변하는 트렌드에 맞춰 고객님들의 니즈에 발 맞추고<br />
                        기존 모던바 시스템을 탈피하기 위해 연구한 결과 트렌드에<br />
                        맞는 신개념 시스템을 도입했습니다.<br />
                        <br />
                        고객님의 부담은 줄여드리고 즐거움은 제곱으로 증가시키는<br />
                        강남 최고의 착석바 BAR11이 될 것을 약속 드리겠습니다.<br />
                        문의전화: 010-3102-0233<br />
                    </Contents>
                </DescriptionContainer>
            </Content>
        </Container>
    );
}

export default SecondDescription;

const Container = styled.div`
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    background-color: #ffffff;
    padding: 120px;
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: center; /* 가로 중앙 정렬 */
    text-align: center; /* 내용 가운데 정렬 */
`;

const Image = styled.img`
    max-width: 300px;
    height: auto;
    border-radius: 5px;
    object-fit: cover; /* 이미지 비율 유지하며 잘라내기 */
    margin-right: 20px;
`;

const DescriptionContainer = styled.div`
    flex: 1; /* 남는 공간을 모두 사용하도록 설정 */
    background-color: #ffffff;
    font-weight: 900;
    text-align: left; /* 제목과 내용을 왼쪽으로 정렬 */
`;

const Title = styled.p`
    font-size: 2.5rem; /* 더 큰 제목 사이즈 */
    margin-bottom: 20px; /* 제목과 내용 사이 여백 추가 */
`;

const Contents = styled.p`
    font-size: 1.1rem; /* 더 큰 내용 사이즈 */
    line-height: 1.6; /* 더 넓은 줄간격 */
`;
