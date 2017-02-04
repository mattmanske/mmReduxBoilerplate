//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Global Header  ----------- */

export const Block = styled.header`
  background : ${props => props.inverse ? 'transparent' : 'white'};
  color      : ${props => props.inverse && 'white'};
  font-size  : 1.25em;
  position   : relative;
  width      : 100%;
  z-index    : 100;
`

export const Logo = styled.div`
  flex: 0 0 auto;
  position: relative;
  z-index: 10;
`

export const Nav = styled.div`
  flex: 0 0 auto;
  text-align: right;
`
