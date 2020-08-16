import { worldCode } from '../src/welcome'

describe('welcome.ts', () => {
  test('worldCode()', () => {
    expect(worldCode()).toBe(42)
  })
})
