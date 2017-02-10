//-----------  Imports  -----------//

import tinycolor from 'tinycolor2'

//-----------  Helpers  -----------//

const generateSpectrums = (colorObj) => {
  let newColors = {}

  Object.keys(colorObj).map((color) => {
    const val = colorObj[color][0] || colorObj[color]
    const lgt = colorObj[color][1] || 60
    const drk = colorObj[color][2] || 15

    newColors = Object.assign(newColors, generateSpectrum(color, val, lgt, drk))
  })

  return newColors
}

const generateSpectrum = (name, color, lighten, darken) => {
  let lightArr = ['Lightest', 'Lighter', 'Light']
  let darkArr  = ['Darkest', 'Darker', 'Dark']
  let colorObj = {}

  colorObj[name] = color

  lightArr.map((key, index) => {
    const newKey = name+key
    const change = lighten / (1.5 * index)
    return colorObj[newKey] = tinycolor(color).lighten(change).toString()
  })

  darkArr.map((key, index) => {
    const newKey = name+key
    const change = darken / (1.5 * index)
    return colorObj[newKey] = tinycolor(color).darken(change).toString()
  })

  return colorObj
}

//-----------  Exports  -----------//

export {
  generateSpectrum,
  generateSpectrums
}
