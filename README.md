[![Build Status](https://travis-ci.org/jimmy319/react-ampify.svg?branch=master)](https://travis-ci.org/jimmy319/react-ampify)
# react-ampify
:wrench::zap:A collection of utility functions for developing AMP page with React.js

## Quick Start

#### Installation

```
npm i -S react-ampify react
```

Note: React@^16.1.1 is the peer dependency of react-ampify

#### Usage

```javascript
const { createJsonScriptElement } = require('react-ampify')

const TestComponent = () => {
  const json = {
    id: 'test',
    name: 'this is a test'
  }
  return (
    <div>
      { createJsonScriptElement() }
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

#### `withBindingAttrs(element, attrs)`

The syntax of binding attribute of AMP can't be used directly in jsx way.
For example: React will complain if you create element like this: 

```html
<input [value]='state.value' />
```

This function help to append binding attributes to React element.
