/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 19 Feb, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External Dependencies
import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';
import { MdClose, MdKeyboardArrowDown, MdMenu } from 'react-icons/md';
import { Link } from 'react-router';

// Internal Dependencies
import { menuItems } from '../assets/data.js';
import Button from './Button.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(null);
  const [hasShadow, setHasShadow] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const mode = localStorage.getItem('darkMode');
    return mode ? JSON.parse(mode) : false;
  });

  // Dark Mode
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Shadow on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setHasShadow(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropDown = (menu) => {
    setActiveDropDown(activeDropDown === menu ? null : menu);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-light text-primary border-b border-white/10 dark:shadow-black z-50 backdrop-blur-lg dark:bg-primary dark:text-gray-300 transition-all duration-300 ${
        hasShadow ? 'shadow-md dark:shadow-gray-800/50' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-2 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <Link to="/" className="text-xl font-bold">
              <span className="text-blue-500">Innova</span> UI
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {Object.keys(menuItems).map((key) => (
              <div key={key} className="relative">
                <Button
                  onClick={() => toggleDropDown(key)}
                  className="flex items-center hover:text-gray-500 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {menuItems[key].title}
                  <MdKeyboardArrowDown
                    className={`ml-2 h-5 w-5 transition-transform ${
                      activeDropDown === key ? 'transform rotate-180' : ''
                    }`}
                  />
                </Button>
                {/* Dropdown Menu */}
                {activeDropDown === key && (
                  <div className="absolute left-0 mt-2 w-screen max-w-md bg-white rounded-md shadow-lg py-1 text-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4">
                      {key === 'platform' ? (
                        menuItems[key].sections.map((section, index) => (
                          <div key={index}>
                            <h3 className="text-xs font-semibold text-gray-500 tracking-wider mb-2">
                              {section.title}
                            </h3>
                            <div>
                              {section.items.map((item, index) => (
                                <Link
                                  key={index}
                                  to={`/${key}/${item.name
                                    .toLowerCase()
                                    .trim()
                                    .replace(/\s+/g, '-')}`}
                                  className="group flex items-start p-2 rounded-lg hover:bg-gray-50"
                                >
                                  <div className="px-4">
                                    <p className="flex items-center text-sm font-medium text-gray-900">
                                      {item.name}
                                      {item.isNew && (
                                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 uppercase">
                                          New
                                        </span>
                                      )}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="space-y-2">
                          {menuItems[key].items.map((item, index) => (
                            <Link
                              key={index}
                              to={`/${key}/${item.name
                                .toLowerCase()
                                .trim()
                                .replace(/\s+/g, '-')}`}
                              className="btn-group px-2 rounded-lg hover:bg-gray-50"
                            >
                              <div className="px-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button
              to="/enterprise"
              className="btn-navAuthLink hover:text-gray-500 dark:hover:text-gray-400 py-2"
            >
              Enterprise
            </Button>
            <Button
              to="/pricing"
              className="btn-navAuthLink hover:text-gray-500 dark:hover:text-gray-400 py-2"
            >
              Pricing
            </Button>
          </div>

          {/* Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              to="/"
              className="hidden xl:block btn-navAuthLink hover:text-gray-500 dark:hover:text-gray-400"
            >
              Login
            </Button>
            <Button
              to="/"
              className="hidden xl:block btn-navAuthLink hover:text-gray-500 dark:hover:text-gray-400"
            >
              Contact Sales
            </Button>
            <Button
              to="/"
              className="py-2 text-sm font-medium px-3 rounded-md text-light bg-blue-600 hover:bg-blue-700"
            >
              Get Started - It&apos;s Free
            </Button>
            <Button
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="btn-navAuthLink hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer"
            >
              {isDarkMode ? (
                <LuSun className="h-5 w-5" />
              ) : (
                <LuMoon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <Button
              onClick={toggleMenu}
              className="btn-inline justify-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900 backdrop-blur-lg"
            >
              {isMenuOpen ? (
                <MdClose className="block h-6 w-6 cursor-pointer" />
              ) : (
                <MdMenu className="block h-6 w-6 cursor-pointer" />
              )}
            </Button>
            <Button
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="btn-navAuthLink hover:text-gray-500 cursor-pointer"
            >
              {isDarkMode ? (
                <LuSun className="h-5 w-5" />
              ) : (
                <LuMoon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden max-w-[40rem] mx-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.keys(menuItems).map((key) => (
              <div key={key} className="space-y-2">
                <Button
                  onClick={() => toggleDropDown(key)}
                  className="flex items-center hover:text-gray-500 px-3 py-2 rounded-md"
                >
                  {menuItems[key].title}
                  <MdKeyboardArrowDown
                    className={`ml-2 h-5 w-5 transition-transform ${
                      activeDropDown === key ? 'transform rotate-180' : ''
                    }`}
                  />
                </Button>

                {/* Dropdown */}
                {activeDropDown === key && (
                  <div className="bg-white text-gray-900 rounded">
                    <div className="pl-4">
                      {key === 'platform' ? (
                        menuItems[key].sections.map((section, index) => (
                          <div key={index} className="py-2">
                            <h3 className="text-xs font-semibold text-gray-500 tracking-wider mb-2">
                              {section.title}
                            </h3>
                            <div>
                              {section.items.map((item, index) => (
                                <Link
                                  key={index}
                                  to={`/${key}/${item.name
                                    .toLowerCase()
                                    .trim()
                                    .replace(/\s+/g, '-')}`}
                                  className="btn-group px-2 rounded-lg hover:bg-gray-50"
                                >
                                  <div className="px-4">
                                    <p className="flex items-center text-sm font-medium text-gray-900">
                                      {item.name}
                                      {item.isNew && (
                                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 uppercase">
                                          New
                                        </span>
                                      )}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="space-y-2">
                          {menuItems[key].items.map((item, index) => (
                            <Link
                              key={index}
                              to={`/${key}/${item.name
                                .toLowerCase()
                                .trim()
                                .replace(/\s+/g, '-')}`}
                              className="btn-group px-2 rounded-lg hover:bg-gray-50"
                            >
                              <div className="px-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button to="/" className="btn-group px-3 text-base rounded-md">
              Enterprise
            </Button>
            <Button to="/" className="btn-group px-3 text-base rounded-md">
              Pricing
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Export
export default Navbar;
