import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Monitor, Globe, Award, ArrowRight, 
  MapPin, Phone, Mail, Menu, X, GraduationCap,
  Code, Cpu, Megaphone, CheckCircle, Calendar, 
  Users, Target, Lightbulb, TrendingUp, ChevronRight
} from 'lucide-react';

export default function ShamsInstituteWebsite() {
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const navigateTo = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Our Courses' },
    { id: 'events', label: 'Events' },
  ];

  const Navbar = () => (
    <nav className="sticky top-0 z-50 w-full bg-[#0a192f] border-b border-[#112240] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
            onClick={() => navigateTo('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center text-[#0a192f] shadow-[0_0_15px_rgba(251,191,36,0.3)] group-hover:scale-105 transition-transform">
              <GraduationCap size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl md:text-2xl leading-tight text-white tracking-wide">SHAMS</span>
              <span className="text-xs font-bold tracking-[0.2em] text-amber-500 uppercase">Commercial Institute</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => navigateTo(item.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  activePage === item.id 
                    ? 'text-amber-400 bg-[#112240]' 
                    : 'text-slate-300 hover:text-amber-400 hover:bg-[#112240]/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ml-6 flex items-center gap-2 text-[#0a192f] bg-amber-500 px-6 py-2.5 rounded-md font-bold hover:bg-amber-400 transition-all shadow-[0_0_15px_rgba(251,191,36,0.2)]"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-500 hover:text-amber-400 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a192f] border-b border-[#112240] absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`px-4 py-3 rounded-md text-left text-base font-medium transition-colors ${
                  activePage === item.id 
                    ? 'text-amber-400 bg-[#112240] border-l-4 border-amber-500' 
                    : 'text-slate-300 hover:text-amber-400 hover:bg-[#112240]/50 border-l-4 border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-[#0a192f] overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0a192f] opacity-90 z-0"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-bold tracking-widest uppercase border border-amber-500/20 mb-8">
            <Award size={16} /> Karachi's Premier Educational Institute
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 max-w-5xl mx-auto leading-tight">
            Empowering Minds, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-600">Shaping The Future.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Shams Commercial Institute provides top-tier academic coaching and cutting-edge professional skills training to build the leaders and innovators of tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button 
              onClick={() => navigateTo('courses')}
              className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-md text-[#0a192f] bg-amber-500 hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)]"
            >
              Explore Our Programs
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => navigateTo('about')}
              className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-md text-white bg-transparent border-2 border-[#112240] hover:border-amber-500/50 hover:bg-[#112240] transition-all"
            >
              Discover Our History
            </button>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-20">
            {[
              { icon: BookOpen, title: "Expert Faculty", desc: "Learn from highly qualified educators and industry professionals with years of specialized experience." },
              { icon: Monitor, title: "Modern Facilities", desc: "State-of-the-art computer labs, libraries, and comfortable, air-conditioned learning environments." },
              { icon: TrendingUp, title: "Proven Excellence", desc: "Consistently producing top-tier results in board exams, technical certifications, and university placements." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#0a192f] rounded-full flex items-center justify-center text-amber-500 mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0a192f] mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief About Snippet on Home */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a192f] mb-6">A Legacy of Academic and Professional Brilliance</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                For years, Shams Commercial Institute has stood as a beacon of learning in Karachi. We bridge the gap between traditional academics and modern industry requirements.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you are preparing for your crucial 9th and 10th-grade board exams or seeking advanced skills in Artificial Intelligence and Web Development, we provide the environment, resources, and mentorship you need to succeed.
              </p>
              <button 
                onClick={() => navigateTo('about')}
                className="flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors"
              >
                Read more about our mission <ChevronRight size={20} />
              </button>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
               <div className="bg-slate-100 rounded-xl h-48 lg:h-64 flex items-center justify-center text-slate-400">
                  <Users size={48} className="opacity-50" />
               </div>
               <div className="bg-[#0a192f] rounded-xl h-48 lg:h-64 flex items-center justify-center text-amber-500 mt-8">
                  <GraduationCap size={48} className="opacity-80" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutUsPage = () => (
    <div className="bg-white min-h-screen pb-24 animate-in fade-in duration-500">
      <div className="bg-[#0a192f] py-16 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Shams Institute</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Committed to nurturing talent, fostering innovation, and driving academic success in Karachi.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
            <div className="w-14 h-14 bg-[#0a192f] rounded-full flex items-center justify-center text-amber-500 mb-6">
              <Target size={28} />
            </div>
            <h2 className="text-3xl font-bold text-[#0a192f] mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To provide accessible, high-quality education that empowers students with both foundational academic knowledge and specialized commercial/technical skills, enabling them to excel in higher education and the modern global workforce.
            </p>
          </div>
          
          <div className="bg-[#0a192f] p-10 rounded-2xl border border-[#112240] shadow-xl">
            <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-[#0a192f] mb-6">
              <Lightbulb size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              To be recognized as the leading educational and commercial training institute in Pakistan, distinguished by our commitment to student success, innovative teaching methodologies, and a culture of continuous intellectual growth.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-3xl font-bold text-[#0a192f] mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Excellence", desc: "We strive for the highest standards in teaching and student outcomes." },
              { title: "Integrity", desc: "Fostering an environment of honesty, respect, and ethical behavior." },
              { title: "Innovation", desc: "Continuously adapting our curriculum to meet modern technological demands." },
              { title: "Dedication", desc: "Unwavering commitment to the personal and academic growth of every student." }
            ].map((value, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-3 h-3 bg-amber-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-bold text-[#0a192f] mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const CoursesPage = () => {
    const courses = [
      {
        icon: Code,
        title: "Web Development",
        category: "Technology",
        desc: "Master modern web technologies. Build responsive, dynamic websites from scratch to full-stack deployment.",
        topics: ["HTML5 & CSS3 Advanced", "JavaScript (ES6+) & React", "Node.js & Express", "Database Management"]
      },
      {
        icon: Monitor,
        title: "Programming Fundamentals",
        category: "Technology",
        desc: "Build a strong foundation in software development logic, algorithms, and object-oriented programming.",
        topics: ["C / C++ Basics to Advanced", "Python for Automation", "Object-Oriented Logic", "Data Structures"]
      },
      {
        icon: Cpu,
        title: "Artificial Intelligence",
        category: "Advanced Tech",
        desc: "Step into the future with our comprehensive AI course, covering data science to basic machine learning concepts.",
        topics: ["Machine Learning Basics", "Data Science & Pandas", "Neural Networks Intro", "AI Applications"]
      },
      {
        icon: Megaphone,
        title: "Digital Marketing",
        category: "Business",
        desc: "Learn how to build brands, drive traffic, and generate leads in the modern digital ecosystem.",
        topics: ["Search Engine Optimization", "Social Media Marketing", "Content Strategy", "Google Ads & Analytics"]
      },
      {
        icon: Globe,
        title: "English Language",
        category: "Linguistics",
        desc: "Enhance your communication skills with our structured English language and IELTS preparation courses.",
        topics: ["Spoken English Fluency", "Advanced Grammar", "Vocabulary Expansion", "IELTS Preparation"]
      },
      {
        icon: BookOpen,
        title: "Academics (9th & 10th)",
        category: "Board Exams",
        desc: "Rigorous preparation for 9th and 10th-grade board exams focusing on core science and commerce subjects.",
        topics: ["Physics, Chemistry, Biology", "Mathematics Mastery", "Computer Science", "Past Paper Solutions"]
      }
    ];

    return (
      <div className="bg-slate-50 min-h-screen pb-24 animate-in fade-in duration-500">
        <div className="bg-[#0a192f] py-16 border-b border-amber-500/20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Academic & Professional Programs</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">Discover a wide range of courses designed to elevate your skills and prepare you for future success.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600 w-full"></div>
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-[#0a192f] rounded-lg flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                      <course.icon size={28} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase tracking-wider">
                      {course.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a192f] mb-3">{course.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {course.desc}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-[#0a192f] uppercase tracking-wider mb-2">Key Focus Areas:</h4>
                    {course.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const EventsPage = () => (
    <div className="bg-white min-h-screen pb-24 animate-in fade-in duration-500">
      <div className="bg-[#0a192f] py-16 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Events & Campus Life</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Beyond the classroom, we celebrate achievements and build a vibrant community of learners.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Event: Excellence Awards for 9th and 10th */}
        <div className="bg-[#0a192f] rounded-2xl overflow-hidden shadow-2xl relative mb-16 border border-[#112240]">
          {/* Decorative gold elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 relative z-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm">
                <Award size={18} /> Flagship Annual Event
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Excellence Award <br/><span className="text-amber-500">Ceremony</span>
              </h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                A grand celebration dedicated to honoring the sheer hard work and brilliant performance of our <strong className="text-amber-400 font-bold">9th and 10th-grade board exam students</strong>. 
              </p>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                At Shams Commercial Institute, we believe in recognizing academic brilliance. This prestigious ceremony rewards the top position holders who have demonstrated exceptional dedication in their matriculation examinations.
              </p>
              <ul className="space-y-4">
                {[
                  "Gold Medals and Shields for Board Position Holders",
                  "Certificates of Merit for High Achievers (A-1 Grades)",
                  "Special awards for outstanding progress in specific subjects",
                  "Motivational addresses by renowned educational experts"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200">
                    <div className="mt-1 bg-amber-500/20 p-1 rounded-full text-amber-400"><CheckCircle size={16} /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Gallery Graphic Placeholder */}
            <div className="bg-[#112240] p-8 lg:p-12 relative flex items-center justify-center border-l border-[#1a365d]">
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                <div className="bg-[#0a192f] rounded-lg border border-slate-700/50 flex flex-col items-center justify-center h-48 lg:h-auto shadow-inner text-amber-500/50">
                  <Award size={48} className="mb-2" />
                  <span className="font-bold uppercase tracking-wider text-sm text-center px-2">Medal Presentation</span>
                </div>
                <div className="bg-[#0a192f] rounded-lg border border-slate-700/50 flex flex-col items-center justify-center h-48 lg:h-auto shadow-inner text-blue-500/50 mt-8">
                  <GraduationCap size={48} className="mb-2" />
                  <span className="font-bold uppercase tracking-wider text-sm text-center px-2">Matriculation Toppers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Life Aspects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
            <Calendar className="text-amber-500 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold text-[#0a192f] mb-4">Tech Workshops & Seminars</h3>
            <p className="text-slate-600">Regular seminars focusing on emerging technologies, AI trends, and coding bootcamps designed to keep our students ahead in the rapidly evolving tech landscape.</p>
          </div>
          <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
            <Globe className="text-amber-500 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold text-[#0a192f] mb-4">English Debate Competitions</h3>
            <p className="text-slate-600">Fostering confidence and public speaking skills through intra-institute debate competitions, declamation contests, and vocabulary challenges.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer id="footer-contact" className="bg-[#060f1e] text-slate-300 pt-16 pb-8 border-t border-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded flex items-center justify-center text-[#0a192f]">
                <GraduationCap size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">SHAMS</span>
                <span className="text-[10px] font-bold tracking-wider text-amber-500">COMMERCIAL INSTITUTE</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Pioneering educational excellence in Karachi. Equipping students with academics, tech skills, and linguistic proficiency for a brighter tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b border-[#112240] pb-2 inline-block">Quick Navigation</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><button onClick={() => navigateTo('home')} className="hover:text-amber-400 transition-colors">Home Page</button></li>
              <li><button onClick={() => navigateTo('about')} className="hover:text-amber-400 transition-colors">About Us</button></li>
              <li><button onClick={() => navigateTo('courses')} className="hover:text-amber-400 transition-colors">Course Programs</button></li>
              <li><button onClick={() => navigateTo('events')} className="hover:text-amber-400 transition-colors">Events & Activities</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 border-b border-[#112240] pb-2 inline-block">Contact & Location</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-amber-500 mt-0.5 shrink-0" />
                  <span>Block 13-B, Gulshan-e-Iqbal,<br/>Main University Road,<br/>Karachi, Sindh, Pakistan</span>
                </li>
              </ul>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-amber-500 shrink-0" />
                  <span>+92 21 3498 7654<br/>+92 300 1234567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-amber-500 shrink-0" />
                  <span>info@shamsinstitute.edu.pk</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-[#112240] text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Shams Commercial Institute Karachi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-200 selection:text-[#0a192f]">
      <Navbar />
      
      {/* Dynamic Content Routing */}
      <main className="min-h-[calc(100vh-200px)]">
        {activePage === 'home' && <HomePage />}
        {activePage === 'about' && <AboutUsPage />}
        {activePage === 'courses' && <CoursesPage />}
        {activePage === 'events' && <EventsPage />}
      </main>

      <Footer />
    </div>
  );
}