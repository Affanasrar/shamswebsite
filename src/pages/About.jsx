import React from 'react';
import { 
  Target, Lightbulb, Award, Users, BookOpen, 
  CheckCircle, MapPin, Phone, Clock, ShieldCheck, 
  GraduationCap, Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import campusLabImg from '../assets/campus-lab.jpg';

export default function About() {
  const values = [
    {
      title: "Excellence in Pedagogy",
      desc: "Delivering top-tier coaching through systematic syllabus coverage, concept mastery, and extensive mock testing."
    },
    {
      title: "Integrity & Discipline",
      desc: "Nurturing ethical habits, punctual attendance, and character development alongside academic success."
    },
    {
      title: "Modern Innovation",
      desc: "Continuously integrating modern technologies such as Generative AI, cloud computing, and responsive web programming."
    },
    {
      title: "Student-Centric Care",
      desc: "Personalized mentorship and doubt clearance sessions tailored to each student's learning pace."
    }
  ];

  const milestones = [
    { year: "1974", title: "Foundation Established", desc: "Shams Commercial Institute opened its doors in Nishtar Road to provide accessible commercial & academic education." },
    { year: "1990s", title: "Board Examination Mastery", desc: "Recognized among top coaching centers in Karachi for producing position holders in SSC Board examinations." },
    { year: "2010s", title: "IT & Commercial Skills Expansion", desc: "Introduced advanced computer labs, MS Office Automation, and Graphic Designing courses." },
    { year: "2024+", title: "Generative AI & Web Engineering", desc: "Pioneering modern full-stack web development and AI literacy to prepare students for the global digital economy." }
  ];

  return (
    <div className="about-page animate-fade-in">
      {/* Page Header */}
      <section className="page-header-dark">
        <div className="container text-center">
          <div className="badge badge-amber header-pill">
            <Sparkles size={16} /> 50 Years of Legacy (1974 - 2026)
          </div>
          <h1 className="page-header-title">About Shams Commercial Institute</h1>
          <p className="page-header-subtitle">
            A pillar of academic distinction and professional skill development in Karachi for five decades.
          </p>
        </div>
      </section>

      {/* Main Story & Campus Visual */}
      <section className="section-about-story">
        <div className="container">
          <div className="story-split-grid">
            <div className="story-content">
              <span className="section-subtitle">OUR HERITAGE</span>
              <h2 className="section-title">50 Years of Molding Leaders & High Achievers</h2>
              <p className="story-paragraph">
                Founded with a steadfast commitment to educational empowerment, <strong>Shams Commercial Institute</strong> has spent half a century guiding students from foundational secondary school academics to advanced technical and professional competence.
              </p>
              <p className="story-paragraph">
                Located at 27-28, Shoe Market, Al Burhan Arcade, Nishtar Rd, near Bagh-e-Halar Hall, Garden West, Karachi, we are celebrated for our disciplined environment, experienced faculty, and consistent production of Karachi Board position holders. 
              </p>
              <p className="story-paragraph">
                As the modern world transitions into the digital and artificial intelligence era, Shams Institute has evolved in tandem—combining traditional academic coaching with cutting-edge IT courses, graphic design, and web development.
              </p>

              <div className="story-stat-badges">
                <div className="stat-pill">
                  <GraduationCap size={20} className="text-amber" />
                  <span>50+ Years Legacy</span>
                </div>
                <div className="stat-pill">
                  <Users size={20} className="text-amber" />
                  <span>15,000+ Alumni</span>
                </div>
                <div className="stat-pill">
                  <Award size={20} className="text-amber" />
                  <span>Annual Merit Awards</span>
                </div>
              </div>
            </div>

            <div className="story-visual">
              <div className="story-image-wrapper">
                <img 
                  src={campusLabImg} 
                  alt="Modern lab at Shams Commercial Institute" 
                  className="story-image"
                />
                <div className="story-floating-card">
                  <ShieldCheck size={24} className="text-amber" />
                  <div>
                    <h4>Certified Excellence</h4>
                    <p>Government Registered Institute</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="card-mission">
              <div className="card-icon-round">
                <Target size={28} />
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To deliver high-impact, accessible, and disciplined coaching that equips Karachi's youth with strong conceptual academic foundations and forward-looking commercial & digital skills, preparing them to thrive in top universities and professional careers.
              </p>
            </div>

            <div className="card-vision">
              <div className="card-icon-round gold">
                <Lightbulb size={28} />
              </div>
              <h3 className="card-title text-white">Our Vision</h3>
              <p className="card-text text-muted">
                To stand as Karachi's premier educational hub where traditional board exam excellence seamlessly merges with 21st-century technological mastery, nurturing confident innovators and responsible leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 50 Years Timeline */}
      <section className="section-timeline">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">OUR JOURNEY</span>
            <h2 className="section-title">Milestones Over 5 Decades</h2>
            <p className="section-desc">From our humble beginnings to a renowned educational landmark in Karachi.</p>
          </div>

          <div className="timeline-grid">
            {milestones.map((m, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year text-gradient">{m.year}</div>
                <h4 className="timeline-item-title">{m.title}</h4>
                <p className="timeline-item-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-values">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">OUR ETHOS</span>
            <h2 className="section-title">Core Institutional Values</h2>
          </div>

          <div className="values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-indicator"></div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="section-facilities">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">CAMPUS FACILITIES</span>
            <h2 className="section-title">Designed for Dedicated Learning</h2>
          </div>

          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon"><BookOpen size={24} /></div>
              <h4>Well-Ventilated Classrooms</h4>
              <p>Ergonomic seating with modern whiteboards and audio-visual instructional aids.</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><Users size={24} /></div>
              <h4>High-Tech Computer Lab</h4>
              <p>Modern networked computers loaded with developer tools, AI environments, and design software.</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><Award size={24} /></div>
              <h4>Exam Testing Center</h4>
              <p>Weekly exam halls configured to simulate real Karachi Board examination conditions.</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon"><Clock size={24} /></div>
              <h4>Flexible Shift Options</h4>
              <p>Morning, Afternoon, and Evening batches to accommodate diverse student routines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Strip */}
      <section className="section-about-cta">
        <div className="container text-center">
          <h2 className="about-cta-title">Begin Your Journey With Shams Institute</h2>
          <p className="about-cta-desc">
            Admissions are open for new academic and professional batches. Reserve your seat today.
          </p>
          <div className="about-cta-actions">
            <Link to="/admission" className="btn btn-primary">
              <span>Apply for Admission</span>
            </Link>
            <Link to="/courses" className="btn btn-outline-dark">
              <span>Browse All Courses</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
