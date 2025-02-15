import { NextResponse } from 'next/server';
import { validateSecureCode } from '@/lib/secureCodeFirebase';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebaseClient';

export async function POST(request: Request) {
  try {
    const { code: userCode, uid } = await request.json();

    if (!uid) {
      return NextResponse.json(
        { valid: false, message: "User ID not provided." },
        { status: 400 }
      );
    }

    const result = await validateSecureCode(userCode);
    if (!result.valid) {
      return NextResponse.json(
        { valid: false, message: result.message },
        { status: 400 }
      );
    }
    
    const userRef = doc(db, "profiles", uid);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
      return NextResponse.json(
        { valid: false, message: 'User profile not found.' },
        { status: 400 }
      );
    }
    
    const userData = userSnap.data();
    const attendanceData = {
      name: userData.name || "No Name",
      rollNumber: userData.roll_number || "No Roll Number"
    };

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const attendanceUrl = new URL('/api/attendance', baseUrl);
    
    const attendanceResponse = await fetch(attendanceUrl.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(attendanceData),
    });

    const attendanceResult = await attendanceResponse.json();

    if (!attendanceResponse.ok) {
      return NextResponse.json(
        {
          valid: true,
          message: `${attendanceResult.error || ''}`
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json({
      valid: true,
      message: `${attendanceResult.message}`
    });
  } catch (error) {
    return NextResponse.json(
      { valid: false, message: 'Invalid request. ' + error },
      { status: 400 }
    );
  }
}
