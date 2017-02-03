//-----------  Imports  -----------//

import React  from 'react'
import Helmet from 'react-helmet'

//-----------  Component  -----------//

const AppWrapper = (props) => {

  console.log(React.Children.toArray(props.children))

  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />

      {React.Children.toArray(props.children)}
    </div>
  )
}

//-----------  Prop Types  -----------//

AppWrapper.propTypes = {
  children: React.PropTypes.node
}

//-----------  Exports  -----------//

export default AppWrapper
