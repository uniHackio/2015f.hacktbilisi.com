import React from 'react'
import H from '../../tools/classNameHelper'

const ratios = ['1by1', '3by1', '8by3', '2by1', '16by9', '4by3', '5by7', '4by5', '5by4']

export default ({className, child, children, ratio="1by1", clip=true, ...props}) => {
  var ratioClass
  if(ratios.indexOf(ratio) !== -1){
    ratioClass = `FlexEmbed-ratio--${ratio}`
  }else if(ratio.indexOf(' ') !==1){
    ratioClass = ratio.split(' ').map((r) => `FlexEmbed-ratio--${r}`).join(' ')
  }

  return (
    <div className={`FlexEmbed ${className ? className : ''} ${clip ? 'FlexEmbed--clip' : ''}`} {...props}>
      {
        (ratioClass)
          ? <div className={`FlexEmbed-ratio ${ratioClass}`}></div>
          : <div className="FlexEmbed-ratio" style={{paddingTop: ratio}}></div>
      }
      <div className={`FlexEmbed-content ${child?'u-fillChild':''}`}>
        {child? child: children}
      </div>


    </div>
  )
}
