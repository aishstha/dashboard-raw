import logo from './logo.svg';
import React, { Component } from 'react';

import Container from './components/Container';



import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
