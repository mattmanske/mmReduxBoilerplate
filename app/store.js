//-----------  Imports  -----------//

import { compose,
         createStore,
         applyMiddleware }   from 'redux'
import { fromJS }            from 'immutable'
import { routerMiddleware }  from 'react-router-redux'
import { mediaQueryTracker } from 'redux-mediaquery'
import createSagaMiddleware  from 'redux-saga'

import createReducer         from './reducers'

//-----------  Definitions  -----------//

const sagaMiddleware = createSagaMiddleware()

//-----------  Exports  -----------//

export default function configureStore(initialState = {}, history){
  const middlewares = [sagaMiddleware, routerMiddleware(history)]
  const enhancers   = [applyMiddleware(...middlewares)]

  const composeEnhancers =
    (process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  )

  store.runSaga = sagaMiddleware.run
  store.asyncReducers = {}

  // store.dispatch(mediaQueryTracker({
  //   isPhone  : 'screen and (max-width: 767px)',
  //   isTablet : 'screen and (max-width: 1024px)',
  // }))

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */

  if (module.hot){
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default
        const nextReducers   = createReducers(store.asyncReducers)
        store.replaceReducer(nextReducers)
      })
    })
  }

  return store
}
