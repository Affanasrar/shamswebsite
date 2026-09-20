import React, { useState, useEffect } from 'react';
import '../App.css';

function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admissionsData, setAdmissionsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/get-admissions', {
        headers: {
          'Authorization': `Bearer ${password}`
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsAuthenticated(true);
        setAdmissionsData(data.data || []);
      } else {
        setError(data.error || 'Invalid password');
      }
    } catch (err) {
      setError('Failed to connect to the server');
    } finally {
      setLoading(false);
    }
  };

  // Helper to format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-page-wrapper">
        <div className="admin-login-container">
          <div className="admin-login-card glass-card">
            <h2 className="section-title">Admin <span className="highlight-text">Access</span></h2>
            <p className="section-subtitle">Please enter the administrator password to view admission data.</p>
            
            <form onSubmit={handleLogin} className="admin-login-form">
              <div className="form-group">
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Enter password (default for local test: shams123)"
                  required
                  className="form-input admin-input"
                />
              </div>
              
              {error && <div className="admin-error form-error">{error}</div>}
              
              <button type="submit" className="btn btn-primary submit-btn admin-btn" disabled={loading}>
                {loading ? 'Authenticating...' : 'Access Dashboard'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard page-container">
      <div className="admin-header section-header">
        <h2 className="section-title">Admissions <span className="highlight-text">Dashboard</span></h2>
        <div className="admin-stats">
          Total Applications: <span className="stat-highlight">{admissionsData.length}</span>
        </div>
      </div>
      
      <div className="admin-table-container glass-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>App ID</th>
              <th>Date</th>
              <th>Student Name</th>
              <th>Program</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {admissionsData.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center" style={{padding: '2rem'}}>No applications found.</td>
              </tr>
            ) : (
              admissionsData.map(app => (
                <tr key={app.id}>
                  <td className="font-mono">{app.application_id}</td>
                  <td>{formatDate(app.created_at)}</td>
                  <td>
                    <strong>{app.full_name}</strong><br/>
                    <small className="text-muted">{app.email}</small>
                  </td>
                  <td>
                    <span className="badge program-badge">{app.selected_program}</span><br/>
                    <small className="text-muted">{app.shift_preference}</small>
                  </td>
                  <td>
                    {app.phone}
                    {app.whatsapp_phone && app.whatsapp_phone !== app.phone && (
                      <><br/><small className="text-muted">WA: {app.whatsapp_phone}</small></>
                    )}
                  </td>
                  <td>
                    <span className={`badge status-badge ${app.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {app.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-secondary btn-small view-btn" onClick={() => alert(JSON.stringify(app, null, 2))}>
                      View Full
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
