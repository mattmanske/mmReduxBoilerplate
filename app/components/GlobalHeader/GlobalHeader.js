//-----------  Imports  -----------//

import { Block, Logo, Nav } from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'

import BoundsWrapper        from 'components/BoundsWrapper'

//-----------  Component  -----------//

const GlobalHeader = (props) => {

  return (
    <Block { ...props }>
      <BoundsWrapper>
        <Logo>
          <Link to={'/'}>Home</Link>
        </Logo>
        
        <Nav>
          {props.children}
        </Nav>
      </BoundsWrapper>
    </Block>
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
