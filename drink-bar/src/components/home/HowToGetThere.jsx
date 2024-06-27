import styled from 'styled-components';
import image from '../../assets/image/image6.jpeg';

const HowToGetThere = () => {
  return (
    <ContentWrapper>
      <HowToText>
        <HowToTextTitle>오시는 길</HowToTextTitle>
        <TextLine>오시기 전 편하게 연락 주세요.</TextLine>
        <TextLine>가격 거품없는 강남 최고 규모의 서비스로</TextLine>
        <TextLine>편안히 모시겠습니다.</TextLine>
        <TextLine>주소 서울특별시 서초구 서초대로 78길 46 (지하1층)</TextLine>
        <TextLine>예약전화 010-3102-0233 신동실장</TextLine>
        <TextLine>카톡문의 11sd1</TextLine>
      </HowToText>
      <HowToImgImage src={image} alt="강남역에서 오시는 길 이미지" />
    </ContentWrapper>
  );
};

export default HowToGetThere;

const ContentWrapper = styled.div`
  flex-direction: row; /* Stack items vertically on smaller screens */
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* 자식 요소들이 한 줄에 다 들어가지 않으면 여러 줄로 나뉘게 설정 */
  gap: 100px;
  margin-top: 40px;
`;

const HowToText = styled.div`
  /* flex: 1; */
  color: #ffffff;

  margin-right: 20px;
`;

const HowToTextTitle = styled.p`
  font-size: 40px;
  margin-bottom: 10px;
`;

const TextLine = styled.p`
  margin: 0 0 13px; // 각 줄의 하단 여백을 설정합니다.
`;

// const HowToImg = styled.div`
//   flex: 1;
//   text-align: center;
// `;

const HowToImgImage = styled.img`
  max-width: 500px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
        max-width: 300px;
    }
`;
