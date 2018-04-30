import React, { Component } from "react";
import { Grid, Input, Segment } from 'semantic-ui-react'
import HomeHeader from "./HomeHeader";
import LinkList from "./LinkList";
 
const HomeContainer = () => (
      <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment>1</Segment>
        </Grid.Column>
        <Grid.Column>
          <HomeHeader/>
          <Input action='Shorten' placeholder='Enter URL...' />
          <Segment><LinkList /></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>3</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
  
  export default HomeContainer
