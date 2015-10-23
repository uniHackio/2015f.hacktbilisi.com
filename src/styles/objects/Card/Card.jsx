import React from 'react'
export default ({content, active, className, overlayClassName, ...props}) => {
  return (
    <div className={`Card ${className?className:''} ${active?'Card--active':''} u-fillChild`} {...props}>
      <div className={`Card-overlay ${overlayClassName?overlayClassName:''}`}></div>
      <div className="Card-content u-fillChild">
        {content}
      </div>
    </div>
  )
}
