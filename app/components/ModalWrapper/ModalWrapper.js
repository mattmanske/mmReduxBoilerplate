//-----------  Imports  -----------//

import Block                from './styles'

import get                  from 'lodash/get'

import React, { PropTypes } from 'react'

import Button               from 'components/Button'
import PageShade            from 'components/PageShade'
import MaterialIcon         from 'components/MaterialIcon'

import DemoForm             from 'containers/DemoForm'

//-----------  Definitions  -----------//

const MODAL_COMPONENTS = {
  DEMO_FORM: DemoForm,
}
//-----------  Helpers  -----------//

function getModal(child){
  return MODAL_COMPONENTS[child] || null
}

//-----------  Component  -----------//

class ModalWrapper extends React.Component {

  state = {
    open       : !!getModal(this.props.child),
    child      : getModal(this.props.child),
    props      : get(this.props, 'props', {}),
    size       : get(this.props, 'options.size', 'rg'),
    transition : false,
  }

  shouldComponentUpdate(nextProps, nextState){
    const diffPropsChild = (this.props.child != nextProps.child)
    const diffStateChild = (this.state.child != nextState.child)

    return (diffPropsChild || diffStateChild)
  }

  componentWillReceiveProps(nextProps){
    const thisModal = getModal(this.props.child)
    const nextModal = getModal(nextProps.child)
    let newState, nextState = {}

    if (!!thisModal && !!nextModal){
      newState = {
        open       : false,
        transition : true
      }
      nextState = {
        open       : true,
        child      : nextModal,
        size       : get(nextProps, 'options.size', 'rg'),
        props      : get(nextProps, 'props', {}),
        transition : false
      }
    } else if (!!nextModal){
      newState = {
        open       : true,
        child      : nextModal,
        size       : get(nextProps, 'options.size', 'rg'),
        props      : get(nextProps, 'props', {}),
        transition : false
      }
    } else {
      newState = {
        open       : false,
        transition : false
      }
      nextState = {
        child : null,
        size  : 'rg',
        props : {},
      }
    }

    this.setState(newState, () => setTimeout(() => this.setState(nextState), 150))
  }

  //-----------  Event Handlers  -----------//

  closeModal = (callback) => {
    this.setState({ open: false }, () => {
      setTimeout(() => {
        this.props.onClose()
        if (_.isFunction(callback)){ callback() }
      }, 250)
    })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { open, size, props, transition, child: Modal } = this.state
    const { isMobile, clickToClose, options } = this.props
    const { preventClose } = options

    const styleProps = { open, size, isMobile }
    const bgStyle    = !props.bgImage ? {} : {
      backgroundImage : `url(${props.bgImage})`,
    }

    const shadeClick = preventClose ? null : this.closeModal

    return (
      <Block.Elem { ...styleProps }>
        <PageShade active={open || transition} onClick={shadeClick} />

        <Block.Popup { ...styleProps }>
          <Block.Content { ...styleProps } style={bgStyle}>
            {Modal &&
              <Modal { ...props } />
            }
            {!preventClose &&
              <MaterialIcon icon='close' onClick={this.closeModal} />
            }
          </Block.Content>
        </Block.Popup>
      </Block.Elem>
    )
  }
}

//-----------  Prop Types  -----------//

ModalWrapper.propTypes = {
  child    : PropTypes.string,
  props    : PropTypes.object,
  options  : PropTypes.object,
  isMobile : PropTypes.bool.isRequired,
  onClose  : PropTypes.func.isRequired
}

//-----------  Export  -----------//

export default ModalWrapper
