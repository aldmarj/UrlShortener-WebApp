import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router';

import HomePage from './Pages/Home.jsx';
import AnalyticsPage from './Pages/Analytics';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem componentClass={Link} eventKey={1} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              componentClass={Link}
              eventKey={2}
              href="/analytics"
              to="/analytics"
            >
              Anayltics
            </NavItem>
          </Nav>
        </Navbar>;
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/analytics" component={AnalyticsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
