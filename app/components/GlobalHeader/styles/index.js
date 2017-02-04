//-----------  Imports  -----------//

import styled        from 'styled-components'

import vars          from 'styles/variables'

import BoundsWrapper from 'components/BoundsWrapper'

//-----------  Global Header  ----------- */

export const Block = styled.header`
  background : ${props => props.inverse ? 'transparent' : 'white'};
  color      : ${props => props.inverse && 'white'};
  font-size  : 1.25em;
  position   : relative;
  width      : 100%;
  z-index    : 100;
`
export const Bounds = styled(BoundsWrapper)`
  alignItems     : center;
  display        : flex;
  justifyContent : space-between;
  maxWidth       : none;
  minHeight      : 4.683em;
  padding        : ${vars.gutterSm};
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
