import React, { Component } from 'react';
import Home from './components/home/Home';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import InternetBanking from './components/internetBanking/InternetBanking';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/banking" exact component={InternetBanking} />
        </Switch>
      </div>
    )
  }
}

export default App;
