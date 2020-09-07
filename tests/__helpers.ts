import {
  createTestContext as originalCreateTestContext,
  TestContext,
} from 'nexus/testing'
export function createTestContext(): TestContext {
  let ctx = {} as TestContext
  beforeAll(async () => {
    Object.assign(ctx, await originalCreateTestContext())
    await ctx.app.start()
  })
  afterAll(async () => {
    await ctx.app.stop()
    await ctx.app.db.client.$disconnect()
    console.log(ctx)
  })
  return ctx
}
