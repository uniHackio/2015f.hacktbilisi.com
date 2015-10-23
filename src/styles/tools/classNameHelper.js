import R from 'ramda'

var toElementClasses = R.curry(function(elementClass, props, otherClasses){
  return R.compose(
    R.join(' '),
    R.concat(R.__, otherClasses),
    R.prepend(elementClass),
    R.flatten,
    R.values,
    R.mapObjIndexed((values, key) => values.map((val)=> `${elementClass}--${key}${val}`)),
    R.mapObj(
      R.cond([
        [R.is(Boolean), R.always([''])] ,
        [R.T,           R.compose(R.split(' '), R.ifElse(R.is(Number), R.toString, R.identity))]
      ])
    )
  )(props)

})

var pickModifiers = function(obj){
  return R.pickBy(
    R.flip(
      R.has(
        R.__,
        obj.constructor.propTypes
      )
    ),
    R.pickBy(R.compose(R.not,R.isNil),obj.props)
  )
}

var responsiveValueRegEx = /(^[^@]+)@([^@]+)$/
var isResponsiveValue = R.test(responsiveValueRegEx)
var baseFromResponsiveValue = R.compose(R.nth(1), R.match(responsiveValueRegEx))

var variantModifiers = R.curry(function(modifierNames, props, propName, componentName) {

  if(props[propName] == null){
    return
  }

  var parseValues = R.compose(R.reject(R.equals('')), R.map(R.trim), R.split(' '))
  var values = parseValues(props[propName])
  var unknownValues = R.differenceWith(function(value,target){
    if(isResponsiveValue(value)){
      return baseFromResponsiveValue(value) == target
    }else{
      return value == target
    }
  }, values, modifierNames)



  if (unknownValues.length) {
    var unknownLenses = R.map(R.lensIndex, R.reject(R.equals(-1), R.reduce(function(idx,unknownValue){
      return idx.concat(R.indexOf(unknownValue,values))
    }, [], unknownValues)))


    var valuesToPrint = R.join(' ', R.reduce(function(acc,lense){
      return R.over(lense, (s) => `{${s}}`, acc)
    }, values, unknownLenses))

    return new Error(`Invalid prop \`${propName}\` of value \`${valuesToPrint}\` supplied to \`${componentName}\`, expected one of ["${modifierNames.join('", "')}"]`)
    // Failed propType: .
  }
})
var flagModifier = function(props, propName, componentName) {
  if(props[propName] !== undefined && props[propName] !== true){
    return new Error(`Invalid prop \`${propName}\` of value \`${props[propName]}\` supplied to \`${componentName}\`, expected \`true\``)
  }
}
var otherProps = function(propTypes,props){
  return R.omit(['className','children'].concat(R.keys(propTypes)),props)
}
export default {toElementClasses, pickModifiers, variantModifiers, flagModifier, isResponsiveValue, baseFromResponsiveValue,otherProps}
