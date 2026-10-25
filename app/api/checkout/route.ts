import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const checkoutSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30),
  amount: z
    .union([z.string(), z.number()])
    .transform(Number)
    .pipe(z.number().finite().positive().max(100_000_000)),
  method: z.enum(['Card', 'Bank transfer', 'Cash']),
  order: z.string().trim().min(1).max(100),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Request body must contain valid JSON.' }, { status: 400 });
  }

  const result = checkoutSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Enter a valid name, email, phone, order reference, amount, and payment method.' },
      { status: 400 },
    );
  }

  const { amount, method, order } = result.data;
  const reference = `IMB-${randomUUID().replaceAll('-', '').slice(0, 12).toUpperCase()}`;

  return NextResponse.json({
    reference,
    status: 'pending_verification',
    amount,
    order,
    method,
    gateway: 'not-configured',
    message: 'A reference was generated only and was not saved to an order. No payment was processed or verified.',
  });
}
