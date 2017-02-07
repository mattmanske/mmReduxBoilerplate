//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'

//-----------  Modal Wrapper  ----------- */

const Elem = styled.div`
  height         : 100vh;
  left           : 0;
  overflow-y     : scroll;
  pointer-events : ${props => props.open ? 'auto' : 'none'};
  position       : absolute;
  top            : 0;
  width          : 100vw;
  z-index        : 1000;
`

const Popup = styled.div`
  backface-visibility : hidden;
  height              : auto;
  left                : 50%;
  max-width           : 25em;
  opacity             : ${props => props.open ? '1' : '0'};
  padding             : 1em;
  position            : absolute;
  top                 : 5%;
  transform           : ${props => props.open ? 'scale(1) translateX(-50%)' : 'translateX(-50%)'};
  visibility          : ${props => props.open ? 'visible' : 'hidden'};
  width               : 100%;
  z-index             : 2000;
`

const Content = styled.div`
  background       : ${vars.white};
  border-radius    : ${vars.radius};
  box-shadow       : 0.33em 0.33em 2em rgba(0, 0, 0, 0.33);
  margin           : 0 auto;
  opacity          : ${props => props.open ? '1' : '0'};
  padding          : ${props => props.isMobile ? '2em 1.5em 1.5em' : '3em 2.5em 2.5em'};
  position         : relative;
  transform        : ${props => props.open ? 'scale(1)' : 'scale(0.7)'};
  transform-origin : 50% 0;
  transition       : 0.15s ease-in-out;

  > i:first-child {
    color      : ${vars.grayDark};
    font-size  : 1.953em;
    font-style : normal;
    position   : absolute;
    right      : 0.5em;
    top        : 0.5em;

    &:hover {
      color: ${vars.red} !important;
    }
  }
`

//-----------  Exports  ----------- */

export default { Elem, Popup, Content }
