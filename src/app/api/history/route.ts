import { NextResponse } from 'next/server';

// In a real app, connect to your DB (e.g., Prisma)
export async function GET() {
  const fakeHistory = [
    { id: '1', title: 'Session 1', createdAt: new Date().toISOString() },
    { id: '2', title: 'Session 2', createdAt: new Date().toISOString() },
  ];

  return NextResponse.json(fakeHistory);
}
