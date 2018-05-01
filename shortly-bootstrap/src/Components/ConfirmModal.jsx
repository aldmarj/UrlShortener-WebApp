import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
export default class ComfirmModal extends Component {
  render() {
    return (
      <Modal bsSize="large" show={this.props.open}>
        <Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ height: 400 }}>{this.props.children}</Modal.Body>

        <Modal.Footer>
          <Button onClick={() => this.props.handleCancel()}>Close</Button>
          <Button onClick={() => this.props.handleSave()} bsStyle="primary">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
