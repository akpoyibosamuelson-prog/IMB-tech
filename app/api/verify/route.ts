import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    { error: 'Payment verification is unavailable because no payment gateway is integrated.' },
    { status: 501 },
  );
}
