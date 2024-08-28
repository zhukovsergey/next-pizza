import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';

  if (!query) {
    return NextResponse.json([]);
  }

  const products = await prisma.product.findMany();
  const prod = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))

  return NextResponse.json(prod);
}