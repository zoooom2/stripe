import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubMenu } = useGlobalContext();
  return (
    <div className='hero' onMouseOver={closeSubMenu}>
      <div className='hero-center'>
        <div className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes --from startups to Fortune
            500s--use Stripe's software and API's to accept payments, send
            payouts, and manage their businesses online
          </p>
          <button className='btn'>Start now</button>
        </div>

        <img src={phoneImg} alt='phoneImg' className='hero-images' />
      </div>
    </div>
  );
};

export default Hero;
