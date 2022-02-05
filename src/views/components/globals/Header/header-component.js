import React from 'react';
import { Link } from 'react-router-dom';

import logo from '#assets/img/logo.png';

import { Container, Nav, NavItem } from './header-component-style.js';

export default function ComponentName() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <Nav>
        <NavItem to="/" exact activeClassName="active">
          Combos
        </NavItem>
        <NavItem to="/mobile" activeClassName="active">
          Móvel
        </NavItem>
        <NavItem to="/internet" activeClassName="active">
          Internet
        </NavItem>
        <NavItem to="/tv" activeClassName="active">
          TV
        </NavItem>
        <NavItem to="/sac" activeClassName="active">
          Atendimento
        </NavItem>
      </Nav>
    </Container>
  );
}
