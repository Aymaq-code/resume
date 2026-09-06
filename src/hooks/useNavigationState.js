// hooks/useNavigationState.js
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useNavigationState() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Stable close function using useCallback
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  // 2. Stable toggle function
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      const nextState = !prev;
      document.body.style.overflow = nextState ? "hidden" : "";
      return nextState;
    });
  }, []);

  // 3. Programmatic routing action (e.g., for Logo clicks)
  const handleNavigation = useCallback(
    (path) => {
      closeMenu();
      navigate(path);
    },
    [navigate, closeMenu],
  );

  // 4. Automatically close menu when route changes (e.g., user hits back button)
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // 5. Cleanup body scroll lock if the component unmounts entirely
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return { isMenuOpen, toggleMenu, closeMenu, handleNavigation };
}
