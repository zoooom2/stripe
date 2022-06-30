import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [content, setContent] = useState({ page: '', links: [] });

  const handleSideBar = () => {
    setIsSideBarOpen((x) => !x);
  };

  const openSubMenu = (text, coordinate) => {
    setLocation(coordinate);
    let test = sublinks.find((x) => {
      return text.toLowerCase() === x.page.toLowerCase();
    });

    const { page, links } = test;

    setContent((prev) => {
      return { ...prev, page, links };
    });

    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubMenuOpen,
        handleSideBar,
        openSubMenu,
        closeSubMenu,
        location,
        content,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
