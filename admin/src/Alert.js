import React from 'react'
import PropTypes from 'prop-types'
import styles from './Alert.module.css'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInfoCircle,
  faThumbsUp,
  faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

function getIcon(props = {}){
  switch(props.type){
    case 'info':
      return faInfoCircle
    case 'warning':
      return faExclamationTriangle
    case 'success':
      return faThumbsUp
    default:
      return faExclamationTriangle
  }
}

function Alert(props = {}) {
  return<div className={ classnames(styles['alert'], styles[`alert-${ props.type }`]) } role="alert">
    <div className={ styles['alert-icon'] }>
      <FontAwesomeIcon icon={ getIcon(props) } size='lg' fixedWidth />
    </div>
    <div className={ styles['alert-message'] }>
      <h2 className={ styles['alert-title'] }>
        { props.title }
      </h2>
      <div className={ styles['alert-copy'] }>
        { props.children }
      </div>
    </div>
  </div>
}

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'warning', 'success']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string
  ]).isRequired
}

export default Alert
