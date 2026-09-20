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
              <li><Link to="/courses">9th & 10th Board Coaching</Link></li>
              <li><Link to="/courses">Generative AI & Tech</Link></li>
              <li><Link to="/courses">Web Application Development</Link></li>
              <li><Link to="/courses">Graphic Designing (Canva & Adobe)</Link></li>
              <li><Link to="/courses">MS Office Automation</Link></li>
              <li><Link to="/courses">English Language & IELTS</Link></li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div className="footer-col">
            <h4 className="footer-heading">Visit Our Campus</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={20} className="footer-contact-icon text-amber" />
                <span>27-28, Shoe Market, Al Burhan Arcade, Nishtar Road, near Bagh-e-Halar Hall, Garden West, Karachi, Pakistan</span>
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
                <span>Mon – Sat: 9:00 AM – 9:00 PM (Sunday Closed)</span>
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
