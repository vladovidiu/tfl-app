import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import TubeTrackerPage from './Tube/TubeTrackerPage';

import './App.css';

class App extends Component {
    render() {
        return (
            <Container>
                <div className="ui one item inverted menu">
                    <NavLink className="item" activeClassName="active" exact to="/">
                        Tube Status
                    </NavLink>
                    {/* <Route exact path="/line" component={TubeTrackerPage} /> */}
                </div>
                <Route exact path="/" component={TubeTrackerPage} />
            </Container>
        );
    }
}

export default App;
