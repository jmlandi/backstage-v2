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

    // Initialize Resend with API key from environment
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Prepare email content
    const emailHtml = `
      <h2>Nova mensagem de contato - Backstage Produtora</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${telefone ? `<p><strong>Telefone:</strong> ${telefone}</p>` : ''}
      <p><strong>Mensagem:</strong></p>
      <p>${mensagem.replace(/\n/g, '<br>')}</p>
    `

    const emailText = `
Nova mensagem de contato - Backstage Produtora

Nome: ${nome}
Email: ${email}
${telefone ? `Telefone: ${telefone}` : ''}

Mensagem:
${mensagem}
    `

    // Send email via Resend
    // NOTE: Update the 'from' address to use a custom verified domain in production
    // The 'onboarding@resend.dev' address is for testing only
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Backstage Produtora <onboarding@resend.dev>',
      to: [process.env.RESEND_TO_EMAIL || 'show@backstageproductions.co.uk'],
      subject: `Nova mensagem de contato - ${nome}`,
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
        error: 'Failed to send email'
      })
    }
  }
}
