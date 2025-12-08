import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log("✅ Conexão com MongoDB OK!");
  } catch (err) {
    console.error("❌ Falha ao conectar:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();

