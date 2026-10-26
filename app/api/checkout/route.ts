import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({
    error: 'Online checkout is unavailable because no payment provider is configured.',
  }, { status: 501 });
}
