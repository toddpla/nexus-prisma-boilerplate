import { rule } from 'nexus-plugin-shield'

const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx, info) => {
    const userId = ctx?.token?.sub
    return Boolean(userId)
  },
)

export const rules = {
  Query: {
    users: isAuthenticated,
  },
  // Mutation: {
  //   deletePost: isAuthenticated,
  // },
}
