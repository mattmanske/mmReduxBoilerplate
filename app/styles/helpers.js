//-----------  Imports  -----------//

import tinycolor from 'tinycolor2'

//-----------  Mixins  -----------//

const toHex = (color) => {
  return tinycolor(color).toHex()
}

const toRgb = (color, alpha = 1) => {
  return tinycolor(color).setAlpha(alpha).toRgbString()
}

//-----------  Exports  -----------//

export default {
  toHex,
  toRgb
}
