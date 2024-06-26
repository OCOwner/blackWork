
import styled from "styled-components";
import image from "../../assets/image/background-image.png"

const SecondDescription = () => {
    return (
            <Container>
                <Image src={image}/>
                <DiscriptionContainer>
                <Title>강남역 착석바</Title>
                <Contents>
                    저희 BAR11은 강남유일의 클럽형 착석바입니다.<br />
                    급변하는 트렌드에 맞춰 고객님들의 니즈에 발 맞추고<br />
                    기존 모던바 시스템을 탈피하기 위해 연구한 결과 트렌드에<br />
                    맞는 신개념 시스템을 도입했습니다.<br />
                    <br />
                    고객님의 부담은 줄여드리고 즐거움은 제곱으로 증가시키는<br />
                    강남 최고의 착석바 BAR11이 될 것을 약속 드리겠습니다.<br />
                    문의전화: 010-2073-9779<br />
                </Contents>
                </DiscriptionContainer>
            </Container>
    );
}

export default SecondDescription;

const Container = styled.div`
    border-style: solid;
    display: flex;
    align-items: flex-start;
    padding: 20px;
`;

const Image = styled.img`
    width: 480px;
    height: 480px;
    margin-right: 20px;
`;

const DiscriptionContainer= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.p`
    font-size: 39px;
`;

const Contents = styled.p`
    font-size: 17px;
    line-height: 1.5;
`;
