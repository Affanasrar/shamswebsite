import React, { useState } from 'react';
import { 
  Code, Monitor, Cpu, Megaphone, Globe, 
  BookOpen, CheckCircle, Clock, Calendar, 
  ArrowRight, Sparkles, Filter 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'academic', label: 'Board Academics' },
    { id: 'tech', label: 'IT & Software' },
    { id: 'creative', label: 'Design & Marketing' },
    { id: 'language', label: 'Language & Skills' }
  ];

  const courses = [
    {
      id: "matric-science",
      title: "Matriculation (9th & 10th) Science",
      category: "academic",
      categoryLabel: "Board Exam Prep",
      duration: "1 Year / Session",
      timing: "Morning & Evening Batches",
      desc: "Thorough preparation for Sindh Board Karachi SSC Examinations with dedicated subject specialists.",
      topics: [
        "Physics & Chemistry Concept Drills",
        "Mathematics Problem Solving & Theorems",
        "Biology / Computer Science Syllabus",
        "Weekly Grand Test Series & Past Papers",
        "Mock Board Exams with Exact Paper Pattern"
      ],
      badge: "High Board Distinction Rate"
    },
    {
      id: "matric-commerce",
      title: "Matriculation (9th & 10th) Commerce",
      category: "academic",
      categoryLabel: "Board Exam Prep",
      duration: "1 Year / Session",
      timing: "Morning & Evening Batches",
      desc: "Specialized coaching for commerce students covering principles of accounting, economics, and business math.",
      topics: [
        "Principles of Accounting & Bookkeeping",
        "Commercial Geography & Economics",
        "Business Mathematics & Statistics",
        "English & Urdu Compulsory Mastery",
        "Comprehensive Examination Handouts"
      ],
      badge: "Flagship Commerce Coaching"
    },
    {
      id: "web-dev",
      title: "Full-Stack Web Development",
      category: "tech",
      categoryLabel: "IT & Software",
      duration: "6 Months (Hands-on Labs)",
      timing: "Alternate Days / Weekend Batches",
      desc: "Master modern web development from semantic HTML & CSS to dynamic React frontends and cloud databases.",
      topics: [
        "HTML5, CSS3, Modern Flexbox & Grid",
        "JavaScript (ES6+) & TypeScript Basics",
        "React.js Component Architecture & Hooks",
        "Node.js, Express & RESTful APIs",
        "Neon PostgreSQL / Database Integration & Deployment"
      ],
      badge: "Most In-Demand Skill"
    },
    {
      id: "gen-ai",
      title: "Generative AI & Modern Tech",
      category: "tech",
      categoryLabel: "Advanced IT",
      duration: "3 Months (Intensive)",
      timing: "Evening & Weekend Batches",
      desc: "Step into the cutting-edge era of Artificial Intelligence. Learn prompt engineering and AI workflow automation.",
      topics: [
        "Foundations of Machine Learning & LLMs",
        "Prompt Engineering for Developers & Creators",
        "Python for AI & Data Analysis",
        "OpenAI & Gemini API Integration",
        "Building Practical AI Automation Agents"
      ],
      badge: "Future-Ready Program"
    },
    {
      id: "graphic-design",
      title: "Graphic Designing & Creative Media",
      category: "creative",
      categoryLabel: "Creative Design",
      duration: "4 Months",
      timing: "Flexible Slots",
      desc: "Learn creative visual communication, branding, typography, and professional asset creation for freelance and studio work.",
      topics: [
        "Adobe Photoshop Photo Editing & Compositing",
        "Adobe Illustrator Vector & Logo Design",
        "Canva Pro for Social Media & Marketing Kits",
        "UI/UX Fundamentals & Typography",
        "Portfolio Creation & Freelancing Guidance"
      ],
      badge: "Freelance Practical Skill"
    },
    {
      id: "ms-office",
      title: "MS Office Automation & Corporate IT",
      category: "creative",
      categoryLabel: "Vocational Skills",
      duration: "2 Months",
      timing: "Daily 1 Hour Batches",
      desc: "Essential computer literacy and office automation skills required by every professional office and administrative role.",
      topics: [
        "MS Word Professional Document Formatting",
        "MS Excel Formulas, Pivot Tables & Data Analysis",
        "MS PowerPoint Pitch Decks & Presentations",
        "InPage Urdu Typing & Official Correspondence",
        "Cloud Storage & Email Communication"
      ],
      badge: "Essential Career Baseline"
    },
    {
      id: "english-ielts",
      title: "Spoken English & IELTS Preparation",
      category: "language",
      categoryLabel: "Language & Communication",
      duration: "3 Months",
      timing: "Morning & Evening Sessions",
      desc: "Overcome hesitation, master fluent spoken English, improve accent, and prepare for international IELTS examinations.",
      topics: [
        "Daily Conversation Drills & Accent Neutralization",
        "Grammar In Use & Vocabulary Expansion",
        "IELTS Listening, Reading, Writing & Speaking",
        "Public Speaking, Presentations & Debates",
        "Interview Preparation & Soft Skills"
      ],
      badge: "Confidence Building"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & Social Media",
      category: "creative",
      categoryLabel: "Business & Growth",
      duration: "3 Months",
      timing: "Evening Sessions",
      desc: "Learn how to build brands, execute paid ad campaigns, generate leads, and run e-commerce marketing funnels.",
      topics: [
        "Meta Ads (Facebook & Instagram Marketing)",
        "Search Engine Optimization (SEO Fundamentals)",
        "Content Marketing & Copywriting",
        "Google Ads & Web Analytics",
        "E-Commerce Store Setup & Client Acquisition"
      ],
      badge: "High ROI Skill"
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="courses-page animate-fade-in">
      {/* Header */}
      <section className="page-header-dark">
        <div className="container text-center">
          <div className="badge badge-amber header-pill">
            <Sparkles size={16} /> Certified & Board Approved
          </div>
          <h1 className="page-header-title">Our Academic & Professional Courses</h1>
          <p className="page-header-subtitle">
            From Karachi Board matriculation excellence to cutting-edge Generative AI and Full-Stack programming.
          </p>
        </div>
      </section>

      {/* Main Course Content */}
      <section className="section-courses-catalog">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="category-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="courses-catalog-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card-premium">
                <div className="card-top-accent"></div>
                <div className="course-card-body">
                  <div className="course-header-meta">
                    <span className="course-cat-tag">{course.categoryLabel}</span>
                    {course.badge && (
                      <span className="course-badge-pill">{course.badge}</span>
                    )}
                  </div>

                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-desc">{course.desc}</p>

                  <div className="course-meta-details">
                    <div className="course-meta-row">
                      <Clock size={16} className="text-amber" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="course-meta-row">
                      <Calendar size={16} className="text-amber" />
                      <span>{course.timing}</span>
                    </div>
                  </div>

                  <div className="course-topics-box">
                    <h5 className="topics-heading">What You Will Master:</h5>
                    <ul className="topics-list">
                      {course.topics.map((t, i) => (
                        <li key={i} className="topic-item">
                          <CheckCircle size={15} className="text-amber topic-check" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="course-card-actions">
                    <Link 
                      to={`/admission?course=${encodeURIComponent(course.title)}`} 
                      className="btn btn-primary btn-full"
                    >
                      <span>Enroll in This Course</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Consultation Banner */}
      <section className="section-courses-help">
        <div className="container">
          <div className="consultation-card">
            <div className="consultation-text">
              <h3>Need Guidance on Choosing the Right Program?</h3>
              <p>
                Visit our campus at Nishtar Road for free career counseling with our senior academic advisors, or call us directly.
              </p>
            </div>
            <div className="consultation-actions">
              <a href="tel:03299955575" className="btn btn-outline">
                <span>Call: 0329-9955575</span>
              </a>
              <Link to="/admission" className="btn btn-primary">
                <span>Apply Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
