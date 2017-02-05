//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'

import BoundsWrapper        from 'components/BoundsWrapper'

//-----------  Component  -----------//

const GlobalHeader = (props) => {

  return (
    <Block.Elem { ...props }>
      <BoundsWrapper>
        <Block.Logo>
          <Link to={'/'}>Home</Link>
        </Block.Logo>

        <Block.Nav>
          {props.children}
        </Block.Nav>
      </BoundsWrapper>
    </Block.Elem>
  )
}

//-----------  Prop Types  -----------//

GlobalHeader.propTypes = {
  inverse  : PropTypes.bool,
  children : PropTypes.node.isRequired
}

GlobalHeader.defaultProps = {
  inverse: false
}

//-----------  Export  -----------//

export default GlobalHeader
