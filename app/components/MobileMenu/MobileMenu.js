//-----------  Imports  -----------//

import Block                from './styles'

import React, { PropTypes } from 'react'

import PageShade            from 'components/PageShade'

//-----------  Component  -----------//

class MobileMenu extends React.Component {

  state = { active: false }

  //-----------  Event Handlers  -----------//

  toggleOpen = () => {
    this.setState({ active: !this.state.active })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { props, state } = this

    return (
      <Block.Elem onClick={this.toggleOpen}>
        <PageShade active={state.active} onClick={this.toggleOpen} />

        <Block.Menu { ...state }>
          <nav>
            {props.children}
          </nav>
        </Block.Menu>

        <Block.Trigger>
          <i className="material-icons">menu</i>
        </Block.Trigger>
      </Block.Elem>
    )
  }
}

//-----------  Prop Types  -----------//

MobileMenu.propTypes = {
  children : PropTypes.node.isRequired
}

//-----------  Export  -----------//

export default MobileMenu
