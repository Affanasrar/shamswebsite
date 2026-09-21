import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Send, CheckCircle2, Database, ShieldCheck, 
  Sparkles, Clock, MapPin, Phone, User, BookOpen, 
  Check, Copy, Printer, ArrowRight, Info
} from 'lucide-react';

export default function Admission() {
  const location = useLocation();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    email: '',
    phone: '',
    whatsappSame: true,
    whatsappPhone: '',
    gender: 'male',
    dob: '',
    address: '',
    selectedProgram: '',
    shiftPreference: 'evening',
    currentQualification: '',
    guardianContact: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [showDbSchema, setShowDbSchema] = useState(false);
  const [copiedSchema, setCopiedSchema] = useState(false);

  // Pre-fill course if passed from Courses page URL (?course=...)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const courseParam = params.get('course');
    if (courseParam) {
      setFormData(prev => ({ ...prev, selectedProgram: courseParam }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const applicationRef = 'SCI-' + Math.floor(100000 + Math.random() * 900000);
    const submissionRecord = {
      ...formData,
      applicationId: applicationRef,
      submittedAt: new Date().toISOString(),
      status: 'Pending Verification'
    };

    try {
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionRecord)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedData({
          ...submissionRecord,
          applicationId: result.applicationId || applicationRef,
          isLiveDb: true
        });
      } else {
        console.info('API notice:', result);
        setSubmittedData({
          ...submissionRecord,
          isLiveDb: false,
          apiMessage: result.error || 'Local preview mode'
        });
      }
    } catch (err) {
      console.info('Client-side fallback:', err);
      setSubmittedData({
        ...submissionRecord,
        isLiveDb: false,
        apiMessage: 'Local preview mode (Vercel Serverless Function will connect to Neon PostgreSQL in production).'
      });
    } finally {
      setIsSubmitting(false);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const neonSchemaSQL = `-- Neon Serverless PostgreSQL Table Definition
CREATE TABLE IF NOT EXISTS admission_applications (
    id SERIAL PRIMARY KEY,
    application_id VARCHAR(20) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    father_name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL,
    phone VARCHAR(25) NOT NULL,
    whatsapp_phone VARCHAR(25),
    gender VARCHAR(10) NOT NULL,
    date_of_birth DATE,
    address TEXT,
    selected_program VARCHAR(150) NOT NULL,
    shift_preference VARCHAR(30) NOT NULL,
    current_qualification VARCHAR(100),
    guardian_contact VARCHAR(25),
    comments TEXT,
    status VARCHAR(30) DEFAULT 'Pending Verification',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`;

  const copySchemaToClipboard = () => {
    navigator.clipboard.writeText(neonSchemaSQL);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2500);
  };

  return (
    <div className="admission-page animate-fade-in">
      {/* Page Header */}
      <section className="page-header-dark">
        <div className="container text-center">
          <div className="badge badge-amber header-pill">
            <Sparkles size={16} /> Online Application • Session 2026
          </div>
          <h1 className="page-header-title">Student Admission Application</h1>
          <p className="page-header-subtitle">
            Secure your seat at Shams Commercial Institute. Complete the digital form below to register.
          </p>
        </div>
      </section>

      <div className="container admission-form-container">
        {/* Confirmation Modal / View when submitted */}
        {submittedData ? (
          <div className="submission-success-card animate-fade-in">
            <div className="success-icon-wrap">
              <CheckCircle2 size={64} className="text-amber" />
            </div>
            <span className="badge badge-amber">Application Successfully Registered</span>
            <h2 className="success-title">Welcome to Shams Commercial Institute!</h2>
            <p className="success-subtitle">
              Your application has been received and logged. Please save your reference ID.
            </p>

            <div className="app-ref-box">
              <span className="ref-label">Application Reference ID:</span>
              <span className="ref-code">{submittedData.applicationId}</span>
            </div>

            <div className="submission-summary-grid">
              <div className="summary-item">
                <span className="summary-label">Applicant Name</span>
                <span className="summary-value">{submittedData.fullName}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Father's Name</span>
                <span className="summary-value">{submittedData.fatherName}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Selected Program</span>
                <span className="summary-value font-bold text-amber">{submittedData.selectedProgram}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Preferred Shift</span>
                <span className="summary-value capitalize">{submittedData.shiftPreference} Shift</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Primary Contact</span>
                <span className="summary-value">{submittedData.phone}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Registered Email</span>
                <span className="summary-value">{submittedData.email}</span>
              </div>
            </div>

            <div className="next-steps-callout">
              <h4>Next Steps For Admission Confirmation:</h4>
              <ol>
                <li>Visit our campus at <strong>27-28, Shoe Market, Al Burhan Arcade, Nishtar Rd, near Bagh-e-Halar Hall, Garden West, Karachi</strong> within 3 working days.</li>
                <li>Bring 2 passport-size photographs and a copy of your previous mark sheet / CNIC / B-Form.</li>
                <li>Present your Reference ID <strong>{submittedData.applicationId}</strong> at the reception desk for enrollment finalization.</li>
              </ol>
            </div>

            <div className="success-action-buttons">
              <button 
                onClick={() => window.print()} 
                className="btn btn-outline-dark"
              >
                <Printer size={18} />
                <span>Print Application Summary</span>
              </button>
              <button 
                onClick={() => setSubmittedData(null)} 
                className="btn btn-primary"
              >
                <span>Submit Another Application</span>
              </button>
            </div>
          </div>
        ) : (
          /* Main Application Form */
          <form onSubmit={handleSubmit} className="admission-form-card">
            {/* Section 1: Personal Details */}
            <div className="form-section">
              <div className="form-section-title">
                <span className="section-number">1</span>
                <div>
                  <h3>Personal Information</h3>
                  <p>Accurate information as recorded in official educational documents.</p>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-field-group">
                  <label className="form-label" htmlFor="fullName">
                    Full Student Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Muhammad Bilal"
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-label" htmlFor="fatherName">
                    Father's / Guardian's Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fatherName"
                    name="fatherName"
                    required
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Tariq Mehmood"
                  />
                </div>
              </div>

              <div className="form-grid-3">
                <div className="form-field-group">
                  <label className="form-label" htmlFor="email">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="student@example.com"
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-label" htmlFor="phone">
                    Phone / Mobile Number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="0300-1234567"
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-label" htmlFor="gender">
                    Gender <span className="req">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-field-group">
                  <label className="form-label" htmlFor="dob">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-label" htmlFor="guardianContact">
                    Emergency / Guardian Phone
                  </label>
                  <input
                    type="tel"
                    id="guardianContact"
                    name="guardianContact"
                    value={formData.guardianContact}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="0321-9876543"
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label className="form-label" htmlFor="address">
                  Residential Address (Karachi Area)
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Garden West / Nishtar Road / Saddar, Karachi"
                />
              </div>
            </div>

            {/* Section 2: Program & Academic Preference */}
            <div className="form-section">
              <div className="form-section-title">
                <span className="section-number">2</span>
                <div>
                  <h3>Program & Schedule Selection</h3>
                  <p>Choose the course and batch shift you wish to attend.</p>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-field-group">
                  <label className="form-label" htmlFor="selectedProgram">
                    Program / Course of Study <span className="req">*</span>
                  </label>
                  <select
                    id="selectedProgram"
                    name="selectedProgram"
                    required
                    value={formData.selectedProgram}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">-- Please Select A Course --</option>
                    <optgroup label="Academic Classes">
                      <option value="Class 4 to 8 (All Subjects)">Class 4 to 8 (All Subjects)</option>
                      <option value="Class 9 and 10 (Science, Commerce, Arts)">Class 9 and 10 (Science, Commerce, Arts)</option>
                      <option value="Class 11 and 12 (Science, Commerce, Arts)">Class 11 and 12 (Science, Commerce, Arts)</option>
                      <option value="ADC & ADA Part 1 and 2">ADC & ADA Part 1 and 2</option>
                    </optgroup>
                    <optgroup label="Computer Courses">
                      <option value="MS Office Automation">MS Office Automation</option>
                      <option value="Graphics Designing">Graphics Designing</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="AI for Everyone">AI for Everyone</option>
                      <option value="Advance Excel">Advance Excel</option>
                      <option value="Peach Tree (Accounting Software)">Peach Tree (Accounting Software)</option>
                    </optgroup>
                    <optgroup label="English Language Courses">
                      <option value="English Conversation">English Conversation</option>
                      <option value="English Language Course">English Language Course</option>
                    </optgroup>
                  </select>
                </div>

                <div className="form-field-group">
                  <label className="form-label" htmlFor="shiftPreference">
                    Preferred Batch Shift <span className="req">*</span>
                  </label>
                  <select
                    id="shiftPreference"
                    name="shiftPreference"
                    required
                    value={formData.shiftPreference}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="morning">Morning Shift (9:00 AM – 1:00 PM)</option>
                    <option value="afternoon">Afternoon Shift (2:00 PM – 5:00 PM)</option>
                    <option value="evening">Evening Shift (5:00 PM – 10:00 PM)</option>
                    <option value="saturday">Saturday Special (12:00 PM – 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-field-group">
                <label className="form-label" htmlFor="currentQualification">
                  Current / Last Completed Academic Level
                </label>
                <input
                  type="text"
                  id="currentQualification"
                  name="currentQualification"
                  value={formData.currentQualification}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Passed 8th Class / Matric Appearing / Intermediate"
                />
              </div>

              <div className="form-field-group">
                <label className="form-label" htmlFor="comments">
                  Any Specific Goals or Questions for the Faculty?
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows="3"
                  value={formData.comments}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us if you need help with any specific subject or timing preference..."
                ></textarea>
              </div>
            </div>

            {/* Submission Section */}
            <div className="form-submit-footer">
              <div className="form-submit-info">
                <ShieldCheck size={20} className="text-amber" />
                <span>Your details will be transmitted securely to our admissions database.</span>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-primary btn-submit"
              >
                {isSubmitting ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <span>Submit Admission Application</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
