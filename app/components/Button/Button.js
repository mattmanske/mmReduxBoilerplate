//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

import MaterialIcon         from 'components/MaterialIcon'
import LoadingSpinner       from 'components/LoadingSpinner'

//-----------  Component  -----------//

const Button = (props) => {
  return (
    <Block.Elem type={props.type} disabled={props.disabled || props.loading} onClick={props.onClick} { ...props }>
      {props.icon &&
        <MaterialIcon icon={props.icon} />
      }

      {props.children &&
        <Block.Inner>{props.children}</Block.Inner>
      }

      {props.loading &&
        <LoadingSpinner />
      }
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

Button.propTypes = {
  type     : PropTypes.string,
  icon     : PropTypes.string,
  size     : PropTypes.oneOf(['lg', 'rg', 'sm']),
  color    : PropTypes.oneOf(['blue', 'red', 'dark-blue', 'gray', 'white']),
  outline  : PropTypes.bool,
  loading  : PropTypes.bool,
  disabled : PropTypes.bool,
  onClick  : PropTypes.func,
}

Button.defaultProps = {
  size     : 'rg',
  color    : 'blue',
  outline  : false,
  loading  : false,
  disabled : false
}

//-----------  Export  -----------//

export default Button
