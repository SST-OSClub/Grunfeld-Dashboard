import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { setSecureCode, CodeData } from '@/lib/secureCodeStore';

export async function GET() {
  const now = Date.now();
  const secureCode = crypto.randomBytes(3).toString('hex').toUpperCase();

  const codeData: CodeData = {
    code: secureCode,
    generatedAt: now,
    expiresAt: now + 60000, 
    isValid: true,
  };

  setSecureCode(codeData);

  return NextResponse.json(codeData);
}
