//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Global Header  ----------- */

const Elem = styled.header`
  background : ${props => props.inverse ? 'transparent' : 'white'};
  color      : ${props => props.inverse && 'white'};
  font-size  : 1em;
  position   : relative;
  width      : 100%;
  z-index    : 100;

  > div {
    alignItems     : center;
    display        : flex;
    justifyContent : space-between;
    minHeight      : 4.683em;
    padding        : ${vars.gutterSm};
  }

  a, small {
    ${ mixins.antiAliased() }
  }
`

const Logo = styled.div`
  flex     : 0 0 auto;
  position : relative;
  z-index  : 10;
`

const Nav = styled.div`
  flex       : 0 0 auto;
  text-align : right;

  > button {
    margin-left: 1em;
  }
`

//-----------  Exports  ----------- */

export default { Elem, Logo, Nav }
