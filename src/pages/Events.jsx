import React from 'react';
import { 
  Award, Calendar, Users, CheckCircle, GraduationCap, 
  Sparkles, Trophy, Mic, ShieldCheck, MapPin, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import awardCeremonyImg from '../assets/gallery-7.jpg';
import campusLabImg from '../assets/campus-lab.jpg';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';
import gallery6 from '../assets/gallery-6.jpg';
import gallery7 from '../assets/gallery-7.jpg';

export default function Events() {
  const eventsList = [
    {
      title: "Generative AI & Coding Bootcamp",
      date: "Quarterly Interactive Workshop",
      category: "Tech & Innovation",
      desc: "An intensive weekend bootcamp where students build real AI applications, prompt chains, and web frontends under industry mentorship.",
      highlights: ["Hands-on coding in state-of-the-art lab", "Free AI tools and API credits provided", "Participation certificate awarded"]
    },
    {
      title: "Annual English Declamation & Speech Contest",
      date: "Bi-Annual Cultural Event",
      category: "Linguistics & Confidence",
      desc: "Designed to help students overcome public speaking stage fear, articulate arguments coherently, and build fluent English spoken proficiency.",
      highlights: ["Judged by seasoned linguists & debaters", "Trophies for 1st, 2nd, and 3rd positions", "Audience participation awards"]
    },
    {
      title: "Board Exam Grand Pre-Board Simulation",
      date: "Every January & February",
      category: "Academic Milestones",
      desc: "A full-scale replication of Karachi Board examination rules, timing, invigilation, and checking standards to eliminate exam anxiety.",
      highlights: ["Official board-styled answer sheets", "Detailed error analysis report provided", "One-on-one improvement counseling"]
    },
    {
      title: "Parent-Teacher Evaluation Meets (PTM)",
      date: "Monthly Review Days",
      category: "Parent Collaboration",
      desc: "Structured one-to-one sessions between parents and subject teachers to review test performance, attendance, and behavioral discipline.",
      highlights: ["Transparent attendance records", "Action plans for weaker subjects", "Direct access to institute administration"]
    }
  ];

  return (
    <div className="events-page animate-fade-in">
      {/* Page Header */}
      <section className="page-header-dark">
        <div className="container text-center">
          <div className="badge badge-amber header-pill">
            <Sparkles size={16} /> Campus Life & Milestones
          </div>
          <h1 className="page-header-title">Events & Academic Celebrations</h1>
          <p className="page-header-subtitle">
            Celebrating hard work, honoring board position holders, and building an inspiring community at Shams Institute.
          </p>
        </div>
      </section>

      {/* Featured Event: Annual Excellence Award Ceremony */}
      <section className="section-featured-event">
        <div className="container">
          <div className="featured-event-card">
            <div className="featured-event-grid">
              <div className="featured-event-content">
                <div className="badge badge-amber award-pill">
                  <Trophy size={16} /> Flagship Annual Gala
                </div>
                <h2 className="featured-event-title">
                  Excellence Award <br />
                  <span className="text-gradient">Ceremony & Prize Distribution</span>
                </h2>
                <p className="featured-event-lead">
                  The crowning glory of Shams Commercial Institute. Each year, we gather to celebrate the dedication and stellar achievements of our <strong>9th and 10th-grade board exam students</strong>.
                </p>
                <p className="featured-event-body">
                  Students who secure top positions, distinctions, and A-1 grades in Karachi Board examinations are honored on stage in the presence of distinguished educationists, community leaders, and proud families.
                </p>

                <div className="awards-breakdown-list">
                  <div className="award-breakdown-item">
                    <CheckCircle size={18} className="text-amber" />
                    <span>Gold Medals & Shields of Honor for Karachi Board Position Holders</span>
                  </div>
                  <div className="award-breakdown-item">
                    <CheckCircle size={18} className="text-amber" />
                    <span>Certificates of Merit & Cash Scholarships for A-1 Grade Achievers</span>
                  </div>
                  <div className="award-breakdown-item">
                    <CheckCircle size={18} className="text-amber" />
                    <span>Special Recognition for 100% Attendance and Outstanding Improvement</span>
                  </div>
                  <div className="award-breakdown-item">
                    <CheckCircle size={18} className="text-amber" />
                    <span>Keynote speeches by renowned academic scholars and motivators</span>
                  </div>
                </div>

                <div className="featured-event-cta">
                  <Link to="/admission" className="btn btn-primary">
                    <span>Join Our Next Batch</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="featured-event-visual">
                <div className="event-main-image-wrap">
                  <img 
                    src={awardCeremonyImg} 
                    alt="Annual Prize Distribution Ceremony at Shams Commercial Institute" 
                    className="event-main-image"
                  />
                  <div className="event-image-caption">
                    <Award size={20} className="text-amber" />
                    <span>Honoring Board Position Holders & High Achievers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Campus Events */}
      <section className="section-other-events">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">ACTIVITIES & INITIATIVES</span>
            <h2 className="section-title">Beyond The Textbook</h2>
            <p className="section-desc">
              Holistic growth through technical workshops, public speaking contests, and parent partnerships.
            </p>
          </div>

          <div className="events-grid">
            {eventsList.map((ev, idx) => (
              <div key={idx} className="event-card">
                <div className="event-card-top">
                  <span className="event-cat-badge">{ev.category}</span>
                  <span className="event-date-text">
                    <Calendar size={14} className="text-amber" />
                    {ev.date}
                  </span>
                </div>
                <h3 className="event-title">{ev.title}</h3>
                <p className="event-desc">{ev.desc}</p>
                <div className="event-highlights-box">
                  <ul className="event-highlights-list">
                    {ev.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle size={14} className="text-amber" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Photo Feature */}
      <section className="section-campus-photo">
        <div className="container">
          <div className="campus-photo-banner">
            <div className="photo-banner-image-wrap">
              <img 
                src={campusLabImg} 
                alt="Students in high-tech computer lab at Shams Institute" 
                className="photo-banner-image"
              />
            </div>
            <div className="photo-banner-content">
              <span className="section-subtitle">VIBRANT LEARNING</span>
              <h3 className="photo-banner-title">Modern Classrooms & Collaborative Culture</h3>
              <p className="photo-banner-text">
                At Shams Commercial Institute, every student is encouraged to ask questions, experiment in computer labs, and collaborate with peers to build enduring confidence.
              </p>
              <Link to="/courses" className="btn btn-outline">
                <span>View Our Courses</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Event Photo Gallery */}
      <section className="section-photo-gallery">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">MOMENTS OF PRIDE</span>
            <h2 className="section-title">Event Photo Gallery</h2>
            <p className="section-desc">
              Glimpses from our recent Excellence Award Ceremony and Independence Day celebrations.
            </p>
          </div>

          <div className="photo-gallery-grid">
            <div className="gallery-item">
              <img src={gallery1} alt="Independence Day Celebration" className="gallery-img" />
              <div className="gallery-caption">Independence Day Celebration</div>
            </div>
            <div className="gallery-item">
              <img src={gallery2} alt="Excellence Award Presentation" className="gallery-img" />
              <div className="gallery-caption">Excellence Award Presentation</div>
            </div>
            <div className="gallery-item">
              <img src={gallery3} alt="Excellence Award Presentation" className="gallery-img" />
              <div className="gallery-caption">Excellence Award Presentation</div>
            </div>
            <div className="gallery-item">
              <img src={gallery4} alt="Excellence Award Presentation" className="gallery-img" />
              <div className="gallery-caption">Excellence Award Presentation</div>
            </div>
            <div className="gallery-item">
              <img src={gallery5} alt="Excellence Award Presentation" className="gallery-img" />
              <div className="gallery-caption">Excellence Award Presentation</div>
            </div>
            <div className="gallery-item">
              <img src={gallery6} alt="Excellence Award Presentation" className="gallery-img" />
              <div className="gallery-caption">Excellence Award Presentation</div>
            </div>
            <div className="gallery-item gallery-item-wide">
              <img src={gallery7} alt="Excellence Award Winners Group Photo" className="gallery-img" />
              <div className="gallery-caption">Award Winners Group Photo</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
