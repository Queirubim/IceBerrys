import { NextResponse } from 'next/server';

import { carousel } from '../data';

export async function GET() {
  return NextResponse.json(carousel);
}
