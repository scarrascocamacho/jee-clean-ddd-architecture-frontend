import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/auth/AuthenticationService';

class MenuComponent extends Component {

    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/roles">Roles</Link></li>
                        <li><Link className="nav-link" to="/hello-world-string">Hello World String</Link></li>
                        <li><Link className="nav-link" to="/hello-world-bean">Hello World Bean</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}                        
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(MenuComponent)