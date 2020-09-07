import { schema } from 'nexus'

export const Query = schema.queryType({
  definition(t) {
    t.crud.users({
      pagination: true,
      ordering: true,
    })
    t.crud.user()
  },
})
