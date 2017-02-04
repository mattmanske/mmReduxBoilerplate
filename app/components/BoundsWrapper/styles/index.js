//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Bounds Wrapping  -----------//

export const Block = styled.div`
  margin-left  : auto;
  margin-right : auto;
  max-width    : ${props => {
    switch(props.type){
      case 'block': return vars.blockWidth
      case 'compact': return vars.compactWidth
      case 'small': return vars.smallWidth
      default: return vars.maxWidth
    }
  }};
  padding      : ${vars.gutterLg};
  position     : relative;
`
