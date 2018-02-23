import React from 'react'
import { Header } from 'semantic-ui-react'
import FontAwesome from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faBasketballBall'

const HomeHeader = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
    <FontAwesome
        icon={faCoffee}
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
      <Header.Content>
        URL Shortner
      </Header.Content>
    </Header>
  </div>
)

export default HomeHeader