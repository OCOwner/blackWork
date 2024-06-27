import React from 'react';
import styled from 'styled-components';

const CallBtn = () => {
  const phoneNumber = '010-3102-0233';

  return (
    <ButtonWrapper>
      <StyledButton href={`tel:${phoneNumber}`}>전화 문의</StyledButton>
    </ButtonWrapper>
  );
};

export default CallBtn;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: red;
  border: none;
  border-radius: 30px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #cc0000; /* 어두운 빨간색 */
  }

  &:active {
    background-color: #990000; /* 진한 빨간색 */
  }

  & > svg {
    margin-right: 10px;
  }
`;
