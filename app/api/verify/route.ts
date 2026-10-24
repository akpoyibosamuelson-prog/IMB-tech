import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, amount, method, order } = body;

    if (!name || !email || !phone || !amount || Number(amount) <= 0) {
      return NextResponse.json(
        { error: 'Please complete all required checkout fields with a valid amount.' },
        { status: 400 },
      );
    }

    const paymentReference = `IMB-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const gatewayMode = process.env.PAYSTACK_SECRET_KEY || process.env.FLUTTERWAVE_SECRET_KEY ? 'live-gateway' : 'manual-verification-required';

    return NextResponse.json({
      reference: paymentReference,
      status: 'pending_verification',
      amount: Number(amount),
      order: order || 'IMB-ORDER',
      method: method || 'Card',
      gateway: gatewayMode,
      message:
        'Checkout initialized. Real payment completion requires secure server-side verification and webhook validation before any order or booking is marked as paid.',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid checkout payload.' }, { status: 400 });
  }
}

