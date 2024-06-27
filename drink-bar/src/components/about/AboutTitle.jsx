import styled from 'styled-components';
import CallBtn from '../public/CallBtn';
import MassageBtn from '../public/MassageBtn';
import backgroundImage from '../../assets/image/image17.jpeg';

const AboutTitle = () => {
  return (
    <Container>
      <Manager>BAR11 신동실장 010 3102 0233</Manager>
      <ShopName>강남착석바 BAR 11</ShopName>
      <Call>
        <CallBtn />
        <MassageBtn />
      </Call>
    </Container>
  );
};

export default AboutTitle;

const Container = styled.div`
  background-image: url(${backgroundImage}); /* 배경 이미지 설정 */
  background-size: cover; /* 배경 이미지를 컨테이너에 맞춰서 늘리거나 줄입니다 */
  background-position: center; /* 배경 이미지를 가운데 정렬합니다 */
  background-repeat: no-repeat; /* 배경 이미지를 반복하지 않습니다 */
  color: #ffffff; /* 글자색을 흰색으로 설정 */
  display: flex; /* 플렉스 컨테이너로 설정 */
  flex-wrap: wrap; /* 자식 요소들이 한 줄에 다 들어가지 않으면 여러 줄로 나뉘게 설정 */
  flex-direction: column; /* 자식 요소들을 세로로 배열 */
  justify-content: center; /* 세로 방향에서 가운데 정렬 */
  align-items: center; /* 가로 방향에서 가운데 정렬 */
  text-align: center; /* 내부 텍스트 가운데 정렬 */
  padding: 10%;
  flex-wrap: wrap;
`;

const Manager = styled.p`
  font-size: 24px; /* 글자 크기 설정 */
  margin: 0 10;

  @media (max-width: 768px) {
    font-size: 20px; /* 글자 크기 설정 */
  }
`;

const ShopName = styled.p`
  font-size: 94px; /* 글자 크기 설정 */
  margin: 0;
  @media (max-width: 768px) {
    font-size: 40px; /* 글자 크기 설정 */
  }
`;

const Call = styled.div`
  display: flex; /* 플렉스 컨테이너로 설정 */
  justify-content: center; /* 가로 방향에서 가운데 정렬 */
  margin-top: 20px; /* 위쪽 여백 추가 */
`;
