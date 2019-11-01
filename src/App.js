import React, {Component} from 'react';

// Components
import Routes from './routes'

// Estilos
import './styles.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        <Routes/>
      </div>
    )
  }
}

export default App;