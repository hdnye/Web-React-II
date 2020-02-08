import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

// components
import AccountDashboard from './components/AccountDashboard';
import PrivateRoute from './components/PrivateRoute';
import Projects from './components/Projects';
import Values from './components/Values';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import { rootReducer } from './reducers';


function App() {
  

  return (
    <div className="App">
      <Router>
        <Router to='/register-form' component={RegisterForm} />
        <Route to='/login' component={Login} />
        <PrivateRoute exact path='/' component={AccountDashboard} />
        <Route to='/values' component={Values} />
        <Route to='/projects' component={Projects} />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    values: state.values,
    projects: state.projects
  }
}

export default connect(mapStateToProps, { rootReducer })(App);
