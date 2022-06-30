import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSubMenu, handleSideBar, closeSubMenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubMenu(page, { center, bottom });
  };
  let handleSubMenu = (e) => {
    !e.target.classList.contains('link-btn') && closeSubMenu();
  };
  return (
    <nav className='nav' onMouseOver={handleSubMenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='btn toggle-btn' onClick={handleSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              Products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              Developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              Company
            </button>
          </li>
        </ul>
        <button className='signin-btn btn'>sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
