//-----------  Imports  -----------//

import { Block }            from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

const BoundsWrapper = (props) => (
  <Block { ...props }>
    {props.children}
  </Block>
)

//-----------  Prop Types  -----------//

BoundsWrapper.propTypes = {
  type     : PropTypes.oneOf(['block', 'compact', 'small']),
  children : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default BoundsWrapper
