const reactAmpify = require('../index.js')
const React = require('react')

test('createJsonScriptElement functionality', () => {
  // arrangement
  const { createJsonScriptElement } = reactAmpify
  const json = {
    'id': 'this is a test',
    'name': 'works like a charm'
  }

  // action
  const expected = createJsonScriptElement(json)

  // assertion
  expect(expected).toMatchSnapshot()
})
