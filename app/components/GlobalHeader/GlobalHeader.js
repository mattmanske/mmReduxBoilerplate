//-----------  Imports  -----------//

import { Block, Bounds, Logo, Nav } from './styles'

import React, { PropTypes } from 'react'
import { Link }             from 'react-router'

//-----------  Component  -----------//

const GlobalHeader = (props) => {

  return (
    <Block { ...props }>
      <Bounds>
        <Logo>
          <Link to={'/'}>Home</Link>
        </Logo>

        <Nav>
          {props.children}
        </Nav>
      </Bounds>
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
