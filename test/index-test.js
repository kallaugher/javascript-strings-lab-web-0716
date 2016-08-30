/*global concatenatedString, describe, interpolatedString, it, myString */
console.log('in test file')
it('defines `greeting`', function() {
  console.log('in first it block')
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
