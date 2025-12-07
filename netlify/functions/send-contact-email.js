import { Resend } from 'resend'

/**
 * Netlify serverless function to send contact form data via Resend email
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
    const { name, email, phone, message } = data

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Missing required fields: name, email, message'
        })
      }
    }

    // Validate field lengths
    if (name.length < 3) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Name must be at least 3 characters'
        })
      }
    }

    if (message.length < 10) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Message must be at least 10 characters'
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

    // Initialize Resend with API key from environment
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Prepare email content
    const emailHtml = `
      <h2>Nova mensagem de contato - Backstage Produtora</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    const emailText = `
Nova mensagem de contato - Backstage Produtora

Nome: ${name}
Email: ${email}
${phone ? `Telefone: ${phone}` : ''}

Mensagem:
${message}
    `

    // Send email via Resend
    const result = await resend.emails.send({
      from: 'Backstage Produtora <onboarding@resend.dev>',
      to: ['show@backstageproductions.co.uk'],
      subject: `Nova mensagem de contato - ${name}`,
      html: emailHtml,
      text: emailText,
      replyTo: email
    })

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        data: result
      })
    }
  } catch (error) {
    console.error('Resend email error:', error)

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    }
  }
}
