import React from 'react';
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom';

import Nav from './components/nav'
import Routes from './components/routes'

class App extends React.Component { 
  render() { 
    return (
      <div className="app-warp">
        <BrowserRouter>
          <Nav className="app-warp-left" uniqueopened="false"></Nav>
          <Routes className="app-warp-right"></Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
