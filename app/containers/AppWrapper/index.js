//-----------  Imports  -----------//

import { connect } from 'react-redux'

import AppWrapper  from './AppWrapper'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  browser: state.get('browser')
})

const mapDispatch = (dispatch) => ({})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AppWrapper)
