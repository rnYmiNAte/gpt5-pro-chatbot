// src/lib/db.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // Prevent multiple Prisma instances in dev (Next.js hot reload)
  var prisma: PrismaClient | undefined;
}

export const db = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = db;
