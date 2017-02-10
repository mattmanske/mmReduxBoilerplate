//-----------  Imports  -----------//

import { injectGlobal } from 'styled-components'

import TextStyles       from 'styles/globals/text'
import FontStyles       from 'styles/globals/font'
import FormStyles       from 'styles/globals/form'
import InputStyles      from 'styles/globals/inputs'
import SelectStyles     from 'styles/globals/select'
import SelectorStyles   from 'styles/globals/selectors'
import OtherStyles      from 'styles/globals/other'

import vars             from 'styles/variables'
import mixins           from 'styles/mixins'

//-----------  Exports  -----------//

injectGlobal`
  *, *:after, *:before {
    box-sizing: border-box
  }

  html, body {
    height : 100%;
    width  : 100%;
  }

  #app {
    background-color : ${ vars.white };
    min-height       : 100%;
    min-width        : 100%;
  }

  ${ TextStyles }
  ${ FontStyles }
  ${ FormStyles }
  ${ InputStyles }
  ${ SelectStyles }
  ${ SelectorStyles }
  ${ OtherStyles }
`
