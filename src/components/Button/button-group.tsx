import React from 'react'
import classNames from 'classnames'
import { ButtonSize } from './button'

export interface BaseButtonGroupProps {
  className?: string
  size?: ButtonSize
}

const ButtonGroup: React.FC<BaseButtonGroupProps> = props => {
  let { className, size, children, ...rest } = props
  const classes = classNames('fx-btn-group', className)
  return (
    <div className={classes} {...rest}>
      {size && children
        ? React.Children.map(children, child =>
            React.cloneElement(child as React.ReactElement, { size })
          )
        : children}
    </div>
  )
}

export default ButtonGroup
