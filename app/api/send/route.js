"use client";
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const RESEND_API_KEY = 're_PwtCWRpu_GqJKaihzxKdXunG1dujXN2hW';//process.env.RESEND_API_KEY;

export async function POST(req) {
  const { renderToStaticMarkup } = await import('react-dom/server');

  // Parse request body
  // Parse request body as JSON
  const requestBody = await req.json();

  // Extract required fields from the request body
  const { email, subject, message } = requestBody;
  // const msgPtagged=message.split('\n').map(str => <p>{str}</p>);
  const msgPtagged = message.split('\n').map((str, index) => <p key={index}>{str}</p>);

  // Construct the email content
  const htmlContent = renderToStaticMarkup(
    <>
    <h2>New message from the contact form</h2>
    <p>Sender email: {email}</p>
    <p>Subject: {subject}</p>
    <p>Message body:</p>
      <p>{msgPtagged}</p>
      ----EOL----
    </>
  );

  //const fromDev = 'Acme <onboarding@resend.dev>'; //localhost
  const fromProd = 'Shatadip.com <noreply@shatadip.com>'; //production

  // Send email using fetch
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: fromProd,
      to: ['shatadip.majumder@gmail.com'],
      subject: subject,
      html: htmlContent,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  } else {
    // Handle error response
    return NextResponse.error();
  }
}
