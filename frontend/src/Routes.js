import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import PrivateRoutes from './auth/helper/PrivateRoutes';
import Signup from './user/Signup';
import UserDashboard from './user/UserDashboard';
import Signin from './user/Signin';

const Routes = () =>{
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/signin' component={Signin} />
                <PrivateRoutes exact path='/user/dashboard' component={UserDashboard} />
            </Switch>
        </Router>
    )
}

export default Routes