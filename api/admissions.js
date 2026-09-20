import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({ 
      status: 'active', 
      message: 'Shams Commercial Institute Admissions API is running' 
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
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
    const data = req.body;

    // Validate required fields
    if (!data.fullName || !data.fatherName || !data.email || !data.phone || !data.selectedProgram) {
      return res.status(400).json({
        error: 'Please provide all required fields: fullName, fatherName, email, phone, selectedProgram'
      });
    }

    // Generate unique application tracking reference if not provided
    const applicationId = data.applicationId || ('SCI-' + Math.floor(100000 + Math.random() * 900000));

    // Execute direct parameterized SQL query on Neon Serverless Postgres
    await sql`
      INSERT INTO admission_applications (
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
        status
      ) VALUES (
        ${applicationId},
        ${data.fullName},
        ${data.fatherName},
        ${data.email},
        ${data.phone},
        ${data.whatsappPhone || (data.whatsappSame ? data.phone : null)},
        ${data.gender || 'male'},
        ${data.dob ? data.dob : null},
        ${data.address || null},
        ${data.selectedProgram},
        ${data.shiftPreference || 'evening'},
        ${data.currentQualification || null},
        ${data.guardianContact || null},
        ${data.comments || null},
        'Pending Verification'
      )
    `;

    return res.status(201).json({
      success: true,
      message: 'Application successfully inserted into Neon Database',
      applicationId: applicationId,
      record: {
        applicationId,
        fullName: data.fullName,
        fatherName: data.fatherName,
        email: data.email,
        phone: data.phone,
        selectedProgram: data.selectedProgram,
        shiftPreference: data.shiftPreference
      }
    });

  } catch (error) {
    console.error('Neon Database Error:', error);
    return res.status(500).json({
      error: 'Failed to record admission in database: ' + (error.message || 'Unknown database error')
    });
  }
}
