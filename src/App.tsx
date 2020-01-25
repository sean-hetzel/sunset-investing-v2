import React from "react";
import "./assets/css/blk-design-system-react.css";
import "./assets/css/nucleo-icons.css";
import "./Custom.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   CardTitle,
//   ListGroupItem,
//   ListGroup,
//   Container,
//   Row,
//   Col,
//   Navbar
// } from "reactstrap";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Home from "components/Home";

const App: React.FC = () => {
  
  return (
    <div className="App">
      <NavBar />
      <div className="wrapper">
      <div className="main">


      <BrowserRouter>
        <Switch>
          <Route path="/components" render={props => <Home {...props} />} />

          <Redirect from="/" to="/components" />
        </Switch>
      </BrowserRouter>
      </div>
      </div>
    </div>
  );
};

export default App;
