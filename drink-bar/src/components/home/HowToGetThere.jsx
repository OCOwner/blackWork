import styled from "styled-components";
import image from "../../assets/image/image6.jpeg";

const HowToGetThere = () => {
    return (
        <Container>
            <ContentWrapper>
                <HowToText>
                    <HowToTextTitle>오시는 길</HowToTextTitle>
                    <HowToTextContents>
                        오시기 전 편하게 연락 주세요.<br />
                        가격 거품없는 강남 최고 규모의 서비스로<br />
                        편안히 모시겠습니다.<br />
                        주소 서울특별시 서초구 서초대로 78길 46 (지하1층)<br />
                        예약전화 010-3102-0233 신동실장<br />
                        카톡문의 11sd1<br />
                    </HowToTextContents>
                </HowToText>
                <HowToImg>
                    <HowToImgImage src={image} alt="강남역에서 오시는 길 이미지" />
                </HowToImg>
            </ContentWrapper>
        </Container>
    );
};

export default HowToGetThere;

const Container = styled.div`
    background-color: ${(props) => props.theme.color.background};
    color: #ffffff;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HowToText = styled.div`
    flex: 1;
    margin-right: 20px;
`;

const HowToTextTitle = styled.p`
    font-size: 40px;
    margin-bottom: 10px;
`;

const HowToTextContents = styled.p`
    font-size: 1em;
    line-height: 1.5;
`;

const HowToImg = styled.div`
    flex: 1;
    text-align: center;
`;

const HowToImgImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
