// app/api/debug-auth/route.ts

import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId, sessionId } = await auth();

  console.log('🧪 Debug: userId', userId);
  console.log('🧪 Debug: sessionId', sessionId);

  return NextResponse.json({ userId, sessionId });
}
