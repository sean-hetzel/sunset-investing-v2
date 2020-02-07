import React from "react";
import "./assets/css/blk-design-system-react.css";
import "./assets/css/nucleo-icons.css";
import "./Custom.css";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Home from "components/Home";
import Properties from "components/Properties"
import Property from "components/Property"
import Holdings from "components/Holdings"
import Dashboard from "components/Dashboard"
import Profile from "components/Profile"
import Cart from "components/Cart"
import Login from "components/Login"
import SignUp from "components/SignUp"
import NotFound from "components/NotFound"

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="main">
                    <Router>
                        <Switch>
                            <Route
                                path="/home"
                                exact
                                render={props => <Home {...props} />}
                            />
                            <Route
                                path="/properties"
                                exact
                                render={props => <Properties {...props} />}
                            />
                            <Route
                                path="/properties/:id"
                                exact
                                render={props => <Property {...props} />}
                            />
                            <Route
                                path="/holdings"
                                exact
                                render={props => <Holdings {...props} />}
                            />
                            <Route
                                path="/dashboard"
                                exact
                                render={props => <Dashboard {...props} />}
                            />
                            <Route
                                path="/profile"
                                exact
                                render={props => <Profile {...props} />}
                            />
                            <Route
                                path="/cart"
                                exact
                                render={props => <Cart {...props} />}
                            />
                            <Route
                                exact
                                path="/login"
                                render={props => (
                                    <Login
                                        {...props}
                                    />
                                )}
                            />
                            <Route path="/signup" component={SignUp} />
                            <Route path="*" component={NotFound} />
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
};

export default App;
