import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand">
              <div className="footer-logo-box">
                <img src={logo} alt="Shams Logo" className="footer-logo-img" />
              </div>
              <div className="footer-brand-text">
                <span className="footer-title">SHAMS</span>
                <span className="footer-subtitle">COMMERCIAL INSTITUTE</span>
              </div>
            </Link>
            <p className="footer-desc">
              Pioneering academic excellence and modern vocational empowerment in Karachi for over 50 years. Guiding students toward board exam distinctions and modern career mastery.
            </p>
            <div className="social-links" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://www.instagram.com/shamscommercial/" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: '#94a3b8' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/p/Shams-Commercial-Institute-100094440033130/" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: '#94a3b8' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCnExhrlZuXd8b9-S-rfjumw" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: '#94a3b8' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 7.1C2.1 8.4 2 10.2 2 12s.1 3.6.5 4.9a3.2 3.2 0 0 0 2.2 2.2C6 19.5 12 19.5 12 19.5s6 0 7.3-.4a3.2 3.2 0 0 0 2.2-2.2c.4-1.3.5-3.1.5-4.9s-.1-3.6-.5-4.9a3.2 3.2 0 0 0-2.2-2.2C18 4.5 12 4.5 12 4.5s-6 0-7.3.4a3.2 3.2 0 0 0-2.2 2.2z"/>
                  <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@shamscommercial" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: '#94a3b8' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href="https://wa.me/923299955575" target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: '#94a3b8' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
            <div className="footer-badge">
              <ShieldCheck size={18} className="text-amber" />
              <span>Registered & Certified Coaching Center</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Our Institute</Link></li>
              <li><Link to="/courses">Academic & Tech Courses</Link></li>
              <li><Link to="/events">Annual Events & Awards</Link></li>
              <li><Link to="/admission">Online Admission Form</Link></li>
            </ul>
          </div>

          {/* Programs Offered */}
          <div className="footer-col">
            <h4 className="footer-heading">Featured Programs</h4>
            <ul className="footer-links">
              <li><Link to="/courses">Academic Classes (Class 4 to 12 & ADC)</Link></li>
              <li><Link to="/courses">MS Office Automation</Link></li>
              <li><Link to="/courses">Web Development & AI</Link></li>
              <li><Link to="/courses">Graphics Designing</Link></li>
              <li><Link to="/courses">Digital Marketing</Link></li>
              <li><Link to="/courses">English Language Course</Link></li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="footer-col">
            <h4 className="footer-heading">Visit Our Campus</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={20} className="footer-contact-icon text-amber" />
                <span>27-28, Shoe Market, Al Burhan Arcade, Nishtar Rd, near Bagh-e-Halar Hall, Garden West, Karachi</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={20} className="footer-contact-icon text-amber" />
                <a href="tel:03299955575" className="footer-contact-link">0329-9955575</a>
              </li>
              <li className="footer-contact-item">
                <Mail size={20} className="footer-contact-icon text-amber" />
                <a href="mailto:info@shamsinstitute.edu.pk" className="footer-contact-link">info@shamsinstitute.edu.pk</a>
              </li>
              <li className="footer-contact-item">
                <Clock size={20} className="footer-contact-icon text-amber" />
                <span>Mon–Fri: 09:00 AM–10:00 PM | Sat: 12:00 PM–8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shams Commercial Institute Karachi. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/about">About Us</Link>
            <span>•</span>
            <Link to="/courses">Courses</Link>
            <span>•</span>
            <Link to="/admission">Admissions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
