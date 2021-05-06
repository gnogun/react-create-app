import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormPage from './FormPage';
import Api from './Api';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route exact path="/" component={FormPage} />
          <Route path="/api" component={Api} />
          {/* <FormPage />
          <Api /> */}
        </Router>
      </>
    );
  }
}

export default App;
