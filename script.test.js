const functions = require('./script')

// test('Should return nothing', () => {
//   expect(functions.progress.isNull()).toBeNull()
// })

test('properly adds two numbers', () => {
  expect(functions.sum(1,2)).toBe(3)
})