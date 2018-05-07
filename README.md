[![Build Status](https://travis-ci.org/jimmy319/react-ampify.svg?branch=master)](https://travis-ci.org/jimmy319/react-ampify)
# react-ampify
A collection of utility functions for developing AMP page with React.js.:wrench::zap:

## Quick Start

#### Installation

```
npm i -S react-ampify react
```

Note: `React@^16.1.1` is the peer dependency of react-ampify

#### Usage

```javascript
import { createJsonScriptElement } from 'react-ampify'

const TestComponent = () => {
  const json = {
    id: 'test',
    name: 'this is a test'
  }
  return (
    <div>
      { createJsonScriptElement(json) }
    </div>
  )
}

/*
will render:
<div>
  <script type="application/json">
    {
      "id": "test",
      "name": "this is a test"
    }
  </script>
</div>
*/ 
```

## Functions

#### `createJsonScriptElement(json)`

Inline script element can't be created by using jsx syntax (security concern). This function help you to inject json into script element

##### params:

name | type | description
--- | --- | ---
json | Object | json data which will be attached to script element as its inner content

##### example:

```javascript
import { createJsonScriptElement } from 'react-ampify'

const AmpState = ({ state }) => (
  <amp-state id='myState'>
    { createJsonScriptElement(state) }
  </amp-state>
)
```

#### `withBindingAttrs(element, attrs)`

The syntax of binding attribute of AMP can't be used directly in jsx way.
For example: React will complain if you create element like this: 

```html
<input [value]='state.value' />
```

This function help to append binding attributes to React element.

##### params:

name | type | description
--- | --- | ---
element | React Element | the react element which binding attributes will be attached to
attrs | Object | the attributes you want to bind

##### example:

```javascript
import { withBindingAttrs } from 'react-ampify'

const Input = () => (
  withBindingAttrs(<input type='text' />, {value: 'myState.value'})
)
```

## License

`react-ampify` is [MIT Licenced](https://github.com/jimmy319/react-ampify/blob/master/LICENSE)
