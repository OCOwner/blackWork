import React from 'react';
import styled from 'styled-components';
import InfoHeader from '../components/info/InfoHeader';
import Review from '../components/info/Review';
import CallBtn from '../components/public/CallBtn';
import MassageBtn from '../components/public/MassageBtn';
import Discription from '../components/info/Discription';

const Info = () => {
  return (
    <>
      <InfoHeader />
      <Review />
      <Discription />

      <InquiryBtn>
        <CallBtn />
        <MassageBtn />
      </InquiryBtn>
    </>
  );
};

export default Info;

const InquiryBtn = styled.div`
  display: flex;
  justify-content: center;
`;
