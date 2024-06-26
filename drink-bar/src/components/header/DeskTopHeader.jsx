import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH_URL } from '../../constants/constants';
import styled from 'styled-components';
import image from '../../assets/image/image14.png';

const DeskTopHeader = () => {
  const headerList = [
    { value: 'Home', path: PATH_URL.HOME },
    { value: 'About', path: PATH_URL.ABOUT },
    { value: 'Info', path: PATH_URL.INFO },
    { value: '오시는길', path: PATH_URL.WELCOME },
  ];

  return (
    <Container>
      <LogoLink to={PATH_URL.HOME}>
        <Logo src={image} alt='logo'/>
      </LogoLink>
      <HeaderContainer>
        {headerList.map((item, index) => (
          <HeaderLink
            key={index}
            to={item.path}
            activeclassname="active"
            className="header-link"
          >
            {item.value}
          </HeaderLink>
        ))}
      </HeaderContainer>
    </Container>
  );
};
const LogoLink = styled(NavLink)`
`;
const Logo = styled.img`
  max-width: 10%;
  background-size: cover; /* 배경 이미지를 컨테이너에 맞춰서 늘리거나 줄입니다 */
  background-repeat: no-repeat; /* 배경 이미지를 반복하지 않습니다 */
`;
const Container = styled.div`
    display: flex;
  justify-content: space-between; /* 공간을 두 요소 사이에 균등하게 분배 */
  align-items: center; /* 수직 축에서 가운데 정렬 */
  padding: 0.3% 10%; /* 상하 1%, 좌우 20% 여백 설정 */
  background-color: #ffffff;
  border-bottom: 1px solid #ccc;
`;
const HeaderContainer = styled.div`
  display: flex; /* 플렉스 박스로 설정 */
  align-items: center; /* 수직 축에서 가운데 정렬 */
`;
const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  margin-right: 10px;
  margin-left: 10px;
`;

export default DeskTopHeader;
