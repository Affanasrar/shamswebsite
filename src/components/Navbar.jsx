import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/courses', label: 'Courses' },
    { path: '/events', label: 'Events & Life' },
  ];

  return (
    <header className="site-header">
      {/* Top info announcement bar */}
      <div className="header-topbar">
        <div className="container topbar-content">
          <div className="topbar-left">
            <span className="topbar-item">
              <MapPin size={14} className="text-amber" />
              <span>Nishtar Road, Garden West, Karachi</span>
            </span>
            <span className="topbar-divider">|</span>
            <span className="topbar-item">
              <Clock size={14} className="text-amber" />
              <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
            </span>
          </div>
          <div className="topbar-right">
            <a href="tel:03299955575" className="topbar-link">
              <Phone size={14} className="text-amber" />
              <span>Helpline: <strong>0329-9955575</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          {/* Logo & Branding */}
          <Link to="/" className="nav-brand" onClick={() => setIsMenuOpen(false)}>
            <div className="nav-logo-box">
              <img src={logo} alt="Shams Commercial Institute Logo" className="nav-logo-img" />
            </div>
            <div className="nav-brand-text">
              <span className="nav-title">SHAMS</span>
              <span className="nav-subtitle">COMMERCIAL INSTITUTE</span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="nav-desktop-menu">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            
            <Link to="/admission" className="btn btn-primary nav-cta-btn">
              <span>Apply Online</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="mobile-drawer animate-fade-in">
            <div className="container mobile-drawer-inner">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mobile-cta-wrapper">
                <Link 
                  to="/admission" 
                  className="btn btn-primary btn-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Apply for Admission</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="mobile-contact-info">
                <p className="mobile-contact-item">
                  <Phone size={16} className="text-amber" /> 0329-9955575
                </p>
                <p className="mobile-contact-item">
                  <MapPin size={16} className="text-amber" /> Shoe Market, Nishtar Road, Karachi
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
