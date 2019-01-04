import React, { Component } from 'react'
import {
  Alert,
  Fade,
  //Jumbotron,
  OverlayTrigger,
  Tooltip,
  Grid,
  Row
  //Col
} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


const columns = [
  {
    dataField: 'id',
    text: 'ID',
    style: {textAlign: "right"},
  },
  {
    dataField: 'client',
    text: 'Cliente',
    style: {textAlign: "right"},
  },
  {
    dataField: 'amount',
    text: 'Valor',
    style: {textAlign: "right"},
  },
  {
    dataField: 'items',
    text: '# items',
    style: {textAlign: "right"},
  },
  {
    dataField: 'utime',
    text: 'Fecha',
    formatter: fmtDate,
    style: {textAlign: "center"},
  }
];


function TT(x) {
  return (
  <OverlayTrigger placement="bottom" delayShow={300} overlay={
   <Tooltip id="tooltip">
      {x.alt}
    </Tooltip>
    }>
    <div>{x.str}</div>
  </OverlayTrigger>
  )
}


function fmtDate(cell, row) {
  let d = new Date(cell * 1000);
  return (
    <div>
     <TT
       str={d.getDay() + '/' + ('0' + (d.getMonth() + 1)).substring(-2) + '/' + (d.getYear() - 100)}
       alt={d.toLocaleString()}
       />
    </div>
  );
}


class All extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        pop: false,
        err: null,
        et: [],
    };
  }

  componentDidMount() {
    setTimeout(() => { this.setState({pop: true}) }, 100);

    fetch('http://example.e-shell.tk:12002/all')
        .then((response) => response.json())
        .then((ret) => { this.setState({et: ret.results}) })
        .catch((error) => { this.setState({err: error}); console.error(error)})

  }

  render() {
      return (
<Grid className="col-10 col-xs-offset-1">
  <Row className="alpha trans">
    <h1>Reportes - Todos</h1>

    <h3>Ver todas las facturas</h3>

    <Fade in={this.state.pop} appear={false} timeout={500}>
    <div>
      {
        this.state.err == null &&
        <BootstrapTable keyField="id" columns={columns} data={this.state.et}
          striped hover condensed bordered fluid
          noDataIndication={() =>
          <h3>No hay registros!</h3>
          } />
      }
      {
        this.state.err != null &&
            <Alert bsStyle="danger" style={{position: "relative", backgroundColor: "#d04040", color: "#d0d0d0"}}>
              <h4>Santo guacamole!</h4>
              <p>Un error ha ocurrido!</p>
              <hr />
              <pre>{this.state.err.message}</pre>
            </Alert>
      }
    </div>
    </Fade>
  </Row>
</Grid>
    );
  }
}

export default All;
