const { PrismaClient } = require('@prisma/client')
const readline = require('readline')
const { hashSync } = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  const user = await new Promise(async (res, rej) => {
    rl.question('Enter email: ', (email) => {
      rl.question('Enter password: ', (password) => {
        const hash = hashSync(password, 10)
        prisma.user
          .create({
            data: {
              email,
              password: hash,
              isAdmin: true,
            },
          })
          .then((user) => res(user))
          .catch((error) => rej(error))
        rl.close()
      })
    })
  })
  console.log(`Created Admin User ${user.email}`)
}

main().finally(async () => {
  await prisma.$disconnect()
})
