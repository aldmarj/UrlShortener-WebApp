import React, { Component } from 'react';
import { Grid, Input, Segment } from 'semantic-ui-react';

import ValidationInput from './components/FormComponents/ValidationInput.jsx';
import EditableItem from './components/FormComponents/EditableItem';

const errors = {
  name: 'url',
  error: 'not a valid url'
};

class Sandbox extends Component {
  state = {
    errors: []
  };

  componentDidMount() {
    setTimeout(() => this.setState({ errors: errors }), 3000);
  }
  render() {
    return (
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment />
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <ValidationInput
                errors={this.state.errors}
                title={'URL'}
                placeholder={'Enter URL'}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <EditableItem />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Sandbox;
