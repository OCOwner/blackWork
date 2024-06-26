import React, { useEffect } from 'react';
import styled from 'styled-components';

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
    <Container>
      <Comment>
        <h1>오시는길</h1>
        <p>오시기 전 편하게 연락 주세요.</p>
        <p>가격 거품없는 강남 최고 규모의</p>
        <p>서비스로 편안히 모시겠습니다.</p>
        <p>주소 : 서울특별시 서초구 서초동 1330-15 지하1층 BAR11CLUB</p>
        <p>예약 010-2073-9779 신동실장</p>
        <p>카톡문의 ssgg111</p>
      </Comment>
      <KaKaoMap id="kakao-map" />
    </Container>
  );
};

export default Map;

const Container = styled.div`
  display: flex;
  justify-content: center; /* Center the items horizontally */
  align-items: flex-start; /* Align items at the top */
  gap: 20px; /* Space between items */
  padding: 20px;
  flex-wrap: wrap;
`;

const Comment = styled.div`
  text-align: left; /* Align text to the left */
  padding: 10px;
  max-width: 300px; /* Limit the width of the comment section */
`;

const KaKaoMap = styled.div`
  width: 600px;
  height: 400px;
  margin: 20px 0;
`;
