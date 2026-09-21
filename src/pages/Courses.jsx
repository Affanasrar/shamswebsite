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
    { id: 'academic', label: 'Academic' },
    { id: 'computer', label: 'Computer Courses' },
    { id: 'english', label: 'English Language Courses' }
  ];

  const courses = [
    {
      id: "academic-junior",
      title: "Class 4 to 8 (All Subjects)",
      category: "academic",
      categoryLabel: "Academic",
      duration: "1 Year / Session",
      timing: "Morning & Evening Batches",
      desc: "Strong foundation building in core subjects for junior and middle school students.",
      topics: [
        "Mathematics & Science",
        "English & Urdu",
        "Social Studies & Islamiat",
        "Regular Assessments",
        "Conceptual Learning"
      ],
      badge: "Foundation"
    },
    {
      id: "academic-matric",
      title: "Class 9 and 10 (Science, Commerce, Arts)",
      category: "academic",
      categoryLabel: "Academic",
      duration: "1 Year / Session",
      timing: "Morning & Evening Batches",
      desc: "Comprehensive preparation for Karachi Board SSC examinations.",
      topics: [
        "Complete Syllabus Coverage",
        "Past Paper Practice",
        "Mock Board Exams",
        "Doubt Clearing Sessions",
        "Time Management Strategies"
      ],
      badge: "Board Exam Prep"
    },
    {
      id: "academic-inter",
      title: "Class 11 and 12 (Science, Commerce, Arts)",
      category: "academic",
      categoryLabel: "Academic",
      duration: "1 Year / Session",
      timing: "Morning & Evening Batches",
      desc: "Focused coaching for Intermediate HSC Board examinations across all major groups.",
      topics: [
        "Pre-Engineering & Pre-Medical",
        "Commerce (I.Com) & Humanities",
        "Extensive Test Sessions",
        "Career Guidance",
        "Top Faculties"
      ],
      badge: "College Prep"
    },
    {
      id: "academic-degree",
      title: "ADC & ADA Part 1 and 2",
      category: "academic",
      categoryLabel: "Academic",
      duration: "1 Year / Session",
      timing: "Morning & Evening Batches",
      desc: "Degree level coaching for Associate Degree in Commerce (ADC) and Associate Degree in Arts (ADA).",
      topics: [
        "Advanced Accounting & Finance",
        "Business Economics & Law",
        "Humanities Subjects",
        "Exam-Oriented Preparation",
        "University Level Guidance"
      ],
      badge: "Degree Coaching"
    },
    {
      id: "ms-office",
      title: "MS Office Automation",
      category: "computer",
      categoryLabel: "Computer Courses",
      duration: "3 Months",
      timing: "Daily 1 Hour Batches",
      desc: "Essential computer literacy and office automation skills required by every professional office and administrative role.",
      topics: [
        "MS Word Document Formatting",
        "MS Excel Basics",
        "MS PowerPoint Presentations",
        "InPage Urdu Typing",
        "Internet & Email Basics"
      ],
      badge: "Essential Skill"
    },
    {
      id: "graphic-design",
      title: "Graphics Designing",
      category: "computer",
      categoryLabel: "Computer Courses",
      duration: "3 Months",
      timing: "Flexible Slots",
      desc: "Learn creative visual communication, branding, typography, and professional asset creation.",
      topics: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Canva Pro",
        "UI/UX Fundamentals",
        "Portfolio Creation"
      ],
      badge: "Creative Design"
    },
    {
      id: "web-dev",
      title: "Web Development",
      category: "computer",
      categoryLabel: "Computer Courses",
      duration: "6 Months",
      timing: "Alternate Days Batches",
      desc: "Master modern web development from semantic HTML & CSS to dynamic interactive frontends.",
      topics: [
        "HTML5 & CSS3",
        "JavaScript Fundamentals",
        "Responsive Web Design",
        "React.js Basics",
        "Hosting & Deployment"
      ],
      badge: "High Demand"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      category: "computer",
      categoryLabel: "Computer Courses",
      duration: "2 Months",
      timing: "Evening Sessions",
      desc: "Learn how to build brands, execute paid ad campaigns, and run marketing funnels.",
      topics: [
        "Social Media Marketing",
        "Search Engine Optimization (SEO)",
        "Content Marketing",
        "Google Ads",
        "Lead Generation"
      ],
      badge: "Business Growth"
    },
    {
      id: "ai-everyone",
      title: "AI for Everyone",
      category: "computer",
      categoryLabel: "Computer Courses",
      duration: "3 Months",
      timing: "Weekend Batches",
      desc: "Step into the cutting-edge era of Artificial Intelligence. Learn how to use AI tools for daily productivity.",
      topics: [
        "Introduction to Generative AI",
        "Prompt Engineering",
        "ChatGPT & Gemini Workflows",
        "AI Image Generation",
        "AI for Productivity"
      ],
      badge: "Future Ready"
    },
    {
      id: "advance-excel",
      title: "Advance Excel",
      category: "computer",
      categoryLabel: "Computer Courses",
      duration: "1 Month",
      timing: "Evening Sessions",
      desc: "Master complex data analysis, pivot tables, and advanced formulas in Microsoft Excel.",
      topics: [
        "Advanced Formulas & Functions",
        "Data Validation & Formatting",
        "Pivot Tables & Charts",
        "Macros Fundamentals",
        "Data Analysis Techniques"
      ],
      badge: "Data Mastery"
    },
    {
      id: "peach-tree",
      title: "Peach Tree (Accounting Software)",
      category: "computer",
      categoryLabel: "Computer Courses",
      duration: "1 Month",
      timing: "Morning & Evening Sessions",
      desc: "Learn professional computerized accounting with Sage 50 (Peachtree).",
      topics: [
        "Company Setup & Chart of Accounts",
        "General Ledger & Journal Entries",
        "Accounts Payable & Receivable",
        "Inventory Management",
        "Financial Reporting"
      ],
      badge: "Accounting Pro"
    },
    {
      id: "english-conversation",
      title: "English Conversation",
      category: "english",
      categoryLabel: "English Language Courses",
      duration: "3 Months",
      timing: "Morning & Evening Sessions",
      desc: "Focus entirely on spoken English, fluency, and overcoming hesitation in daily interactions.",
      topics: [
        "Daily Conversation Drills",
        "Accent & Pronunciation",
        "Group Discussions",
        "Public Speaking",
        "Confidence Building"
      ],
      badge: "Spoken English"
    },
    {
      id: "english-language-comprehensive",
      title: "English Language Course",
      category: "english",
      categoryLabel: "English Language Courses",
      duration: "6 Months",
      timing: "Morning & Evening Sessions",
      desc: "A comprehensive journey through English grammar, reading, writing, and speaking.",
      topics: [
        "Grammar In Use",
        "Vocabulary Expansion",
        "Reading Comprehension",
        "Creative Writing",
        "Interview Preparation"
      ],
      badge: "Comprehensive"
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
