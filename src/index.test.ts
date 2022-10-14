import { main } from './index'

describe(main, () => {
  it("should return 'Hello, world!'", () => {
    expect(main()).toBe('Hello, world!')
  })
})
