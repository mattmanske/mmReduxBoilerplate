//-----------  Mixins  -----------//

const antiAliased = (smooth = true) => (`
  -webkit-font-smoothing: ${smooth ? 'antialiased' : 'subpixel-antialiased'};
  -moz-osx-font-smoothing: ${smooth ? 'grayscale' : 'auto'};
`)

const verticalAlign = (position = 'absolute') => (`
  position  : ${position};
  top       : 50%;
  transform : translateY(-50%);
`)

const horizontalAlign = (position = 'absolute') => (`
  left      : 50%;
  position  : ${position};
  transform : translateX(-50%);
`)

const centerAlign = (position = 'absolute') => (`
  left      : 50%;
  position  : ${position};
  top       : 50%;
  transform : translate(-50%, -50%);
`)

//-----------  Exports  -----------//

export default {
  antiAliased,
  verticalAlign,
  horizontalAlign,
  centerAlign
}
