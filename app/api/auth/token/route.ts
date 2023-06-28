import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET || 12345;

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret, raw: true });

  return NextResponse.json({ token }, { status: 200 });
} 