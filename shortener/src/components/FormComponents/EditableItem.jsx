import React, { Component } from 'react';
import { Input, Grid } from 'semantic-ui-react';

export default class EditableItem extends Component {
  state = {
    editing: false,
    editValue: ''
  };

  handleEditClick(val) {
    this.setState({
      editing: val
    });
  }

  updateValue = event => {
    const editValue = event.target.value;
    this.setState({ editValue });
  };

  render() {
    return (
      <div style={{ padding: 12, border: '1px solid blue', height: 180 }}>
        <Grid columns={2}>
          <Grid.Column key={1} width={12}>
            <p style={{ padding: '1em' }}>
              www.mybadass.link/
              {this.state.editing ? (
                <Input
                  size="mini"
                  focus
                  placeholder="Search..."
                  value={this.state.editValue}
                  onChange={e => this.updateValue(e)}
                />
              ) : (
                <span>blahblah</span>
              )}
            </p>
          </Grid.Column>
          <Grid.Column key={2} width={4}>
            {!this.state.editing ? (
              <i
                class="fas fa-edit"
                onClick={() => this.handleEditClick(true)}
              />
            ) : (
              <i
                class="fas fa-times"
                style={{ color: 'red' }}
                onClick={() => this.handleEditClick(false)}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
