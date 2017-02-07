//-----------  Imports  -----------//

import styled  from 'styled-components'

import vars    from 'styles/variables'
import mixins  from 'styles/mixins'
import helpers from 'styles/helpers'

//-----------  Helpers  ----------- */

const isDisabled = (props) => {
  return (props.disabled || props.loading)
}

const isGlyph = (props) => {
  return (props.icon && !props.children)
}

const fontSize = (props) => {
  switch(props.size){
    case 'lg' : return '1.25em'
    case 'sm' : return '0.8em'
    default   : return '1em'
  }
}

const fontColor = (props) => {
  if (!props.outline) return vars.white

  switch(props.color){
    case 'blue'      : return vars.blueLight
    case 'red'       : return vars.red
    case 'dark-blue' : return vars.blue
    case 'gray'      : return vars.gray
    default          : return vars.white
  }
}

const fontHoverColor = (props) => {
  if (!props.outline) return vars.white

  switch(props.color){
    case 'blue'      : return helpers.toRgb(vars.blueLight, 0.5)
    case 'red'       : return helpers.toRgb(vars.red, 0.5)
    case 'dark-blue' : return helpers.toRgb(vars.blue, 0.5)
    case 'gray'      : return helpers.toRgb(vars.gray, 0.5)
    default          : return helpers.toRgb(vars.white, 0.5)
  }
}

const borderColor = (props) => {
  if (!props.outline) return 'transparent'

  switch(props.color){
    case 'blue'      : return vars.blueLight
    case 'red'       : return vars.red
    case 'dark-blue' : return vars.blue
    case 'gray'      : return vars.gray
    default          : return vars.white
  }
}

const borderHoverColor = (props) => {
  if (!props.outline) return 'transparent'

  switch(props.color){
    case 'blue'      : return helpers.toRgb(vars.blueLight, 0.5)
    case 'red'       : return helpers.toRgb(vars.red, 0.5)
    case 'dark-blue' : return helpers.toRgb(vars.blue, 0.5)
    case 'gray'      : return helpers.toRgb(vars.gray, 0.5)
    default          : return helpers.toRgb(vars.white, 0.5)
  }
}

const backgroundColor = (props) => {
  if (props.outline) return helpers.toRgb(vars.white, 0.5)

  switch(props.color){
    case 'blue'      : return vars.blueLight
    case 'red'       : return vars.red
    case 'dark-blue' : return vars.blue
    case 'gray'      : return vars.gray
    default          : return vars.white
  }
}

const backgroundHoverColor = (props) => {
  if (props.outline) return helpers.toRgb(vars.white, 0.5)

  switch(props.color){
    case 'blue'      : return helpers.toRgb(vars.blueLight, 0.5)
    case 'red'       : return helpers.toRgb(vars.red, 0.5)
    case 'dark-blue' : return helpers.toRgb(vars.blue, 0.5)
    case 'gray'      : return helpers.toRgb(vars.gray, 0.5)
    default          : return helpers.toRgb(vars.white, 0.5)
  }
}

//-----------  Button  ----------- */

const Elem = styled.button`
  appearance     : none;
  background     : ${props => backgroundColor(props)};
  border         : 2px solid transparent;
  border-color   : ${props => borderColor(props)};
  border-radius  : 10em;
  color          : ${props => fontColor(props)};
  cursor         : ${props => isDisabled(props) ? 'not-allowed' : 'pointer'};
  display        : inline-block;
  font-size      : ${props => fontSize(props)}
  opacity        : ${props => isDisabled(props) ? '0.75' : '1'};
  outline        : none;
  padding        : ${props => isGlyph(props) ? '1.33em 2em' : '0.6em 2em'};
  pointer-events : ${props => isDisabled(props) ? 'none' : 'auto'};
  position       : relative;
  text-align     : center;
  transition     : ${vars.transition};
  white-space    : nowrap;

  i {
    transition: ${vars.transition};
  }

  i, span {
    opacity: ${props => props.loading ? '0.33' : '1'};
  }

  &:hover {
    background   : ${props => backgroundHoverColor(props)};
    border-color : ${props => borderHoverColor(props)};

    i, span {
      color: ${props => fontHoverColor(props)};
    }
  }

  svg {
    ${ mixins.centerAlign() }

    fill           : ${vars.white};
    height         : 3rem;
    opacity        : ${props => props.loading ? '1' : '0'};
    pointer-events : none;
    transition     : 0.5s;
  }
`

const Inner = styled.span`
  text-transform : uppercase;
  transition     : ${vars.transition};
`

//-----------  Exports  ----------- */

export default { Elem, Inner }
