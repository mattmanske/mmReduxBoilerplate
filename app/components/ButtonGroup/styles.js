//-----------  Imports  -----------//

import styled from 'styled-components'

import vars   from 'styles/variables'
import mixins from 'styles/mixins'

//-----------  Button Group  ----------- */

const Elem = styled.div`
  border-radius : 10em;
  box-shadow    : 0.1rem 0.1rem 0.6rem rgba(0, 0, 0, 0.15);
  display       : inline-block;
  transition    : ${vars.transition};
  white-space   : nowrap;

  > button {
    border-radius : 0;
    box-shadow    : none;

    &:hover {
      box-shadow: none;
    }

    & + button::after {
      ${ mixins.verticalAlign() }

      background : rgba(255, 255, 255, 0.5);
      content    : '';
      height     : 110%;
      left       : -2px;
      width      : 1px;
    }

    &:first-child {
      border-radius: 10em 0 0 10em;
    }

    &:last-child {
      border-radius: 0 10em 10em 0;
    }
  }
`

//-----------  Exports  ----------- */

export default { Elem }
