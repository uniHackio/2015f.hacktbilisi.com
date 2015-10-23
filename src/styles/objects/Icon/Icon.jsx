import React from 'react'
import R from 'ramda'
const iconNames = [
  'close', 'closeAlt', 'arrowDownAlt', 'arrowDown', 'arrowLeftAlt',
  'arrowLeft', 'arrowRightAlt', 'arrowRight', 'arrowUpAlt',
  'arrowUp', 'burger', 'handbag', 'heart', 'magnifier',
  'minus','plus',
  'user', 'share', 'pinterest', 'facebook', 'twitter'
]



var icons = R.zipObj(
  iconNames,
  R.map(
    (icon) => ({className}) => (<i className={`Icon Icon--${icon} ${className? className : ''}`}></i>),
    iconNames
 )
)

export default icons
