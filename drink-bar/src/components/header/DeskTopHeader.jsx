import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PATH_URL } from '../../constants/constants';
import styled from 'styled-components';
import image from '../../assets/image/image14.png';
import { FaBars } from 'react-icons/fa'; // 메뉴 아이콘을 위해 추가

const DeskTopHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerList = [
    { value: 'Home', path: PATH_URL.HOME },
    { value: 'About', path: PATH_URL.ABOUT },
    { value: 'Info', path: PATH_URL.INFO },
    { value: '오시는길', path: PATH_URL.WELCOME },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <LogoLink to={PATH_URL.HOME}>
        <Logo src={image} alt="logo" />
      </LogoLink>
      <MenuIcon onClick={toggleMenu}>
        <FaBars />
      </MenuIcon>
      <HeaderContainer isOpen={isMenuOpen}>
        {headerList.map((item, index) => (
          <HeaderLink
            key={index}
            to={item.path}
            activeClassName="active"
            className="header-link"
            onClick={() => setIsMenuOpen(false)} // 메뉴 클릭 시 닫히도록 설정
          >
            {item.value}
          </HeaderLink>
        ))}
      </HeaderContainer>
    </Container>
  );
};

const LogoLink = styled(NavLink)``;

const Logo = styled.img`
  max-width: 100px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 80px; // 모바일에서 로고 크기 조정
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5em;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  margin-left: auto;

  @media (max-width: 768px) {
    display: ${(props) =>
      props.isOpen ? 'flex' : 'none'}; // 메뉴 열림 여부에 따라 표시
    flex-direction: column;
    position: absolute;
    top: 50px; // 로고 아래에 메뉴 배치
    right: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  margin: 0 10px;
  padding: 10px;

  &.active {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export default DeskTopHeader;
