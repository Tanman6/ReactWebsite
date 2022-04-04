import React from 'react'
import { NavBar } from 'react-bootstrap'
import LoginButton from './login-button'
import LogoutButton from './logout-button'
import { Container, Switch, Route} from 'react-bootstrap'
import { Home, Profile, ExternalApi, MyAvailability, MyEvents, About } from '../views'

export const NewNav = () => {
  return (
    <>
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
          <Route path="/my-availability" component={MyAvailability} />
          <Route path="/my-events" component={MyEvents} />
          <Route path="/about" component={About} />
        </Switch>
        <LoginButton />
        <LogoutButton />
      </Container>
    </>
  )
}

