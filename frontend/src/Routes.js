import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import PrivateRoutes from './auth/helper/PrivateRoutes';

const Routes = () =>{
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                {/* <PrivateRoutes exact path='/user/dashboard' component={} /> */}
            </Switch>
        </Router>
    )
}

export default Routes