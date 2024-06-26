import React from 'react';
import styled from 'styled-components';

const Discription = () => {
  return (
    <Container>
      <InfoBoxWrapper>
        <LightInfoBox>
          <InfoText>
            <p>영업일은 매주 월요일~토요일 영업 하며</p>
            <p>영업시간은 오픈 오후 7시, 마감 오전 7시 입니다.</p>
          </InfoText>
        </LightInfoBox>
        <DarkInfoBox>
          <InfoText>
            <p>010-3102-0233 신동실장</p>
            <p>카톡아이디 : 11sd1</p>
            <p>Monday - Saturday : 7pm ~ 7am</p>
          </InfoText>
        </DarkInfoBox>
      </InfoBoxWrapper>
    </Container>
  );
};

export default Discription;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: ${(props) => props.theme.color.background};
`;

const InfoBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px; /* 최대 너비 설정 */
`;

const InfoBoxBase = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LightInfoBox = styled(InfoBoxBase)`
  background-color: white;
`;

const DarkInfoBox = styled(InfoBoxBase)`
  background-color: #333333;
  color: white;
`;

const InfoText = styled.div`
  text-align: center; /* 텍스트 가운데 정렬 */

  p {
    margin: 5px 0;
    font-size: 18px;
  }
`;
