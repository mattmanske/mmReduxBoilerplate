//-----------  Imports  -----------//

import React  from 'react'
import Helmet from 'react-helmet'

//-----------  Component  -----------//

class HomeRoute extends React.Component {

  render(){
    const { searchActions, ...props } = this.props

    return (
      <main>
        <Helmet
          title="Home Page"
          meta={[{ name: 'description', content: 'A React.js Boilerplate application homepage' }]}
        />
      
        Home
      </main>
    )
  }
}

//-----------  Prop Types  -----------//

HomeRoute.propTypes = {}

//-----------  Exports  -----------//

export default HomeRoute
