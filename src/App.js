import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

class App extends React.Component {

  render() {
    return (
      <div className="pageBackground">
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
      </div>
    );
  }
}

export default App;
