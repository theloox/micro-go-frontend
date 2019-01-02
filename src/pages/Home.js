import React, { Component } from 'react'
//import {CSSTransition, TransitionGroup} from "react-transition-group"
import { Button,
  Fade,
  Jumbotron,
  Grid,
  Row,
  Col
} from "react-bootstrap";


class Home extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        pop: false
    };
  }

  componentDidMount() {
      setTimeout(() => { this.setState({pop: true}) }, 100);
  }

  render() {
      return (
<Grid className="col-10 col-xs-offset-1">
  <Row>
<Fade in={this.state.pop} appear={false} timeout={500}>
<Jumbotron style={{textAlign: "center"}}>
    <h1>Esqueletito <span className="fab fa-snapchat-ghost"></span></h1>
  <p>
    Esqueleto de un proyecto en <strong>react-bootstrap</strong>
  </p>
  <p className="small" style={{textAlign: "justify"}}><small>
Ullam ut error ipsam praesentium quos sint. Atque sunt dignissimos nisi. Hic qui ducimus quia dolor ut. Dolorum quisquam et vero ipsum repellat beatae reprehenderit. Quis veritatis et nihil at eligendi nemo eos. Qui nisi impedit doloremque voluptatem.
  </small></p>

  <p className="small" style={{textAlign: "justify"}}><small>
Ab quod vitae possimus earum. Iure a autem dicta. Aut mollitia omnis sint voluptatem ullam tempora.
  </small></p>

  <p className="small" style={{textAlign: "justify"}}><small>
Possimus eum fugit unde neque aut incidunt nisi velit. Laboriosam corrupti molestiae neque. Rem sunt similique nihil sequi possimus. Dolore et quia odio recusandae nobis minus.
  </small></p>
  <p>
    <Button bsStyle="primary" href="/about">Acerca de</Button>
  </p>
</Jumbotron>
</Fade>
  </Row>

  <Row className="mb-5 small row-cards">
    <Col xs={12} sm={4} md={4} className="card">
      <div className="card-body trans">
        <h3 className="text-right"><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link" />React</a></h3>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
      </div>
    </Col>
    <Col xs={12} sm={4} md={4} className="card">
      <div className="card-body trans">
        <h3 className="text-right"><a href="http://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link" />Bootstrap</a></h3>
        <p>Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.</p>
        <p>Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.</p>
      </div>
    </Col>
    <Col xs={12} sm={4} md={4} className="card">
      <div className="card-body trans">
        <h3 className="text-right"><a href="http://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link" />react-bootstrap</a></h3>
        <p>The most popular front-end framework, rebuilt for React.</p>
      </div>
    </Col>
  </Row>
</Grid>
    );
  }
}

export default Home;
