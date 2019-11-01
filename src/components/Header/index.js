import React, {Component} from 'react';

// Estilos
import './header.css'

// Components
import { Link } from 'react-router-dom'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="header">
        <Link to="/">App Filmes</Link>
      </div>
    )
  }
}

export default Header;