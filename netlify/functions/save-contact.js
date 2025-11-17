import { neon } from '@neondatabase/serverless'

/**
 * Netlify serverless function to save contact form data to Neon Database
 */
export async function handler(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    // Parse request body
    const data = JSON.parse(event.body)
    const { nome, email, telefone, mensagem } = data

    // Validate required fields
    if (!nome || !email || !mensagem) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Missing required fields: nome, email, mensagem'
        })
      }
    }

    // Validate field lengths
    if (nome.length < 3) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Nome must be at least 3 characters'
        })
      }
    }

    if (mensagem.length < 10) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Mensagem must be at least 10 characters'
        })
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Invalid email format'
        })
      }
    }

    // Connect to Neon Database
    const sql = neon(process.env.DATABASE_URL)

    // Insert contact data
    const result = await sql`
      INSERT INTO contatos (nome, email, telefone, mensagem)
      VALUES (${nome}, ${email}, ${telefone || null}, ${mensagem})
      RETURNING id, created_at
    `

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        message: 'Contact saved successfully',
        data: result[0]
      })
    }
  } catch (error) {
    console.error('Database error:', error)

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    }
  }
}
