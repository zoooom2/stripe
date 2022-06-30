import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { location, isSubMenuOpen, content, closeSubMenu } = useGlobalContext();
  const container = useRef();

  const { page, links } = content;

  let mapLinks = links.map((x) => {
    const { label, icon, url } = x;
    return (
      <a href={url}>
        {icon} {label}
      </a>
    );
  });

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.top = bottom + 'px';
    submenu.style.left = center + 'px';
  }, [location]);
  return (
    <div
      className={`submenu ${isSubMenuOpen && 'show'}`}
      ref={container}
      onMouseLeave={closeSubMenu}>
      <h4>{page}</h4>
      <div className={`submenu-center col-${links.length}`}>{mapLinks}</div>
    </div>
  );
};

export default Submenu;
