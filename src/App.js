import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import {
  Collapse,
  Glyphicon,
  MenuItem,
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  //NavLink
  Grid,
  Row,
  Col,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import './App.css';
import logo from './img/logo.png';


const invoices = [
  {
    name: "Agregar",
    path: "/agregar",
    key: 2.1
  },
  {
    name: "Consultar",
    path: "/consultar",
    key: 2.2
  },
  {
    name: "Actualizar",
    path: "/actualizar",
    key: 2.3
  },
  {
    name: "Borrar",
    path: "/borrar",
    key: 2.4
  },
];

const reports = [
  {
    name: "Todos",
    path: "/todos",
    key: 3.1
  },
  {
    name: "Por cliente",
    path: "/porcliente",
    key: 3.2
  },
  {
    name: "Últimos",
    path: "/ultimos",
    key: 3.3
  },
  {
    name: "De hoy",
    path: "/hoy",
    key: 3.4
  },
];

const analysis = [
  {
    name: "Anormales",
    path: "/anormales",
    key: 4.1
  },
  {
    name: "Duplicados",
    path: "/duplicados",
    key: 4.2
  },
  {
    name: "Iguales",
    path: "/iguales",
    key: 4.3
  },
 ];

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        invoices: true,
        reports: true,
        analysis: true,
    };

    this.xx = this.xx.bind(this);
  }

  submenu(par) {
    return(
        par.arr.map((route, index) => (
          <MenuItem href={route.path} eventKey={route.key} key={route.key}>{route.name}</MenuItem>
        )
      )
    )
  }

  xx(par) {
    return(
      <>
      <NavItem onClick={() => this.setState(par.ret)}>{par.name}<Glyphicon glyph={par.st ? "chevron-up" : "chevron-down"} style={{float: "right"}} /></NavItem>
      <Collapse in={par.st}>
      <Nav bsStyle="pills" stacked className="nav-alt2">
      {
        par.arr.map((route, index) => (
          <LinkContainer to={route.path} key={route.key}>
            <NavItem eventKey={route.key}>{route.name}</NavItem>
          </LinkContainer>
        ))
      }
      </Nav>
      </Collapse>
      </>
    );
  };

  render() {
    return (
<Router>
<>
<Navbar collapseOnSelect fluid>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/"><img src={logo} alt="logo" title="Esqueletito" height="32" width="32" style={{float: "left", marginTop: -6, marginLeft: -12, marginRight: 6}} />&nbsp;&nbsp;Esqueletito</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav bsStyle="pills">
      <LinkContainer exact to={'/'}>
        <NavItem eventKey={1}>
          Página de inicio
        </NavItem>
      </LinkContainer>

      <NavDropdown eventKey={2} title="Facturas" id="basic-nav-dropdown">
        <this.submenu arr={invoices} />
      </NavDropdown>

      <NavDropdown eventKey={3} title="Reportes" id="basic-nav-dropdown">
        <this.submenu arr={reports} />
      </NavDropdown>

      <NavDropdown eventKey={4} title="Análisis" id="basic-nav-dropdown">
        <this.submenu arr={analysis} />
      </NavDropdown>

      <LinkContainer to={'/about'}>
        <NavItem eventKey={5}>
          Acerca de
        </NavItem>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<Grid fluid>
  <Row>
  <Col xs={0} sm={2} md={2} ls={2}>
    <Nav bsStyle="pills" stacked className="nav-alt">
      <LinkContainer exact to={'/'}>
        <NavItem eventKey={1}>
          Inicio
        </NavItem>
      </LinkContainer>
      <NavItem eventKey={0} className="nav-null" />

      <this.xx name="Facturas" arr={invoices} st={this.state.invoices} ret={{invoices: !this.state.invoices}} />
      <NavItem eventKey={0} className="nav-null" />

      <this.xx name="Reportes" arr={reports} st={this.state.reports} ret={{reports: !this.state.reports}} />
      <NavItem eventKey={0} className="nav-null" />

      <this.xx name="Análisis" arr={analysis} st={this.state.analysis} ret={{analysis: !this.state.analysis}} />
      <NavItem eventKey={0} className="nav-null" />

      <LinkContainer to={'/about'}>
        <NavItem eventKey={5}>
          Acerca de
        </NavItem>
      </LinkContainer>
    </Nav>
  </Col>
  <Col xs={12} sm={10} md={10} ls={10} className="padding-0">

<main>
  <Switch>
    <Route path="/about"
      render={() =>
  <div className="full full-about">
    <Routes />
  </div>
      } />
    <Route
      render={() =>
  <div className="full">
    <Routes />
  </div>
      } />
  </Switch>
</main>
  </Col>
  </Row>
  </Grid>
</>
</Router>
    );
  }
}

export default App;
