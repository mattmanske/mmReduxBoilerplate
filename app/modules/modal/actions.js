//-----------  Imports  -----------//

import { action } from 'modules/helpers'

//-----------  Definitions  -----------//

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

//-----------  Actions  -----------//

export const modalActions = {
  showModal: (modalType, modalProps) => {
    return action(SHOW_MODAL, { modalType, modalProps })
  },
  hideModal: () => {
    return action(HIDE_MODAL)
  }
}
