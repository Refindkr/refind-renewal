import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;
const name = process.env.ADMIN_NAME || "관리자";

if (!email || !password) {
  console.error("ADMIN_EMAIL and ADMIN_PASSWORD env vars are required");
  process.exit(1);
}

const hashed = await bcrypt.hash(password, 12);

const user = await prisma.user.upsert({
  where: { email },
  update: { password: hashed, role: "admin" },
  create: { email, password: hashed, name, role: "admin" },
});

console.log(`admin ready: ${user.email} (role: ${user.role})`);
await prisma.$disconnect();
