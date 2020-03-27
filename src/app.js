import React from 'react';
import './app.less'
import './style/index.less'
import { Switch,Route,Link } from 'react-router-dom';
import Home from './pages/index/index.jsx'
import ServerCsb from './pages/server-csb/server-csb.jsx'
import ServerCtt from './pages/server-ctt/server-ctt.jsx'
import Cashier from './pages/cashier/cashier.jsx'

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/serverCsb" component={ServerCsb} />
                <Route path="/serverCtt" component={ServerCtt} />
                <Route path="/cashier" component={Cashier} />
            </Switch>
        </div>
    )
}

export default App;
