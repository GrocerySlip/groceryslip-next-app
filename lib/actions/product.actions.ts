'use server';
import { PrismaClient } from '@prisma/client';

export async function getLatestProduct() {
  const { PrismaPg } = await import('@prisma/adapter-pg');
  const pg = await import('pg');

  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const adapter = new PrismaPg(pool);

  const prisma = new PrismaClient({ adapter });

  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' },
  });

  await prisma.$disconnect();
  return data;
}
