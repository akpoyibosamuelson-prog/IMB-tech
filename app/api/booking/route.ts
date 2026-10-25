import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/lib/prisma';

const bookingSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30),
  service: z.string().trim().min(1).max(120),
  date: z.string().optional().refine((value) => {
    if (!value) {
      return true;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return false;
    }

    const timestamp = Date.parse(`${value}T00:00:00.000Z`);
    return Number.isFinite(timestamp) && new Date(timestamp).toISOString().slice(0, 10) === value;
  }),
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

  const result = bookingSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Enter a valid name, email, phone number, service, and project description.' },
      { status: 400 },
    );
  }

  const { name, email, phone, service, date, details } = result.data;

  try {
    const booking = await prisma.booking.create({
      data: {
        reference: `IMB-BOOK-${randomUUID().replaceAll('-', '').slice(0, 12).toUpperCase()}`,
        customerName: name,
        email,
        phone,
        problemDescription: details,
        preferredDate: date || null,
        notes: `Requested service: ${service}`,
        consent: true,
      },
      select: { reference: true, status: true },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error('Unable to save booking request.', error);
    return NextResponse.json({ error: 'Unable to save your request right now. Please try again later.' }, { status: 503 });
  }
}
