import React from 'react';
import InfoHeader from '../components/info/InfoHeader';
import Review from '../components/info/Review';
import CallBtn from '../components/public/CallBtn';
import MassageBtn from '../components/public/MassageBtn';

const Info = () => {
  return (
    <div>
      <InfoHeader />
      <Review />
      <CallBtn />
      <MassageBtn />
    </div>
  );
};

export default Info;
