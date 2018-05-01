import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import TubeTrackerPage from './Tube/TubeTrackerPage';
import LineTrackerPage from './Line/LineTrackerPage';

import Header from './common/Header';

import './App.css';

class App extends Component {
    render() {
        return (
            <Container>
                <Header appName={'Tube Status'} />
                <Route exact path="/" component={TubeTrackerPage} />
                <Route exact path="/line/:id" component={LineTrackerPage} />
            </Container>
        );
    }
}

export default App;
