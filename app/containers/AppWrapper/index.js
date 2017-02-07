//-----------  Imports  -----------//

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'

import AppWrapper             from './AppWrapper'

import { modalActions }       from 'modules/modal/actions'

//-----------  Redux Maps  -----------//

const mapState = (state) => ({
  modal   : state.get('modal'),
  browser : state.get('browser'),
})

const mapDispatch = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch),
})

//-----------  Exports  -----------//

export default connect(mapState, mapDispatch)(AppWrapper)
