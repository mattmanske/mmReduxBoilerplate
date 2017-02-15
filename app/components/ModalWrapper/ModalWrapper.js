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
    open       : !!getModal(this.props.modalType),
    modal      : getModal(this.props.modalType),
    props      : this.props.modalProps || {},
    transition : false,
  }

  componentWillReceiveProps(nextProps){
    const thisModal = getModal(this.props.modalType)
    const nextModal = getModal(nextProps.modalType)

    if (!!thisModal && !!nextModal){
      this.setState({
        open       : false,
        props      : this.props.modalProps || {},
        transition : true
      }, () => {
        setTimeout(() => {
          this.setState({
            open       : true,
            modal      : nextModal,
            props      : nextProps.modalProps || {},
            transition : false
          })
        }, 150)
      })
    } else {
      this.setState({
        open  : !!nextModal,
        modal : nextModal,
        props : nextProps.modalProps || {},
      })
    }
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
    const { open, props, transition, modal: Modal } = this.state

    const styleProps = { open, isMobile: this.props.isMobile }
    const bgStyle    = !props.bgImage ? {} : {
      backgroundImage : `url(${props.bgImage})`,
    }

    return (
      <Block.Elem { ...styleProps }>
        <PageShade active={open || transition} onClick={this.closeModal} />

        <Block.Popup { ...styleProps }>
          <Block.Content { ...styleProps } style={bgStyle}>
            <MaterialIcon icon='close' onClick={this.closeModal} />
            {Modal &&
              <Modal { ...props } />
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
