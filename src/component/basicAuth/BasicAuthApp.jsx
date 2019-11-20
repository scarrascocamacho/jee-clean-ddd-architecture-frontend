import React, { Component } from 'react';
import ListRolesComponent from '../ListRolesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import MenuComponent from '../MenuComponent';
import HelloWorldBeanComponent from '../helloworld/HelloWorldBeanComponent';
import HelloWorldStringComponent from '../helloworld/HelloWorldStringComponent';
//import AuthenticationService from '../../service/basicAuth/AuthenticationService';
import AuthenticatedRoute from './AuthenticatedRoute';

class BasicAuthApp extends Component {


    render() {
        return (
            <>
                <Router>
                    <>
                        <MenuComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/hello-world-string" exact component={HelloWorldStringComponent} />
                            <Route path="/hello-world-bean" exact component={HelloWorldBeanComponent} />
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                            <AuthenticatedRoute path="/roles" exact component={ListRolesComponent} />
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}

export default BasicAuthApp