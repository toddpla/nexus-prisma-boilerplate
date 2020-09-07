import { schema } from 'nexus'

export const User = schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.firstName()
    t.model.lastName()
    t.model.email()
  },
})
