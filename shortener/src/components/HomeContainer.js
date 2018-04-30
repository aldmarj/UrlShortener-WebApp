import React, { Component } from "react";
import { Grid, Input, Segment } from 'semantic-ui-react'
import HomeHeader from "./HomeHeader";
import DisplayUrls from "./DisplayUrls";
import { fetchUrls } from '../services/ShortlyAPI'
 
class HomeContainer extends Component {
  state = {
    urls: [],
    visible: false
  }

  componentDidMount = () => {
    fetchUrls()
    .then(res => {
      
      const newData = res.data.map(url => ({
        url:url.url,
        code:url.code,
        created_at:url.created_at
      }))
      
      this.setState({urls: [{url: newData}]});
      
      console.log(this.state.urls)
    })
    
    
  }

  
  

  render() {
    return (

      <div>
        <Grid columns={3} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment> 
              <Display urls={this.state.urls} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <HomeHeader/>
              <Input action='Shorten' placeholder='Enter URL...' />
              <Segment>2</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>3</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
          
    );
  }
}
export default HomeContainer
