//-----------  Imports  -----------//

import helpers               from 'styles/helpers'
import { generateSpectrums } from 'utils/styles'

//-----------  Definitions  -----------//

export const emBase = 16
export const gutter = 1.25

export const colors = {
  gray   : ['#111111', 60, 15],
  blue   : ['#007ebc', 50, 10],
  red    : ['#B83021', 50, 15],
  green  : ['#1BB518', 55, 15],
  yellow : ['#fe852c', 35, 25],
}

//-----------  Exports  -----------//

export default Object.assign({}, generateSpectrums(colors), {
  white        : '#ffffff',
  black        : '#404040',

  emBase       : `${emBase}px`,
  radius       : '3px',
  shadow       : '0.25em 0.25em 0.75em rgba(0, 0, 0, 0.05)',
  transition   : '0.15s ease-in-out',

  gutter       : `${gutter}em`,
  gutterLg     : `${gutter * 2.33}em`,
  gutterSm     : `${gutter / 2.33}em`,

  maxWidth     : '75rem',
  blockWidth   : '54rem',
  compactWidth : '34rem',
  smallWidth   : '26rem',
})
