import React, { FC } from 'react';

const Navbar: FC = () => {
  return (
    <>
      <nav>
        <div className='nav-wrapper light-blue darken-4 px1'>
          <a href='/' className='brand-logo'>
            React + TS
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <a href='/'>Список справ</a>
            </li>
            <li>
              <a href='/'>Інформація</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
