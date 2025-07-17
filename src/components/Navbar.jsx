import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Home } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ॐ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">ISKCON Barang</h1>
              <p className="text-xs text-gray-600">Hare Krishna Temple</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-saffron-600 bg-saffron-50' 
                  : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50'
              }`}
            >
              <Home size={16} />
              <span>Home</span>
            </Link>
            <Link
              to="/donation"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/donation') 
                  ? 'text-saffron-600 bg-saffron-50' 
                  : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50'
              }`}
            >
              <Heart size={16} />
              <span>Donate</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-saffron-600 focus:outline-none focus:text-saffron-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-saffron-600 bg-saffron-50' 
                    : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50'
                }`}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link
                to="/donation"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/donation') 
                    ? 'text-saffron-600 bg-saffron-50' 
                    : 'text-gray-700 hover:text-saffron-600 hover:bg-saffron-50'
                }`}
              >
                <Heart size={18} />
                <span>Donate</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;