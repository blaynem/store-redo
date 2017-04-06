import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/header';
import HomePage from './home_page';
import ListPage from './list_page';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Route exact path="/" component={HomePage}/>
        <Route path="/list/:catId" component={ListPage} />
      </div>
    );
  }
}

export default App;
