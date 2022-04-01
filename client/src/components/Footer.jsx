import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

function Footer(){
  return (
    <div className='w-full bg-teal-500 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1 style={{color: '#ffff'}}>TRAVEL APP.</h1>
                    {/* ICONOS */}
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
                  {/* COMPONENTES */}
        <div className='flex justify-between'>
          <ul className='lg:flex' style={{color: '#ffff'}}>
            <li>About</li>
            <li>Contacy</li>     
            <li>Newsroom</li>
          </ul>
          <ul className='text-right lg:flex' style={{color: '#ffff'}}>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
          </ul>
        </div>
        {/* <p style={{color: '#ffff'}} className='items-center'> 2022 Travel App. All rights reserved</p> */}
      </div>
    </div>
  );
};
export default Footer;