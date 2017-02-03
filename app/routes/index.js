//-----------  Imports  -----------//

import { getAsyncInjectors } from '../utils/asyncInjectors'

//-----------  Helpers  -----------//

const err = (err) => {
  console.error('Dynamic page loading failed', err)
}

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

//-----------  Exports  -----------//

export default function createRoutes(store){
  const { injectReducer, injectSagas } = getAsyncInjectors(store)

  return [{
    path : '/',
    name : 'home',
    getComponent(nextState, cb){
      const importModules = Promise.all([
        // import('routes/HomeRoute/reducer'),
        // import('routes/HomeRoute/sagas'),
        import('routes/HomeRoute'),
      ])

      const renderRoute = loadModule(cb)

      importModules.then(([component]) => {
        // injectReducer('home', reducer.default)
        // injectSagas(sagas.default)
        renderRoute(component)
      })

      importModules.catch(err)
    },
  },{
    path : '/features',
    name : 'features',
    getComponent(nextState, cb){
      import('containers/FeaturePage').then(loadModule(cb)).catch(err)
    },
  },{
    path : '*',
    name : 'notfound',
    getComponent(nextState, cb){
      import('containers/FeaturePage').then(loadModule(cb)).catch(err)
    },
  }]
}
