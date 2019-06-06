import React from 'react'
import styles from './ErrorFallbackView.module.css'
import Alert from './Alert'

class ErrorFallbackView extends React.Component {

  render() {
    const { message } = this.props

    return <div className={ styles['error-fallback'] }>
      <Alert title='Whoops, this is embarrassing' type='warning'>
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
      </Alert>
    </div>
  }
}

export default ErrorFallbackView
