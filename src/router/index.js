import React,{ Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import home from '../pages/index/index.jsx'
import servercsb from '../pages/server-csb/server-csb.jsx'

export default class RouteConfig extends Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/servercsb" exact component={servercsb} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }
}