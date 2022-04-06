import React from 'react'
import NavBar from './oldNavbar'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { Container, Switch } from 'react-bootstrap'
import { Route } from 'react-router-dom'
//import { Home, Profile, ExternalApi, MyAvailability, MyEvents, About } from './views'
import Home from '../views/home'
import Profile from '../views/profile'
import ExternalApi from '../views/external-api'
import MyAvailability from '../views/my-availability'
import MyEvents from '../views/my-events'
import About from '../views/about'
import { NavbarContainer } from './NavbarElement'
import PrivateRoute from './private-route'

 const NewNav = () => {
  return (
    <>
      <NavBar />
      <NavbarContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
          <PrivateRoute path="/my-availability" component={MyAvailability} />
          <PrivateRoute path="/my-events" component={MyEvents} />
          <Route path="/about" component={About} />
        </Switch>
      </NavbarContainer>
    </>
  )
}

export default NewNav;