import { main } from 'src'

describe(main, () => {
  it("should return 'Hello, world!'", () => {
    expect(main()).toBe('Hello, world!')
  })
})
