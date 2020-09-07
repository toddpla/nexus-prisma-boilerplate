import { shield } from 'nexus-plugin-shield'
import { use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'
import { auth } from 'nexus-plugin-auth0'
import { rules } from './permissions'

use(
  auth({
    auth0Audience: 'https://lendle.eu.auth0.com/api/v2/',
    auth0Domain: 'lendle.eu.auth0.com',
  }),
)

use(prisma({ features: { crud: true } }))

use(shield({ rules }))
