import React from 'react'
import { Header } from 'semantic-ui-react'
import FontAwesome from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faBasketballBall'

const divStyle = {
  margin: '24px',
};


const HomeHeader = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Header.Content>
        URL Shortner
        <Header style={divStyle} as='h3' textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Header>
      </Header.Content>
    </Header>
  </div>
)

export default HomeHeader