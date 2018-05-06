const React = require('react')

const convertToBindable = function (key) {
  return `[${key}]`
}

module.exports = {
  /*
	* Inline script element can't be created by using jsx syntax (security concern).
	*	This function use dangerouslySetInnerHTML property to generate script element with json data for you.
	*	@param json
	*		json data which will be the inner content of script element
	*	@return
	*		script element with the given json data
	*/
  createJsonScriptElement: function (json) {
    return (
      <script type='application/json' dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />
    )
  },
  /*
  *	The syntax of binding attribute of AMP can't be used directly in jsx way.
  * For example: React will complain if you create element like this ... <input [value]='state.value' />.
  * This function help to append binding attributes to React element.
  * @param element
  *		the react element which binding attributes will be attached to
  *	@param attrs
  *		the binding attributes
  *	@return
  *		the react element with binding attributes
  */
  withBindingAttrs: function (element, attrs) {
    const elementProps = element.props
    const props = {
      ...elementProps,
      ...Object.keys(attrs).reduce((acc, key) => {
        return {
          ...acc,
          [convertToBindable(key)]: attrs[key]
        }
      }, {})
    }

    return React.cloneElement(element, props, element.props.children)
  }
}
