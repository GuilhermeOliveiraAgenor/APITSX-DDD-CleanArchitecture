// src/config/prisma.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // opcional, para debug
})

export { prisma }
