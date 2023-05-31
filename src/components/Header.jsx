import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import '.';

const Header = () =>  {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    }, []);
  
    useEffect(() => {
      document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };

  return (
    <header class="dark:bg-gray-900 shadow bg-white relative ">
    <nav class="relative  z-20 bg-white dark:bg-gray-900">
        <div class="container mx-auto p-6">
        {/* <!-- Flex Container --> */}
        <div class="flex items-center justify-between">
            {/* <!-- Logo --> */}
            <div class="pt-2">
                <img src="images/logo.svg" class="block dark:hidden w-32 h-6" alt="" />
                <img src="images/logo-dark.svg" class="hidden dark:block w-32 h-6" alt="" />
            </div>
            {/* <!-- Menu Item --> */}
            <div class="hidden md:flex space-x-6">
                <a href="#hero" class="text-header-color dark:text-white hover:text-main-color transition-colors">Home</a>
                <a href="#about" class="text-header-color dark:text-white hover:text-main-color transition-colors">À propos</a>
                <a href="#services" class="text-header-color dark:text-white hover:text-main-color transition-colors">Services</a>
                <a href="#services" class="text-header-color dark:text-white hover:text-main-color transition-colors">Teams</a>
                <a href="#" class="text-header-color dark:text-white hover:text-main-color transition-colors">Témoignage</a>
                <a href="#contact" class="text-header-color dark:text-white hover:text-main-color transition-colors">Contact</a>
            </div>
            {/* <!-- Button --> */}
            <button
      id="theme-toggle"
      type="button"
      className={`text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 ${isDarkMode ? 'dark' : ''}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      ) : (
        <svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
      )}
    </button>          
            {/* <!-- Hamburger Icon --> */}
            <button
      id="menu-btn"
      className={`block hamburger md:hidden focus:outline-none ${isOpen ? 'open' : ''}`}
      onClick={toggleMenu}
    >
      <span className={`hamburger-top ${isOpen ? 'bg-black' : 'bg-black'}`}></span>
      <span className={`hamburger-middle ${isOpen ? 'bg-black' : 'bg-black'}`}></span>
      <span className={`hamburger-bottom ${isOpen ? 'bg-black' : 'bg-black'}`}></span>
    </button>
        </div>
        {/* <!-- Mobile Menu --> */}
        <div class={`md:hidden`}>
            <div id="menu" class={`absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white dark:bg-gray-900 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${isOpen ? 'flex' : 'hidden'}`}>
                <a href="#" class="text-header-color hover:text-main-color transition-colors">Home</a>
                <a href="#about" class="text-header-color hover:text-main-color transition-colors">À propos</a>
                <a href="#services" class="text-header-color hover:text-main-color transition-colors">Services</a>
                <a href="#" class="text-header-color hover:text-main-color transition-colors">Teams</a>
                <a href="#contact" class="text-header-color hover:text-main-color transition-colors">Contact</a>
            </div>
        </div>
    </div>
    {/* </div> */}
    </nav>
</header>
  );
}

export default Header;