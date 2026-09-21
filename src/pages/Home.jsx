import React from 'react';
import { 
  ArrowRight, BookOpen, Monitor, TrendingUp, Award, 
  CheckCircle, Users, GraduationCap, ChevronRight, 
  Star, Sparkles, ShieldCheck, MapPin, Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import campusLabImg from '../assets/campus-lab.jpg';
import awardCeremonyImg from '../assets/gallery-7.jpg';

export default function Home() {
  const stats = [
    { number: "50+", label: "Years of Educational Legacy", detail: "Serving Karachi since 1974" },
    { number: "15,000+", label: "Successful Graduates", detail: "Placed in universities & industry" },
    { number: "100%", label: "Board Matriculation Success", detail: "Top positions & A-1 grades" },
    { number: "12+", label: "Academic & Tech Programs", detail: "From Matric prep to Generative AI" },
  ];

  const featuredPrograms = [
    {
      title: "Academic Classes",
      tag: "Academic Coaching",
      desc: "Class 4 to 12, Science, Commerce and Arts groups, including ADC Part 1 & 2.",
      link: "/courses"
    },
    {
      title: "Web Development & AI",
      tag: "Computer Courses",
      desc: "Comprehensive modern web design and AI for Everyone.",
      link: "/courses"
    },
    {
      title: "Graphics Designing",
      tag: "Computer Courses",
      desc: "Learn creative visual communication, branding, and asset creation.",
      link: "/courses"
    },
    {
      title: "English Language Course",
      tag: "Language",
      desc: "Confidence building, grammar mastery, and systematic test preparation.",
      link: "/courses"
    }
  ];

  const testimonials = [
    {
      name: "Hamza Tariq",
      role: "Board Exam Position Holder (Matric Science)",
      text: "The conceptual clarity provided by the teachers at Shams Commercial Institute is unmatched. Their past paper test series gave me the confidence to secure an A-1 grade in my board examinations!"
    },
    {
      name: "Syeda Fatima",
      role: "Web Development & AI Graduate",
      text: "The practical hands-on labs helped me build a real portfolio. The instructors explain every line of code patiently. Now I am already freelancing and building web applications!"
    },
    {
      name: "Muhammad Rizwan",
      role: "Parent of Matric Student",
      text: "Shams Institute has been an institution of trust for decades in our family. The discipline, student monitoring, and regular parent-teacher reports are exceptional."
    }
  ];

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-pattern"></div>
        
        <div className="container hero-container">
          <div className="hero-badge">
            <Sparkles size={16} className="text-amber" />
            <span>Admissions Open For Session 2026</span>
          </div>

          <h1 className="hero-title">
            Empowering Minds, <br />
            <span className="text-gradient">Shaping Academic Brilliance.</span>
          </h1>

          <p className="hero-description">
            For over 50 years, <strong>Shams Commercial Institute</strong> in Karachi has been the trusted destination for board examination distinctions, professional IT certifications, and modern career-building skills.
          </p>

          <div className="hero-actions">
            <Link to="/admission" className="btn btn-primary btn-hero">
              <span>Apply for Admission</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/courses" className="btn btn-outline btn-hero">
              <span>Explore All Courses</span>
            </Link>
          </div>

          {/* Key verification badge */}
          <div className="hero-verified-bar">
            <div className="verified-pill">
              <ShieldCheck size={16} className="text-amber" />
              <span>Recognized Excellence in Nishtar Road, Karachi</span>
            </div>
            <div className="verified-pill">
              <Award size={16} className="text-amber" />
              <span>Annual Gold Medal Awards for Board Achievers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Ribbon */}
      <section className="stats-ribbon">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number text-gradient">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-detail">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Shams / 3 Pillars */}
      <section className="section-features">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">WHY CHOOSE SHAMS</span>
            <h2 className="section-title">A Half-Century of Trust & Proven Results</h2>
            <p className="section-desc">
              We combine structured academic discipline with modern pedagogical techniques to bring out the very best in every student.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <BookOpen size={30} />
              </div>
              <h3 className="feature-title">Senior Experienced Faculty</h3>
              <p className="feature-text">
                Learn from veteran educators and seasoned industry professionals with decades of proven expertise in board syllabus and tech trends.
              </p>
            </div>

            <div className="feature-card featured">
              <div className="feature-popular-badge">Flagship Standard</div>
              <div className="feature-icon-wrapper">
                <Monitor size={30} />
              </div>
              <h3 className="feature-title">High-Tech Computer Labs</h3>
              <p className="feature-text">
                Fully equipped well-ventilated labs with high-speed internet, dedicated workstations, and modern software environments for hands-on learning.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <TrendingUp size={30} />
              </div>
              <h3 className="feature-title">Structured Test System</h3>
              <p className="feature-text">
                Weekly assessments, comprehensive grand tests, solved past papers, and personal feedback to guarantee top board results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Real Campus Image */}
      <section className="section-about-preview">
        <div className="container">
          <div className="about-split-grid">
            <div className="about-content-col">
              <span className="section-subtitle">ABOUT OUR LEGACY</span>
              <h2 className="section-title">Where Tradition Meets Modern Technology</h2>
              <p className="about-lead">
                Established over 50 years ago, Shams Commercial Institute has remained steadfast in its mission to deliver quality education accessible to Karachi's ambitious youth.
              </p>
              <p className="about-body">
                Located conveniently at 27-28, Shoe Market, Al Burhan Arcade, Nishtar Rd, near Bagh-e-Halar Hall, Garden West, Karachi, our campus provides a focused, disciplined, and nurturing environment. Whether your goal is securing an A-1 Grade in Matric or learning Generative AI and Web Development, we equip you with real competence.
              </p>

              <div className="about-points-list">
                <div className="about-point">
                  <CheckCircle size={20} className="text-amber point-icon" />
                  <span>Individual attention with small, focused batch sizes</span>
                </div>
                <div className="about-point">
                  <CheckCircle size={20} className="text-amber point-icon" />
                  <span>Comprehensive course notes and examination handouts provided</span>
                </div>
                <div className="about-point">
                  <CheckCircle size={20} className="text-amber point-icon" />
                  <span>Morning & Evening flexible shifts for working students</span>
                </div>
              </div>

              <div className="about-action-row">
                <Link to="/about" className="btn btn-outline-dark">
                  <span>Learn More About Us</span>
                  <ChevronRight size={18} />
                </Link>
                <Link to="/admission" className="btn btn-primary">
                  <span>Apply Now</span>
                </Link>
              </div>
            </div>

            <div className="about-visual-col">
              <div className="about-image-card">
                <img 
                  src={campusLabImg} 
                  alt="Students learning in Shams high-tech computer laboratory" 
                  className="about-image"
                />
                <div className="about-image-badge">
                  <Monitor size={22} className="text-amber" />
                  <div>
                    <strong>Modern Computer Lab</strong>
                    <span>Equipped for Generative AI & Web Dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Showcase */}
      <section className="section-courses-preview">
        <div className="container">
          <div className="courses-header-flex">
            <div>
              <span className="section-subtitle">OUR CURRICULUM</span>
              <h2 className="section-title">Featured Academic & Professional Programs</h2>
            </div>
            <Link to="/courses" className="btn btn-outline-dark">
              <span>View All Programs</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="courses-preview-grid">
            {featuredPrograms.map((prog, idx) => (
              <div key={idx} className="program-preview-card">
                <span className="program-tag">{prog.tag}</span>
                <h3 className="program-title">{prog.title}</h3>
                <p className="program-desc">{prog.desc}</p>
                <div className="program-footer">
                  <Link to="/admission" className="program-link">
                    <span>Enroll Today</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Award Ceremony Feature */}
      <section className="section-award-feature">
        <div className="container">
          <div className="award-split-grid">
            <div className="award-visual-col">
              <div className="award-image-card">
                <img 
                  src={awardCeremonyImg} 
                  alt="Annual Prize Distribution Ceremony at Shams Commercial Institute" 
                  className="award-image"
                />
                <div className="award-image-overlay">
                  <Award size={28} className="text-amber" />
                  <span>Celebrating 50 Years of Board Toppers</span>
                </div>
              </div>
            </div>

            <div className="award-content-col">
              <div className="badge badge-amber award-pill">
                <Award size={16} /> Annual Grand Celebration
              </div>
              <h2 className="award-title">
                Excellence Award <br />
                <span className="text-gradient">Ceremony & Scholarships</span>
              </h2>
              <p className="award-text">
                Every year, Shams Commercial Institute proudly celebrates the outstanding achievements of our matriculation board students. Position holders and A-1 grade achievers receive gold medals, shields of honor, and merit scholarships.
              </p>
              
              <div className="award-perks">
                <div className="award-perk-item">
                  <div className="perk-bullet"></div>
                  <div>
                    <strong>Medals & Trophies</strong>
                    <p>Recognizing top performers in Karachi Board matric exams</p>
                  </div>
                </div>
                <div className="award-perk-item">
                  <div className="perk-bullet"></div>
                  <div>
                    <strong>Scholarship Rewards</strong>
                    <p>Financial fee concessions and merit grants for high scorers</p>
                  </div>
                </div>
              </div>

              <Link to="/events" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                <span>Explore Campus Events</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-testimonials">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">TESTIMONIALS</span>
            <h2 className="section-title">What Our Students & Parents Say</h2>
            <p className="section-desc">Real stories of dedication, transformation, and board distinctions.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="testimonial-quote">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <h4 className="author-name">{t.name}</h4>
                    <p className="author-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-content">
              <span className="cta-eyebrow">TAKE THE NEXT STEP</span>
              <h2 className="cta-title">Ready to Achieve Academic & Professional Excellence?</h2>
              <p className="cta-desc">
                Join hundreds of successful students at Shams Commercial Institute. Apply online in just 2 minutes or visit our Nishtar Road campus.
              </p>
              <div className="cta-buttons">
                <Link to="/admission" className="btn btn-primary btn-cta">
                  <span>Start Online Application</span>
                  <ArrowRight size={20} />
                </Link>
                <a href="tel:03299955575" className="btn btn-outline btn-cta">
                  <Phone size={18} />
                  <span>Official No: 0329-9955575</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
