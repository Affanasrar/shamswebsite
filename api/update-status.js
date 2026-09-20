import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Simple authentication check
  const authHeader = req.headers.authorization;
  const adminPassword = process.env.ADMIN_PASSWORD || 'shams123'; // Default fallback for local testing

  if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ error: 'Unauthorized: Invalid or missing password' });
  }

  // Retrieve connection string
  const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!dbUrl) {
    return res.status(500).json({ error: 'DATABASE_URL is not configured.' });
  }

  try {
    const sql = neon(dbUrl);
    const { applicationId, newStatus } = req.body;

    if (!applicationId || !newStatus) {
      return res.status(400).json({ error: 'applicationId and newStatus are required.' });
    }

    // Allowed statuses for security
    const allowedStatuses = ['Pending Verification', 'Approved', 'Rejected'];
    if (!allowedStatuses.includes(newStatus)) {
      return res.status(400).json({ error: 'Invalid status provided.' });
    }

    // Execute update
    const result = await sql`
      UPDATE admission_applications 
      SET status = ${newStatus} 
      WHERE application_id = ${applicationId}
      RETURNING id, application_id, status
    `;

    if (result.length === 0) {
      return res.status(404).json({ error: 'Application not found.' });
    }

    return res.status(200).json({
      success: true,
      message: 'Status updated successfully',
      data: result[0]
    });

  } catch (error) {
    console.error('Neon Database Update Error:', error);
    return res.status(500).json({
      error: 'Failed to update status: ' + (error.message || 'Unknown error')
    });
  }
}
