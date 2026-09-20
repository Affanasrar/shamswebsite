import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Simple authentication check
  const authHeader = req.headers.authorization;
  const adminPassword = process.env.ADMIN_PASSWORD || 'shams123'; // Default fallback for local testing

  if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
    return res.status(401).json({ error: 'Unauthorized: Invalid or missing password' });
  }

  // Retrieve connection string from Vercel Environment Variables
  const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;

  if (!dbUrl) {
    return res.status(500).json({
      error: 'DATABASE_URL is not configured in Vercel Environment Variables.'
    });
  }

  try {
    const sql = neon(dbUrl);

    // Fetch all admission applications, ordered by newest first
    const applications = await sql`
      SELECT 
        id,
        application_id,
        full_name,
        father_name,
        email,
        phone,
        whatsapp_phone,
        gender,
        date_of_birth,
        address,
        selected_program,
        shift_preference,
        current_qualification,
        guardian_contact,
        comments,
        status,
        created_at
      FROM admission_applications
      ORDER BY created_at DESC
    `;

    return res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });

  } catch (error) {
    console.error('Neon Database Error:', error);
    return res.status(500).json({
      error: 'Failed to fetch admissions data: ' + (error.message || 'Unknown database error')
    });
  }
}
