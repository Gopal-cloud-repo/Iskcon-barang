import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Home, Info, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navStyle = {
    background: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const navContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit'
  };

  const logoIconStyle = {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #f49238, #e2580c)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginRight: '12px'
  };

  const logoTextStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1f2937',
    lineHeight: 1.2
  };

  const logoSubtextStyle = {
    fontSize: '0.75rem',
    color: '#6b7280'
  };

  const desktopNavStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  };

  const mobileNavStyle = {
    display: 'none'
  };

  const navLinkStyle = (active) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    color: active ? '#e2580c' : '#374151',
    backgroundColor: active ? '#fef7ed' : 'transparent'
  });

  const mobileMenuStyle = {
    display: isOpen ? 'block' : 'none',
    padding: '1rem 0',
    backgroundColor: '#f9fafb'
  };

  const mobileNavLinkStyle = (active) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    color: active ? '#e2580c' : '#374151',
    backgroundColor: active ? '#fef7ed' : 'transparent',
    margin: '4px 0'
  });

  const menuButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#374151',
    cursor: 'pointer',
    padding: '8px'
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={navContentStyle}>
          {/* Logo */}
          <Link to="/" style={logoStyle}>
            <div style={logoIconStyle}>
              <span>ॐ</span>
            </div>
            <div>
              <div style={logoTextStyle}>ISKCON Barang</div>
              <div style={logoSubtextStyle}>Hare Krishna Temple</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ ...desktopNavStyle, '@media (max-width: 768px)': mobileNavStyle }}>
            <Link
              to="/"
              style={navLinkStyle(isActive('/'))}
            >
              <Home size={16} />
              <span>Home</span>
            </Link>
            <Link
              to="/donation"
              style={navLinkStyle(isActive('/donation'))}
            >
              <Heart size={16} />
              <span>Donate</span>
            </Link>
            <Link
              to="/about"
              style={navLinkStyle(isActive('/about'))}
            >
              <Info size={16} />
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              style={navLinkStyle(isActive('/contact'))}
            >
              <Phone size={16} />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ ...menuButtonStyle, display: window.innerWidth <= 768 ? 'block' : 'none' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div style={mobileMenuStyle}>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            style={mobileNavLinkStyle(isActive('/'))}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            to="/donation"
            onClick={() => setIsOpen(false)}
            style={mobileNavLinkStyle(isActive('/donation'))}
          >
            <Heart size={18} />
            <span>Donate</span>
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            style={mobileNavLinkStyle(isActive('/about'))}
          >
            <Info size={18} />
            <span>About</span>
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            style={mobileNavLinkStyle(isActive('/contact'))}
          >
            <Phone size={18} />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;