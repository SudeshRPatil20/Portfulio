import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GithubIcon, LinkedinIcon, User, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Track scroll position for navbar styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nav links with visibility control
  const navLinks = [
    { name: 'Home', path: '/', isPrivate: false },
    { name: 'About', path: '/#about', isPrivate: false },
    { name: 'Projects', path: '/#projects', isPrivate: false },
    { name: 'Contact', path: '/#contact', isPrivate: false },
    { name: 'Dashboard', path: '/dashboard', isPrivate: true },
    { name: 'Project Ideas', path: '/project-ideas', isPrivate: true },
  ];

  // Filter links based on authentication
  const filteredLinks = navLinks.filter(
    link => !link.isPrivate || (link.isPrivate && isAuthenticated)
  );

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-600 text-white p-2 rounded-lg"
          >
            <User size={24} />
          </motion.div>
          <span className="font-bold text-xl text-neutral-800 dark:text-white">
            Sudesh<span className="text-primary-600">Patil</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {filteredLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium hover:text-primary-600 transition-colors ${
                    (location.pathname === link.path || 
                     (location.pathname === '/' && link.path.startsWith('/#')))
                      ? 'text-primary-600'
                      : 'text-neutral-700 dark:text-neutral-200'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/SudeshRPatil20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sudesh-patil-010188231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            {isAuthenticated && (
              <button 
                onClick={logout}
                className="flex items-center text-sm text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-500"
              >
                <LogOut size={18} className="mr-1" />
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-700 dark:text-neutral-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-neutral-900"
      >
        <div className="container-custom py-4">
          <ul className="flex flex-col space-y-4">
            {filteredLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-primary-600'
                      : 'text-neutral-700 dark:text-neutral-200'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
            <a
              href="https://github.com/SudeshRPatil20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sudesh-patil-010188231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              <LinkedinIcon size={20} />
            </a>
            {isAuthenticated && (
              <button 
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="flex items-center text-sm text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-500"
              >
                <LogOut size={18} className="mr-1" />
                Logout
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;