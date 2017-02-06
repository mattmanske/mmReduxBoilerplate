//-----------  Mixins  -----------//

const antiAliased = (smooth = true) => (`
  -webkit-font-smoothing: ${smooth ? 'antialiased' : 'subpixel-antialiased'};
  -moz-osx-font-smoothing: ${smooth ? 'grayscale' : 'auto'};
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
  centerAlign
}
