//-----------  Imports  -----------//

import { fromJS }                       from 'immutable'
import { reducer as formReducer }       from 'redux-form'
import { combineReducers }              from 'redux-immutable'
import { LOCATION_CHANGE }              from 'react-router-redux'
import { createResponsiveStateReducer } from 'redux-responsive'
import useragent                        from 'express-useragent'

//-----------  Definitions  -----------//

const routeInitialState = fromJS({
  locationBeforeTransitions: null,
})

function routeReducer(state = routeInitialState, action){
  switch (action.type){
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      })
    default:
      return state
  }
}

function initialMediaType(){
  const ua = new useragent.UserAgent().parse(navigator.userAgent) || {}
  let mediaType = 'large'

  if (ua.isMobile)  mediaType = 'small'
  if (ua.isTablet)  mediaType = 'medium'
  if (ua.isDesktop) mediaType = 'large'

  return mediaType
}

//-----------  Exports  -----------//

export default function createReducer(asyncReducers){
  return combineReducers({
    form    : formReducer,
    route   : routeReducer,
    browser : createResponsiveStateReducer(null, { initialMediaType: initialMediaType() }),
    ...asyncReducers,
  })
}
