import React, { Component } from "react";
import { Grid, Input } from 'semantic-ui-react'
import HomeHeader from "./HomeHeader";
 
const HomeContainer = () => (
    <Grid centered columns={2}>
      <Grid.Column>
            <HomeHeader/>
            <Input action='Shorten' placeholder='Enter URL...' />
      </Grid.Column>

    </Grid>
  )
  
  export default HomeContainer