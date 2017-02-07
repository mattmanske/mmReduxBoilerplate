//-----------  Imports  -----------//

import Block                from './styles'

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

function getModal(type){
  return MODAL_COMPONENTS[type] || null
}

//-----------  Component  -----------//

class ModalWrapper extends React.Component {

  state = {
    open  : !!getModal(this.props.modalType),
    modal : getModal(this.props.modalType),
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      open  : !!getModal(nextProps.modalType),
      modal : getModal(nextProps.modalType),
    })
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
    const { props, state } = this

    const Modal = state.modal

    const styleProps = { open: state.open, isMobile: props.isMobile }

    return (
      <Block.Elem { ...styleProps }>
        <PageShade active={state.open} onClick={this.closeModal} />

        <Block.Popup { ...styleProps }>
          <Block.Content { ...styleProps }>
            <MaterialIcon icon='close' onClick={this.closeModal} />
            {Modal &&
              <Modal {...props.modalProps} />
            }
          </Block.Content>
        </Block.Popup>
      </Block.Elem>
    )
  }
}

//-----------  Prop Types  -----------//

ModalWrapper.propTypes = {
  isMobile   : PropTypes.bool.isRequired,
  modalType  : PropTypes.string,
  modalProps : PropTypes.object,
  onClose    : PropTypes.func.isRequired
}

//-----------  Export  -----------//

export default ModalWrapper
