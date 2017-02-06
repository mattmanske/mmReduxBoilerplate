//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

// import InputWrapper         from 'components/InputWrapper'
// import ReduxSubmit          from 'components/ReduxSubmit'

import { isEmail,
         isRequired }       from 'utils/forms'

//-----------  Definitions  -----------//

const form = 'demo-form'

//-----------  Validation  -----------//

function validate(values){
  const errors = {}
  return errors
}

//-----------  Component  -----------//

class DemoForm extends React.Component {

  render(){
    const { props, state } = this

    return (
      <Block.Elem>
      </Block.Elem>
    )
  }
}

//-----------  Prop Types  -----------//

DemoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

//-----------  Export  -----------//

export default reduxForm({ form, validate })(DemoForm)
