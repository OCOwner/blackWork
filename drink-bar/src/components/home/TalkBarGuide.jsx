import styled from 'styled-components';
import image1 from '../../assets/image/image4.jpeg';
import image2 from '../../assets/image/image5.jpeg';
import backgroundImage from '../../assets/image/place6.jpeg';

const FourthDescription = () => {
  return (
    <Container>
      <Title>강남역 토킹바 가이드</Title>
      <ImageContainer>
        <Image src={image1} />
        <Image src={image2} />
      </ImageContainer>
    </Container>
  );
};

export default FourthDescription;

const Container = styled.div`
  display: flex;
  background-image: url(${backgroundImage});
  background-size: cover; /* 배경 이미지를 컨테이너에 맞춰서 늘리거나 줄입니다 */
  background-position: center; /* 배경 이미지를 가운데 정렬합니다 */
  background-repeat: no-repeat; /* 배경 이미지를 반복하지 않습니다 */
  color: #ffffff;
  text-align: center; // 타이틀을 가운데 정렬합니다
  padding: 1%;
  flex-direction: column; // 내부 요소를 세로로 배치
  align-items: center; // 내부 요소들을 수직 축에서 가운데 정렬
`;
const Title = styled.p`
  margin-bottom: 20px;
  font-size: 50px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px; // 이미지 사이의 간격을 설정합니다
  flex-wrap: wrap; /* 자식 요소들이 한 줄에 다 들어가지 않으면 여러 줄로 나뉘게 설정 */
`;
const Image = styled.img`
  width: 100%; /* 부모 컨테이너의 너비를 100%로 채우기 */
  max-width: ${(props) =>
    props.large ? '850px' : '400px'}; /* 이미지의 최대 너비 제한 */
  height: auto; /* 비율을 유지하면서 높이를 자동 조정 */
  border-radius: 20px;
  margin: 10px;
  object-fit: cover; /* 비율을 유지하면서 이미지를 잘 맞춰줌 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 약간의 그림자 효과 추가 */
`;
