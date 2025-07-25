import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on route change (mobile UX polish)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Shadow glow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <nav
      className={`backdrop-blur-lg bg-white/20 shadow-xl border-b border-purple-200/30 px-6 py-4 sticky top-0 z-50 rounded-b-xl transition-all duration-300 ${
        isScrolled ? 'shadow-[0_4px_15px_rgba(168,85,247,0.3)]' : ''
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-extrabold text-purple-700 tracking-wide drop-shadow-sm">
          Britney 🌸
        </h1>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl text-purple-700 cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-semibold">
          {navLinks.map((text, i) => (
            <Link
              key={i}
              to={`/${text.toLowerCase() === 'home' ? '' : text.toLowerCase()}`}
              className="relative group text-purple-800 hover:text-purple-600 transition-all duration-300 pb-1 hover:drop-shadow-[0_0_5px_#a855f7]"
            >
              {text}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-start mt-4 space-y-3 md:hidden text-sm font-semibold animate-fadeIn">
          {navLinks.map((text, i) => (
            <Link
              key={i}
              to={`/${text.toLowerCase() === 'home' ? '' : text.toLowerCase()}`}
              className="text-purple-800 hover:text-purple-600 transition-colors duration-300 hover:drop-shadow-[0_0_5px_#a855f7]"
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
