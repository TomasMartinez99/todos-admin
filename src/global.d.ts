// global.d.ts
import { PrismaClient } from '@prisma/client';

/* eslint-disable no-var */
declare global {
  // Declara que el objeto global puede tener una propiedad 'prisma'
  var prisma: PrismaClient | undefined;
}
/* eslint-enable no-var */

export {};
