
//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

import Button               from 'components/Button'

//-----------  Helpers  -----------//

function findState({ submitting, submitSucceeded, submitFailed }){
  if (submitting){ return 'loading' }
  if (submitFailed){ return 'error' }
  if (submitSucceeded){ return 'success' }
  return null
}

//-----------  Component  -----------//

class ReduxSubmit extends React.Component {

  state = { btnState: null }

  shouldComponentUpdate(nextProps, nextState){
    const isDirty     = (this.props.pristine != nextProps.pristine)
    const isDifferent = (this.state.btnState != nextState.btnState)
    const isSucceeded = (this.props.submitSucceeded != nextProps.submitSucceeded)
    const canChange   = (this.props.canReset) ? true : ('success' != this.state.btnState)
    return (isDirty || isSucceeded || (isDifferent && canChange))
  }

  componentWillReceiveProps(nextProps){
    const propsChange = (this.props.submitting != nextProps.submitting)
                        || (this.props.submitFailed != nextProps.submitFailed)
                        || (this.props.submitSucceeded != nextProps.submitSucceeded)

    if (propsChange){
      const nextState = findState(nextProps)
      clearTimeout(this.canReset)

      if ('error' == nextState)
        this.setState({ btnState: nextState }, this.canResetState)
      else if ('loading' == this.state.btnState && 'success' == nextState)
        this.canReset = setTimeout(() => this.setState({ btnState: nextState }), 750)
      else if ('success' == this.state.btnState && this.props.canReset)
        this.canReset = setTimeout(() => this.setState({ btnState: null }), 1250)
      else
        this.setState({ btnState: nextState })
    }
  }

  //-----------  Helpers  -----------//

  canResetState = () => {
    this.canReset = setTimeout(() => this.setState({ btnState: null }), 1200)
  }

  //-----------  Event Handlers  -----------//

  onReset = (evt) => {
    this.props.reset()
  }

  onSubmit = (evt) => {
    if (this.props.submitFailed)
      this.setState({ btnState: 'error' }, this.canResetState)
  }

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    const btnColor  = ('error' == state.btnState) ? 'red' : 'blue'
    const isLoading = ('loading' == state.btnState)

    return(
      <Block.Elem>
        <Block.Reset disabled={props.pristine || isLoading} onClick={this.onReset}>Reset</Block.Reset>
        <Button type='submit' color={btnColor} onClick={this.onSubmit} loading={isLoading} disabled={props.submitSucceeded}>
          Submit
        </Button>
      </Block.Elem>
    )
  }
}

//-----------  Prop Types  -----------//

ReduxSubmit.propTypes = {
  text            : PropTypes.string.isRequired,
  reset           : PropTypes.func.isRequired,
  pristine        : PropTypes.bool.isRequired,
  submitSucceeded : PropTypes.bool.isRequired,
  canReset        : PropTypes.bool,
  submitting      : PropTypes.bool.isRequired,
  submitFailed    : PropTypes.bool.isRequired,
  submitSucceeded : PropTypes.bool,
}

ReduxSubmit.defaultProps = {
  canReset : false
}

//-----------  Export  -----------//

export default ReduxSubmit
