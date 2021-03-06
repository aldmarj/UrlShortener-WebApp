import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import AnalyticsContainer from './AnalyticsContainer';
import Sandbox from '../sandbox';

export default class Main extends Component {
  state = { activeItem: 'Crisis Mapping' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Menu pointing secondary>
            <NavLink exact to="/">
              <Menu.Item
                name="Home"
                active={activeItem === 'Home'}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <NavLink to="/analytics">
              <Menu.Item
                name="Analytics"
                active={activeItem === 'Analytics'}
                onClick={this.handleItemClick}
              />
            </NavLink>
          </Menu>
          <div className="content">
            <Route exact path="/" component={HomeContainer} />
            <Route path="/analytics" component={AnalyticsContainer} />
          </div>
          <Route exact path="/sandbox" component={Sandbox} />
        </div>
      </BrowserRouter>
    );
  }
}
