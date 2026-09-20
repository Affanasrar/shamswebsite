import React, { useState, useEffect } from 'react';
import '../App.css';

function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admissionsData, setAdmissionsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);

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

  const handleStatusUpdate = async (applicationId, newStatus) => {
    if (!window.confirm(`Are you sure you want to mark this application as ${newStatus}?`)) return;
    
    setUpdatingStatus(true);
    try {
      const response = await fetch('/api/update-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${password}`
        },
        body: JSON.stringify({ applicationId, newStatus })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setAdmissionsData(prev => prev.map(app => 
          app.application_id === applicationId ? { ...app, status: newStatus } : app
        ));
        
        if (selectedApp && selectedApp.application_id === applicationId) {
          setSelectedApp({ ...selectedApp, status: newStatus });
        }
      } else {
        alert(data.error || 'Failed to update status');
      }
    } catch (err) {
      alert('Network error occurred while updating status');
    } finally {
      setUpdatingStatus(false);
    }
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
                    <button className="btn btn-secondary btn-small view-btn" onClick={() => setSelectedApp(app)}>
                      View Full
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedApp && (
        <div className="admin-modal-overlay" onClick={() => setSelectedApp(null)}>
          <div className="admin-modal-content glass-card" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>Application Details</h3>
              <button className="admin-modal-close" onClick={() => setSelectedApp(null)}>&times;</button>
            </div>
            <div className="admin-modal-body">
              <div className="detail-group">
                <label>Application ID</label>
                <p className="font-mono">{selectedApp.application_id}</p>
              </div>
              <div className="detail-group">
                <label>Full Name</label>
                <p>{selectedApp.full_name}</p>
              </div>
              <div className="detail-group">
                <label>Father's Name</label>
                <p>{selectedApp.father_name || 'N/A'}</p>
              </div>
              <div className="detail-group">
                <label>Email</label>
                <p>{selectedApp.email}</p>
              </div>
              <div className="detail-group">
                <label>Phone</label>
                <p>{selectedApp.phone}</p>
              </div>
              <div className="detail-group">
                <label>WhatsApp</label>
                <p>{selectedApp.whatsapp_phone || 'N/A'}</p>
              </div>
              <div className="detail-group">
                <label>Gender</label>
                <p className="capitalize">{selectedApp.gender || 'N/A'}</p>
              </div>
              <div className="detail-group">
                <label>Date of Birth</label>
                <p>{formatDate(selectedApp.date_of_birth)}</p>
              </div>
              <div className="detail-group full-width">
                <label>Address</label>
                <p>{selectedApp.address || 'N/A'}</p>
              </div>
              <div className="detail-group">
                <label>Program</label>
                <p>{selectedApp.selected_program}</p>
              </div>
              <div className="detail-group">
                <label>Shift Preference</label>
                <p className="capitalize">{selectedApp.shift_preference}</p>
              </div>
              <div className="detail-group">
                <label>Current Qualification</label>
                <p>{selectedApp.current_qualification || 'N/A'}</p>
              </div>
              <div className="detail-group">
                <label>Guardian Contact</label>
                <p>{selectedApp.guardian_contact || 'N/A'}</p>
              </div>
              <div className="detail-group">
                <label>Status</label>
                <p><span className={`badge status-badge ${selectedApp.status.toLowerCase().replace(/\s+/g, '-')}`}>{selectedApp.status}</span></p>
              </div>
              <div className="detail-group full-width">
                <label>Comments</label>
                <p>{selectedApp.comments || 'No comments provided.'}</p>
              </div>

              <div className="detail-group full-width admin-modal-actions">
                <label>Update Application Status</label>
                <div className="status-actions">
                  <button 
                    className="btn btn-small status-btn btn-approve"
                    onClick={() => handleStatusUpdate(selectedApp.application_id, 'Approved')}
                    disabled={updatingStatus || selectedApp.status === 'Approved'}
                  >
                    {updatingStatus && selectedApp.status !== 'Approved' ? 'Updating...' : 'Mark Approved'}
                  </button>
                  <button 
                    className="btn btn-small status-btn btn-reject"
                    onClick={() => handleStatusUpdate(selectedApp.application_id, 'Rejected')}
                    disabled={updatingStatus || selectedApp.status === 'Rejected'}
                  >
                    Mark Rejected
                  </button>
                  <button 
                    className="btn btn-small status-btn btn-pending"
                    onClick={() => handleStatusUpdate(selectedApp.application_id, 'Pending Verification')}
                    disabled={updatingStatus || selectedApp.status === 'Pending Verification'}
                  >
                    Set Pending
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
