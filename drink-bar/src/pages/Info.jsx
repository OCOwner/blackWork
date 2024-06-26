import React from 'react';
import styled from 'styled-components';
import InfoHeader from '../components/info/InfoHeader';
import Review from '../components/info/Review';
import CallBtn from '../components/public/CallBtn';
import MassageBtn from '../components/public/MassageBtn';
import Discription from '../components/info/Discription';

const Info = () => {
  return (
    <Container>
      <InfoHeader />
      <Review />
      <Discription />

      <InquiryBtn>
        <CallBtn />
        <MassageBtn />
      </InquiryBtn>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  background-color: ${(props) => props.theme.color.background};
`;

const InquiryBtn = styled.div`
  display: flex;
  justify-content: center;
`;
