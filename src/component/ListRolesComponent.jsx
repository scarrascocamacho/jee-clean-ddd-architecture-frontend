import React, { Component } from 'react'
import RolesDataService from '../service/RolesDataService.js';
import AuthenticationService from '../service/basicAuth/AuthenticationService';

//const USER = 'user'

class ListRolesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roles: [],
            message: null
        }
        this.refreshRoles = this.refreshRoles.bind(this)
    }

    componentDidMount() {
        this.refreshRoles();
    }

    refreshRoles() {
        let user = AuthenticationService.getLoggedInUserName()
        RolesDataService.retrieveAllRoles(user)
            .then(
                response => {
                    this.setState({ roles: response.data })
                }
            )
    }


    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Roles</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.roles.map(
                                    rol =>
                                        <tr key={rol.id}>
                                            <td>{rol.id}</td>
                                            <td>{rol.description}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListRolesComponent