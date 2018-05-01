import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

export default class ValidationInput extends Component {
  state = {
    visible: false,
    header: '',
    content: ''
  };

  componentWillReceiveProps(prev) {
    if (prev.errors) {
      this.setState({
        visible: true,
        header: 'Waring',
        content: prev.errors.error
      });
    }
  }
  handleDismiss = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const showMessage = this.state.visible ? (
      <Message
        error
        onDismiss={this.handleDismiss}
        header={this.state.header}
        content={this.state.content}
      />
    ) : null;
    return (
      <Form error>
        <Form.Input
          label={this.props.title}
          placeholder={this.props.placeholder}
        />
        {showMessage}
      </Form>
    );
  }
}
