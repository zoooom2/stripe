import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';
const Sidebar = () => {
  const { handleSideBar, isSideBarOpen } = useGlobalContext();
  let mapSublinks = sublinks.map((sublink) => {
    const { page, links } = sublink;
    return (
      <>
        <h4>{page}</h4>
        <article className='sidebar-sublinks '>
          {links.map((link) => {
            const { label, icon, url } = link;
            return (
              <>
                <a href={url}>
                  {icon}
                  {label}
                </a>
              </>
            );
          })}
        </article>
      </>
    );
  });
  return (
    <div className={`sidebar-wrapper ${isSideBarOpen && 'show'}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={handleSideBar}>
          <FaTimes />
        </button>
        {mapSublinks}
      </div>
    </div>
  );
};

export default Sidebar;
