import { useEffect } from 'react';

type UseDelayedMenuOpenProps = {
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

export const useDelayedMenuOpen = ({ isMenuOpen, setMenuOpen }: UseDelayedMenuOpenProps) => {
  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        setMenuOpen(true);
      }, 200);
    } else {
      setMenuOpen(false);
    }
  }, [isMenuOpen, setMenuOpen]);

  return isMenuOpen;
};
