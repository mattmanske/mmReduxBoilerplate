//-----------  Imports  -----------//

import { SHOW_MODAL, HIDE_MODAL } from './actions'

//-----------  Definitions  -----------//

const initialState = {
  modalType  : null,
  modalProps : {}
}

//-----------  Reducers  -----------//

function modalReducer(state = initialState, action){
  let modalType, modalProps

  switch (action.type){

    case SHOW_MODAL:
      modalType  = action.modalType
      modalProps = action.modalProps || {}

      return { modalType, modalProps }

    case HIDE_MODAL:
      return initialState

    default:
      return state
  }
}

//-----------  Exports  -----------//

export default modalReducer
