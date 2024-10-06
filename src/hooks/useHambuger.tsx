import { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { HamburgerMenu } from '../components/HamburgerMenu';

const useHamburger = () => {
  const [hamburger, setHamburger] = useState(false);

  const changeMenu = () => {
    setHamburger(!hamburger);
  };

  const HamburgerMenuRender = () => {
    if (!hamburger) return <></>;
    return <HamburgerMenu changeMenu={changeMenu} />;
  };

  const HamburtMenuTrigger = () => {
    return <CgMenuRight size={40} onClick={() => changeMenu()} />;
  };

  return { HamburgerMenuRender, HamburtMenuTrigger, changeMenu };
};

export default useHamburger;
