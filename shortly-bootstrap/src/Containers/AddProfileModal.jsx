import React, { Component } from 'react';
import ConfirmModal from '../Components/ConfirmModal.jsx';
import ValidatingFormInput from '../Components/ValidatingFormInput';

import { Checkbox, Button } from 'react-bootstrap';

export default class ModalContainer extends Component {
  state = {
    errors: {},
    inputs: {
      url: '',
      handle: ''
    },
    hidePopUnder: true
  };

  handleCancel = () => {
    this.props.closeModal();
  };

  handleSave = () => {
    console.log('SUBMIT');
    console.log(this.state.inputs);
    //Make network request

    //On Fail Show Errors

    //On Success Close Modal
    this.props.closeModal();
  };

  updateInputs = e => {
    const target = e.target.name;
    const value = e.target.value;

    this.setState(({ inputs }) => ({
      inputs: { ...inputs, [target]: value }
    }));
  };
  render() {
    return (
      <ConfirmModal
        open={this.props.show}
        title="Add URL"
        handleCancel={() => this.handleCancel()}
        handleSave={() => this.handleSave()}
      >
        <div className="col-xs-6">
          <ValidatingFormInput
            name="name"
            errors={this.state.errors.name}
            label="Enter Name for URL"
            placeholder="Enter name"
            onChange={e => this.updateInputs(e)}
            value={this.state.inputs.name}
          />
        </div>
        <div className="col-xs-6">
          <ValidatingFormInput
            name="handle"
            errors={this.state.errors.handle}
            label="Enter Handle"
            placeholder="Enter Handle"
            onChange={e => this.updateInputs(e)}
            value={this.state.inputs.handle}
          />
        </div>
        <div className="col-xs-12">
          <ValidatingFormInput
            name="url"
            errors={this.state.errors.url}
            label="Enter Long URL"
            placeholder="Enter URL"
            onChange={e => this.updateInputs(e)}
            value={this.state.inputs.url}
          />
          <hr />
        </div>

        <div className="col-xs-12">
          <div className="blow">
            <div className="col-xs-10">
              <ValidatingFormInput
                name="popunder"
                errors={this.state.errors.popunder}
                label="Enter Pop Under Url"
                placeholder="Enter pop under url"
                onChange={e => this.updateInputs(e)}
                value={this.state.inputs.popunder}
                disabled={this.state.hidePopUnder}
              />
            </div>
            <div className="col-xs-2">
              <Checkbox
                onChange={e =>
                  this.setState(({ hidePopUnder }) => ({
                    hidePopUnder: !hidePopUnder
                  }))
                }
                validationState={this.state.hidePopUnder ? 'success' : 'error'}
                checked={this.state.hidePopUnder}
              >
                <p>{this.state.hidePopUnder ? 'Enable' : 'Disable'}</p>
              </Checkbox>
            </div>
          </div>
          <Button style={{ float: 'right' }}>Add New</Button>
        </div>
      </ConfirmModal>
    );
  }
}
