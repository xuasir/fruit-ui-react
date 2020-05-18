import React, { useState, useCallback } from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import Trasition from '../Transition'

export type AlertType = 'success' | 'info' | 'warning' | 'error'

export interface BaseProps {
  type: AlertType
  title?: string
  description: string
  closeAble?: boolean
  showIcon?: boolean
  closeText?: string
}

const Alert: React.FC<BaseProps> = (props: BaseProps) => {
  let {
    type,
    title,
    description,
    closeAble,
    showIcon,
    closeText,
    ...restPorps
  } = props
  let wrapClasses = classNames('fx-alert', {
    [`fx-alert-${type}`]: type
  })

  let [closeAlert, setCloseAlert] = useState(true)
  let onClickCloseBtn = useCallback(() => {
    setCloseAlert(false)
  }, [])

  function renderCloseBtn(): React.ReactNode {
    return (
      <>
        {closeText ? (
          <span className="fx-alert-close_btn" onClick={onClickCloseBtn}>
            {closeText}
          </span>
        ) : (
          <span className="fx-alert-close_btn" onClick={onClickCloseBtn}>
            <Icon icon="close" />
          </span>
        )}
      </>
    )
  }
  return (
    <Trasition in={closeAlert} timeout={300} animation="zoom-in-top">
      <div className={wrapClasses} {...restPorps}>
        {showIcon ? (
          <Icon
            className="fx-alert-icon"
            icon={type}
            size={title ? '2x' : '1x'}
          />
        ) : (
          ''
        )}
        <div className="fx-alert-content">
          {title ? <span className="fx-alert-title">{title}</span> : ''}
          <p className="fx-alert-description">{description}</p>
          {closeAble ? renderCloseBtn() : ''}
        </div>
      </div>
    </Trasition>
  )
}

Alert.defaultProps = {
  type: 'info',
  closeAble: true,
  showIcon: false
}

export default Alert
