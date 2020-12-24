import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@pages/home';

export default class RouterView extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/home" component={Home} />
                </Switch>
            </Router>
        );
    }
}
