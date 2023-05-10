import React from 'react';
import '../styles/logo.css'

const Logo = () => {
  const logo = "<a> Ariel </m>";
  return (
    <div className='logo'>
      <p className='logo-p'>
        <span className='logo-span' >
          {logo}
        </span>
      </p>
    </div>
  );
};

export default Logo;