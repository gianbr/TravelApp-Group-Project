import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full bg-indigo-300/90 text-gray-600 font-semibold py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-2 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>TRAVEL APP.</h6>
                <ul>
                  <li className='py-1'>
                  <Link to='/destination'>Destinos</Link>
                  </li>
                  <li className='py-1'>
                  <Link to='/servicios'>Servicios</Link>
                  </li>
                  <li className='py-1'>
                  <Link to='/about'>Acerca de nosotros</Link>
                  </li>
                </ul>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-600'>
        <p className='py-4'>2022 TRAVEL APP, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
        </div>
        </div>
    </div>
  );
};

export default Footer;