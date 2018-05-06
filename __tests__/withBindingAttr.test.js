const reactAmpify = require('../index.js')
const React = require('react')

test('withBindingAttrs functionality', () => {
  // arrangement
  const { withBindingAttrs } = reactAmpify

  // action
  const expected = withBindingAttrs(<input className='test' />, {value: 'data.value'})

  // assertion
  expect(expected).toMatchSnapshot()
})
