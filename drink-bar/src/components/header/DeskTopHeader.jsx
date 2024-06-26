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
            activeClassName="active"
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
  height: auto;
`;

const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 10px 20px; /* 수정: 좀 더 큰 여백으로 설정 */
  background-color: #ffffff;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* 추가: 네비게이션 링크들이 한 줄에 들어가지 않으면 다음 줄로 넘어가게 설정 */
`;

const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  margin: 0 10px;
  padding: 10px; /* 추가: 좀 더 큰 패딩으로 설정 */

  &.active {
    font-weight: bold;
  }
`;

export default DeskTopHeader;
