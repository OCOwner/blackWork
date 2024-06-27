import React, { useEffect } from 'react';
import styled from 'styled-components';
import icon1 from '../../assets/image/2.png';

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=c2a7efad4c20eb7a22a24670f5aee20d&autoload=false';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('kakao-map');

        // 마커의 위치를 지도 중심으로 설정
        const centerPosition = new window.kakao.maps.LatLng(
          37.493651,
          127.028675
        );

        const mapOption = {
          center: centerPosition, // 중심 좌표를 마커 위치로 설정
          level: 4, // 지도의 줌 레벨 (숫자가 클수록 축소)
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const marker = new window.kakao.maps.Marker({
          position: centerPosition, // 마커의 위치를 지도 중심 좌표로 설정
        });
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <Wrapper>
      <Icon src={icon1} alt="왕관" />
      <Container>
        <Comment>
          <Title>오시는길</Title>
          <p>오시기 전 편하게 연락 주세요.</p>
          <p>가격 거품없는 강남 최고 규모의</p>
          <p>서비스로 편안히 모시겠습니다.</p>
          <p>주소 : 서울특별시 서초구 서초동 1330-15 지하1층 BAR11CLUB</p>
          <p>예약 010-3102-0233 신동실장</p>
          <p>카톡문의 ssgg111</p>
        </Comment>
        <KaKaoMap id="kakao-map" />
      </Container>
    </Wrapper>
  );
};

export default Map;

const Wrapper = styled.div`
  padding-top: 30px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center; /* Center the items horizontally */
  align-items: flex-start; /* Align items at the top */
  gap: 20px; /* Space between items */
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    align-items: center; /* Center items horizontally when stacked */
  }
`;

const Comment = styled.div`
  text-align: left; /* Align text to the left */
  padding: 10px;
  max-width: 300px; /* Limit the width of the comment section */
  color: white; /* Set the text color to white for better contrast */
`;

const Title = styled.h1`
  font-size: 50px;
`;

const KaKaoMap = styled.div`
  width: 500px;
  height: 400px;
  margin: 20px 0;

  @media (max-width: 768px) {
    width: 100%; /* Make the map take the full width on smaller screens */
    height: 300px; /* Reduce the height for better fit */
  }
`;

const Icon = styled.img`
  width: 150px; /* Reduce the size of the icon */
  height: auto;
  display: block; /* Ensure it's block level so margins work */
  margin: 0 auto 20px; /* Center the icon and add some bottom margin */
`;
