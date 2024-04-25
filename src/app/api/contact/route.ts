import FormData from 'form-data'
import Mailgun from 'mailgun.js'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export async function POST(req: NextRequest) {
  const mailgun = new Mailgun(FormData)
  const client = mailgun.client({ username: 'api', key: API_KEY })
  const { name, email, phone, company, message } = await req.json()
  const messageData = {
    from: 'Contact Form <info@bitenvio.us>',
    to: 'paulblizniuk@gmail.com',
    subject: 'New Contact Iquiry from Bitenvio.us!',
    text: `Hello,

    You have a new form entry from:
    Name: ${name}
    Email: ${email}
    Phone Number: ${phone}
    Company: ${company}

    Message:
    ${message}
    `,
  }

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData)
  } catch (err: any) {
    console.error('Error sending email', err)
  }
  return NextResponse.json({ submitted: true }, { status: 200 })
}