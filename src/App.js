import React from 'react';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';

import Nav from './components/nav'
import Routes from './components/routes'

class App extends React.Component {
  constructor(props) { 
    super(props)
    this.state = { visible: false }
  }

  componentDidMount() {
    this.setState({
      visible: window.location.pathname === '/login' ? true : false
    })
  }

  render() { 
    return (
      <div className="app-warp">
        <BrowserRouter>
          {
            !this.state.visible ? (
              <div className="app-warp-nav">
                <Nav className="app-warp-left" uniqueopened="false"></Nav>
              </div>
            ) : null
          }
          <Routes/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
