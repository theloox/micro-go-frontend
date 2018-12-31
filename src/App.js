import React, { Component } from 'react';
import {
  Collapse,
  Glyphicon,
  MenuItem,
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  //NavLink
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
          <MenuItem href={route.path} eventKey={route.key}>{route.name}</MenuItem>
        )
      )
    )
  }

  xx(par) {
    return(
      <>
      <NavItem onClick={() => this.setState(par.ret)}>{par.name}<Glyphicon glyph={par.st ? "chevron-up" : "chevron-down"} style={{float: "right"}} /></NavItem>
      <Collapse in={par.st}>
      <Nav bsStyle="pills" stacked>
      {
        par.arr.map((route, index) => (
          <LinkContainer to={route.path}>
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
    <div>
<Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/"><img src={logo} alt="logo" title="Esqueletito" height="32" width="32" style={{float: "left", "margin-top": -6, "margin-left": -12, "margin-right": 6}} />&nbsp;&nbsp;Esqueletito</a>
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
    <Nav bsStyle="pills" stacked>
      <LinkContainer exact to={'/'}>
        <NavItem eventKey={1}>
          Página de inicio
        </NavItem>
      </LinkContainer>
      <NavItem eventKey={0} />

      <this.xx name="Facturas" arr={invoices} st={this.state.invoices} ret={{invoices: !this.state.invoices}} />
      <NavItem eventKey={0} />

      <this.xx name="Reportes" arr={reports} st={this.state.reports} ret={{reports: !this.state.reports}} />
      <NavItem eventKey={0} />

      <this.xx name="Análisis" arr={analysis} st={this.state.analysis} ret={{analysis: !this.state.analysis}} />
      <NavItem eventKey={0} />

      <LinkContainer to={'/about'}>
        <NavItem eventKey={5}>
          Acerca de
        </NavItem>
      </LinkContainer>
    </Nav>

<main>
            <Routes />
</main>
    </div>
    </Router>
    );
  }
}

export default App;
