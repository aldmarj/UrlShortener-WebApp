import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import UrlList from '../Containers/UrlList.jsx';

import AddProfileModal from '../Containers/AddProfileModal.jsx';

export default class HomePage extends Component {
  state = {
    addUrlModal: true,
    errors: {
      // url: 'Url invalid',
      // handle: 'Handle Already Taken'
    }
  };

  render() {
    return (
      <div>
        <AddProfileModal
          show={this.state.addUrlModal}
          closeModal={() => this.setState({ addUrlModal: false })}
        />
        <div className="col-xs-2 text-center">1</div>
        <div className="col-xs-8">
          <div className="text-center">
            <UrlList />
          </div>
          <Button
            onClick={() => this.setState({ addUrlModal: true })}
            bsStyle="warning"
            style={{ borderRadius: '50%', height: 50, width: 50 }}
          >
            <i
              style={{ color: 'white', fontSize: 18 }}
              className="fas fa-plus"
            />
          </Button>
        </div>

        <div className="col-xs-2 text-center">3</div>
      </div>
    );
  }
}
