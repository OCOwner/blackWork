import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH_URL } from '../../constants/constants';
import styled from 'styled-components';

const DeskTopHeader = () => {
  const headerList = [
    { value: 'Home', path: PATH_URL.HOME },
    { value: 'About', path: PATH_URL.ABOUT },
    { value: 'Info', path: PATH_URL.INFO },
    { value: '오시는길', path: PATH_URL.WELCOME },
  ];

  return (
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
  );
};

const HeaderContainer = styled.div`
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ccc;
`;
const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  margin-right: 20px;
`;

export default DeskTopHeader;
