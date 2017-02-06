//-----------  Imports  -----------//

import mixins from 'styles/mixins'

//-----------  Exports  -----------//

export default `
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .material-icons {
    ${ mixins.antiAliased() }

    direction               : ltr;
    display                 : inline-block;
    font-family             : 'Material Icons';
    font-feature-settings   : 'liga';
    font-size               : 24px; /* Preferred icon size */
    font-style              : normal;
    font-weight             : normal;
    letter-spacing          : normal;
    line-height             : 1;
    text-rendering          : optimizeLegibility;
    text-transform          : none;
    white-space             : nowrap;
    word-wrap               : normal;
  }
`
