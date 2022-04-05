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

 const NewNav = () => {
  return (
    <>
      <NavBar />
      <NavbarContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
          <Route path="/my-availability" component={MyAvailability} />
          <Route path="/my-events" component={MyEvents} />
          <Route path="/about" component={About} />
        </Switch>
      </NavbarContainer>
    </>
  )
}

export default NewNav;