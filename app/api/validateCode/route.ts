import { NextResponse } from 'next/server';
import { getSecureCode, clearSecureCode } from '@/lib/secureCodeStore';

export async function POST(request: Request) {
  try {
    const { code: userCode } = await request.json();
    const storedCode = getSecureCode();
    const now = Date.now();

    if (!storedCode) {
      return NextResponse.json(
        // { valid: false, message: 'No secure code found.' },
        { valid: false, message: 'Our Hamsters are working on this feature...' },
        { status: 400 }
      );
    }

    if (now > storedCode.expiresAt) {
      clearSecureCode();
      return NextResponse.json(
        { valid: false, message: 'The secure code has expired.' },
        { status: 400 }
      );
    }

    if (userCode.toUpperCase() === storedCode.code) {
      clearSecureCode();
      return NextResponse.json({ valid: true, message: '' });
    } else {
      return NextResponse.json({ valid: false, message: 'Incorrect secure code.' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ valid: false, message: 'Invalid request.'+ error }, { status: 400 });
  }
}
