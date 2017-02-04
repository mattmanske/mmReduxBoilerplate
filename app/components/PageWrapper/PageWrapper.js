//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import Helmet               from 'react-helmet'

//-----------  Component  -----------//

const PageWrapper = (props) => {
  const helmetMeta = [{ name: 'description', content: props.description }]

  return (
    <main>
      <Helmet title={props.title} meta={helmetMeta} />
      {props.children}
    </main>
  )
}

//-----------  Prop Types  -----------//

PageWrapper.propTypes = {
  title       : PropTypes.string,
  description : PropTypes.string,
  children    : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default PageWrapper
