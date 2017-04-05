import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/header';
import Home from './home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Route exact path="/" component={Home}/>
      </div>
    );
  }
}

export default App;
