import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GuardedRoute from './components/GuardedRoute';
import { connect } from "react-redux";
import { storeLogout, storeLogin } from './store/actions';
import { store } from './store/store';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props)
    console.log(store.getState())
  }

  render() {
    return (
      <div className="pageBackground">
        <Router>
          <Route exact path="/" component={Login} />
          {/* <Route path="/dashboard" component={dashboard} /> */}
          <GuardedRoute path='/dashboard' component={Dashboard} auth={store.getState()?.authentication?.authenticated} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(storeLogin),
  stopAction: () => dispatch(storeLogout)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
