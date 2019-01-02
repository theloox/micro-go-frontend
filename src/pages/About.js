import React, { Component } from 'react'
//import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Button,
  Fade,
  Jumbotron,
  Grid,
  Row
  //Col
} from "react-bootstrap";



const license = `MIT License

Copyright (c) 2018 Axel Gonzalez <username: "loox" and domain: "e-shell.net">

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

const cra = `MIT License

Copyright (c) 2013-present, Facebook, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

const rb=`The MIT License (MIT)

Copyright (c) 2014-present Stephen J. Collings, Matthew Honnibal, Pieter Vanderwerff

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
`;

const bs = `The MIT License (MIT)

Copyright (c) 2011-2015 Twitter, Inc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
`;

const jpl = `By electing to download the material from this web site the user agrees:

- that Caltech makes no representations or warranties with respect to ownership of copyrights in the images, and does not represent others who may claim to be authors or owners of copyright of any of the images, and makes no warranties as to the quality of the images. Caltech shall not be responsible for any loss or expenses resulting from the use of the images, and you release and hold Caltech harmless from all liability arising from such use.

- to use a credit line in connection with images. Unless otherwise noted in the caption information for an image, the credit line should be "Courtesy NASA/JPL-Caltech."

- that the endorsement of any product or service by Caltech, JPL or NASA must not be claimed or implied
`;


class About extends Component {

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
    <h1>Acerca de <span className="fab fa-exclamation" /></h1>
  <p>
    Copyright (c) 2018 Axel Gonzalez
  </p>
  <p>
    Este código se encuentra bajo licencia <strong>MIT</strong>
  </p>
  <hr />
  <p>
    <Button bsSize="large" bsStyle="primary" href="https://github.com/theloox/skel-rb" target="_blank"><span className="fab fa-github-alt" /> github</Button>
  </p>

</Jumbotron>
</Fade>
  </Row>

  <Row className="xtitle">
      <h2>Licencias Open Source</h2>
  </Row>

  <Row>
    <div className="blob-head trans">
      this->
    </div>
    <div className="blob trans">
      <pre>{license}</pre>
    </div>
  </Row>
  <Row>
    <div className="blob-head trans">
      create-react-app
    </div>
    <div className="blob trans">
      <pre>{cra}</pre>
    </div>
  </Row>
  <Row>
    <div className="blob-head trans">
      react-bootstrap
    </div>
    <div className="blob trans">
      <pre>{rb}</pre>
    </div>
  </Row>
  <Row>
    <div className="blob-head trans">
      bootstrap
    </div>
    <div className="blob trans">
      <pre>{bs}</pre>
    </div>
  </Row>
  <Row>
    <div className="blob-head trans">
      Google Web Fonts
    </div>
    <div className="blob trans">
      <h3><a href="http://scripts.sil.org/OFL" rel="noopener noreferrer" className="fas fa-external-link"> SIL OPEN FONT LICENSE</a></h3>
      <ul>
        <li><a href="https://fonts.google.com/specimen/Fjalla+One" rel="noopener noreferrer" className="fas fa-external-link"> Fjalla One</a></li>
        <li><a href="https://fonts.google.com/specimen/Inconsolata" rel="noopener noreferrer" className="fas fa-external-link"> Inconsolata</a></li>
        <li><a href="https://fonts.google.com/specimen/Nunito" rel="noopener noreferrer" className="fas fa-external-link"> Nunito</a></li>
      </ul>
    </div>
  </Row>
  <Row>
    <div className="blob-head trans">
      <h2>NASA images</h2>
      </div>
    <div className="blob trans">
<ul>
<a href="https://www.jpl.nasa.gov/spaceimages" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link" />JPL Space Images</a><br />
<a href="https://www.jpl.nasa.gov/spaceimages/details.php?id=pia17172" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link" />pia17172</a><br />
<a href="https://www.jpl.nasa.gov/spaceimages/details.php?id=PIA02321" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link" />PIA02321</a><br />
</ul>
<pre>{jpl}</pre>
    </div>
  </Row>
  <Row>
    <div className="blob-head trans">
      <h2>Logo -> B.U.G.-chan</h2>
    </div>
    <div className="blob trans">
<ul>
  <a href="https://www.deviantart.com/c-quel" target="_blank" rel="noopener noreferrer"><span className="fas fa-external-link" />c-quel @ deviantart</a><br />
</ul>
<pre>BSD License</pre>
    </div>
  </Row>
</Grid>
    );
  }
}

export default About;
