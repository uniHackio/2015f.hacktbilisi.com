import React from 'react'
import H from '../../tools/classNameHelper'


/**
 * @TODO:
 *  combine wrap and no wrap
 * @TODO:
 *  way to include responsive settings as json and use brake names for generating
 *  propTypes with @{brakepoint} suffix and make propTypes actualy works
 * @see: https://facebook.github.io/react/docs/reusable-components.html
 */
class Grid extends React.Component {
  static propTypes = {
    align: H.variantModifiers(['Start', 'End', 'Center', 'Baseline', 'Stretch']),
    space: H.variantModifiers(['Start', 'End', 'Center', 'Between', 'Around']),
    content: H.variantModifiers(['Start', 'End', 'Center', 'Between', 'Around']),
    gutter: H.variantModifiers(['None', 'Normal', 'Narrow', 'Wide']),
    direction: H.variantModifiers(['Row', 'RowReverse','Col', 'ColReverse']),
    inline: H.flagModifier,
    wrap: H.flagModifier,
    nowrap: H.flagModifier
  }

  render() {
    return (
      <div className={H.toElementClasses("Grid", H.pickModifiers(this), [this.props.className])} {...H.otherProps(this.constructor.propTypes,this.props)}>
        {this.props.children}
      </div>
    )
  }
}


class GridBlock extends React.Component {
  static propTypes = {
    align: H.variantModifiers(['Start', 'End', 'Center', 'Baseline', 'Stretch']),
    order: H.variantModifiers(['Start1', 'Start2', 'Start3', 'Default', 'End3', 'End2', 'End1']),
    weight: H.variantModifiers(['1', '2', '3', '4', '5', '6', '7', '8']),
    fit: H.flagModifier,//TODO use better way to rescribe flag modifiers
    fillChild: H.flagModifier
  }

  render() {

    return (
      <div className={H.toElementClasses("Grid-block", H.pickModifiers(this), [this.props.className])} {...H.otherProps(this.constructor.propTypes,this.props)}>
        {this.props.children}
      </div>
    )
  }
}


export {Grid, GridBlock}
