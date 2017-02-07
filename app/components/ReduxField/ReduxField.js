//-----------  Imports  -----------//

import Block                from './styles'

import _                    from 'lodash'
import moment               from 'moment'

import React, { PropTypes } from 'react'

import MaskedInput          from 'react-text-mask'
import DatePicker           from 'react-datepicker'

//-----------  Component  -----------//

const ReduxField = (field) => {
  const { input, meta, inputOpts, ...props } = field
  let inputBlock = ''

  const id           = props.id || `${props.name}[${props.value}]`
  const isInvalid    = !!(meta.touched && meta.error)
  const prependLabel = (props.prependLabel) || (!_.includes(['radio', 'checkbox'], props.type))

  if ('textarea' == props.type){
    inputBlock = (
      <textarea
        {...input}
        {...inputOpts}
        id={id}
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      />
    )
  } else if ('date' == props.type){
    inputBlock = (
      <DatePicker
        {...input}
        autoComplete='off'
        dateForm='MM/DD/YYYY'
        minDate={inputOpts.min}
        maxDate={inputOpts.max}
        selected={input.value ? moment(input.value) : null}
      />
    )
  } else if ('select' == props.type){
    inputBlock = (
      <select
        {...input}
        {...inputOpts}
        id={id}
        type={props.type}
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      >
        {props.children}
      </select>
    )
  } else if (_.has(inputOpts, 'mask') || _.has(inputOpts, 'pipe')){
    inputBlock = (
      <MaskedInput
        {...input}
        {...inputOpts}
        id={id}
        guide={true}
        type={props.type}
        placeholderChar={'\u2000'}
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      />
    )
  } else {
    inputBlock = (
      <input
        {...input}
        {...inputOpts}
        id={id}
        type={props.type}
        disabled={props.disabled}
        required={props.required}
        placeholder={props.placeholder}
      />
    )
  }

  return (
    <Block.Elem isInvalid={isInvalid}>
      {prependLabel && props.label &&
        <Block.Label htmlFor={id} isInvalid={isInvalid}>
          {props.label}{props.required && <sup>*</sup>}
        </Block.Label>
      }

      <Block.Interior>
        {props.inputIcon &&
          <i className='material-icons'>{props.inputIcon}</i>
        }

        {props.prefix &&
          <Block.Prefix>{props.prefix}</Block.Prefix>
        }

        {inputBlock}

        {props.suffix && input.value &&
          <Block.Suffix>{props.suffix}</Block.Suffix>
        }

        <Block.Errors>{meta.error || ' '}</Block.Errors>
      </Block.Interior>

      {!prependLabel && props.label &&
        <Block.Label htmlFor={id} isInvalid={isInvalid}>
          {props.label}{props.required && <sup>*</sup>}
        </Block.Label>
      }

      {props.notes && <Block.Notes>{props.notes}</Block.Notes>}
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

ReduxField.propTypes = {
  type         : PropTypes.oneOf(['checkbox', 'select', 'color', 'date', 'datetime', 'datetime-local', 'email', 'hidden', 'month', 'number', 'password', 'radio', 'range', 'search', 'tel', 'text', 'textarea', 'time', 'url', 'week']),
  input        : PropTypes.object,
  disabled     : PropTypes.bool,
  required     : PropTypes.bool,
  placeholder  : PropTypes.string,
  notes        : PropTypes.node,
  label        : PropTypes.node,
  inputIcon    : PropTypes.string,
  prependLabel : PropTypes.bool
}

ReduxField.defaultProps = {
  type         : 'text',
  input        : {},
  disabled     : false,
  required     : false,
  placeholder  : ''
}

//-----------  Export  -----------//

export default ReduxField
