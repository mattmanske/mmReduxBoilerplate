//-----------  Imports  -----------//

import './styles/index.sass'

import React, { PropTypes } from 'react'
import cx                   from 'bem-classnames'

//-----------  Definitions  -----------//

const block = 'bounds-wrapper'

//-----------  Component  -----------//

const BoundsWrapper = (props) => {
  const blockCx = cx({ name: block }, props, props.className)

  return (
    <div className={blockCx}>
    </div>
  )
}

//-----------  Prop Types  -----------//

BoundsWrapper.propTypes = {}

BoundsWrapper.defaultProps = {}

//-----------  Export  -----------//

export default BoundsWrapper
