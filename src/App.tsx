import React from "react";
import "./assets/scss/blk-design-system-react.scss";
import "./assets/css/nucleo-icons.css";
import "./App.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button
        className="btn-icon btn-simple btn-round btn-neutral"
        color="default"
        href="#pablo"
        onClick={e => e.preventDefault()}
      >
        <i className="fab fa-twitter" />
      </Button>{" "}
      <Card className="card-stats">
        <CardBody>
          <Row>
            <Col md="4" xs="5">
              <div className="icon-big text-center icon-warning">
                <i className="tim-icons icon-trophy text-warning" />
              </div>
            </Col>
            <Col md="8" xs="7">
              <div className="numbers">
                <CardTitle tag="p">3,237</CardTitle>
                <p />
                <p className="card-category">Awards</p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default App;
