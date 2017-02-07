//-----------  Imports  -----------//

import helpers from 'styles/helpers'

//-----------  Definitions  -----------//

const gray   = '#f1f1f1'
const gutter = 1.25

//-----------  Exports  -----------//

export default {
  white        : '#ffffff',
  black        : '#404040',

  gray         : gray,
  grayDark     : helpers.darken(gray, 20),
  grayLight    : helpers.lighten(gray, 2),
  grayDarker   : helpers.darken(gray, 40),

  blueLight    : '#23cdfd',
  blue         : '#007ebc',
  blueDark     : '#054061',

  pink         : '#FF1493',
  red          : 'red',
  green        : '#A0D468',
  orange       : '#fe852c',

  radius       : '3px',
  transition   : '0.15s ease-in-out',

  gutter       : `${gutter}em`,
  gutterLg     : `${gutter * 1.33}em`,
  gutterSm     : `${gutter / 1.33}em`,

  maxWidth     : '68rem',
  blockWidth   : '42rem',
  compactWidth : '34rem',
  smallWidth   : '28rem',
}
