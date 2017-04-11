//-----------  Remote Definitions  -----------//

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

//-----------  Remote Actions  -----------//

export const action = (type, payload = {}) =>{
  return { type, ...payload }
}

export const createRequestTypes = (base) => {
  const typeArr = [REQUEST, SUCCESS, FAILURE]
  const res = {}

  typeArr.forEach(type => res[type] = `${base}_${type}`)
  return res
}
