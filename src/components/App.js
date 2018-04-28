import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import TubeTrackerPage from './Tube/TubeTrackerPage';
import LineTrackerPage from './Line/LineTrackerPage';

import './App.css';

class App extends Component {
    render() {
        return (
            <Container>
                <div className="ui one item inverted menu">
                    <NavLink className="item" activeClassName="active" exact to="/">
                        Tube Status
                    </NavLink>
                </div>
                <Route exact path="/" component={TubeTrackerPage} />
                <Route exact path="/line/:id" component={LineTrackerPage} />
            </Container>
        );
    }
}

export default App;
