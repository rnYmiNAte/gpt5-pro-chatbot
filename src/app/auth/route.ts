import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (email === 'admin@example.com' && password === 'password123') {
    return NextResponse.json({ success: true, user: { email } });
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}
