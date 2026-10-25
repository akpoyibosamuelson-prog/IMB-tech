import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional(),
  enquiryType: z.string().trim().min(1).max(120),
  details: z.string().trim().min(1).max(5000),
  consent: z.literal('on'),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Request body must contain valid JSON.' }, { status: 400 });
  }

  const result = enquirySchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Enter a valid name, email, enquiry type, and project description.' },
      { status: 400 },
    );
  }

  const { name, email, phone, enquiryType, details } = result.data;

  try {
    const enquiry = await prisma.enquiry.create({
      data: {
        reference: `IMB-ENQ-${randomUUID().replaceAll('-', '').slice(0, 12).toUpperCase()}`,
        name,
        email,
        phone: phone || null,
        subject: enquiryType,
        message: details,
        consent: true,
      },
      select: { reference: true },
    });

    return NextResponse.json(enquiry, { status: 201 });
  } catch (error) {
    console.error('Unable to save contact enquiry.', error);
    return NextResponse.json({ error: 'Unable to save your enquiry right now. Please try again later.' }, { status: 503 });
  }
}
