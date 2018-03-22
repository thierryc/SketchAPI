/* globals expect, test */
import { Slice } from '../Slice'

test('should create a new slice', () => {
  const slice = new Slice()
  // check that a shape can be logged
  log(slice)
  expect(slice.type).toBe('Slice')
})

test('should create a new shape with the default style', () => {
  const slice = new Slice()
  expect(slice.type).toBe('Slice')
})
