import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Hermoine",
      password: "GrEa888!",
      email: 'hgranger@gryffindor.me',
      token: '645522'
    }
  });
}

main();