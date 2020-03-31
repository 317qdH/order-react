import React from 'react';
import './app.less'
import './style/index.less'
import { Switch,Route } from 'react-router-dom';
import Home from './pages/index/index.jsx'
import ServerCsb from './pages/server-csb/server-csb.jsx'
import ServerCtt from './pages/server-ctt/server-ctt.jsx'
import Cashier from './pages/cashier/cashier.jsx'
import PayResult from './pages/payResult/payResult.jsx';


function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/serverCsb" component={ServerCsb} />
                <Route path="/serverCtt" component={ServerCtt} />
                <Route path="/cashier" exact component={Cashier} />
                <Route path="/cashier/payresult" component={PayResult}></Route>
            </Switch>
        </div>
    )
}

export default App;
