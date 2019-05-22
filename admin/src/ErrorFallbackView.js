import React from 'react'
import styles from './ErrorFallbackView.module.css'
import sharedStyles from './App.module.css'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

class ErrorFallbackView extends React.Component {

  render() {
    const { message } = this.props

    return <div className={ styles['error-fallback'] }>
      <div className={ classnames(sharedStyles['alert'], sharedStyles['alert-warning']) } role="alert">
        <div className={ sharedStyles['alert-icon'] }>
          <FontAwesomeIcon icon={ faExclamationTriangle } size='lg' fixedWidth />
        </div>
        <div className={ sharedStyles['alert-message'] }>
          <h2 className={ sharedStyles['alert-title'] }>
            Whoops, this is embarrassing.
          </h2>
          <div className={ sharedStyles['alert-copy'] }>
            <p>
              Some unexpected error has occurred.
            </p>
            <p>
              You might be able to find a solution to this
              problem in the <a href="https://wordpress.org/support/plugin/font-awesome/" rel="noopener noreferrer" target="_blank">plugin's support forum</a>.
              If not, you could post about the problem there.
            </p>
            {
              message &&
              <div>
                Please include the following if you make an error report:
                <div className={ styles['additional-message'] }>
                  <p>
                    { message }
                  </p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  }
}

export default ErrorFallbackView
