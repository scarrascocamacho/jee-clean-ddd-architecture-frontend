import React, { Component } from 'react'
import RolesDataService from '../service/RolesDataService.js';
import AuthenticationService from '../service/auth/AuthenticationService';

//const USER = 'user'

class ListRolesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roles: [],
            message: null
        }
        this.deleteRolClicked = this.deleteRolClicked.bind(this)
        this.updateRolClicked = this.updateRolClicked.bind(this)
        this.addRolClicked = this.addRolClicked.bind(this)
        this.refreshRoles = this.refreshRoles.bind(this)
    }

    componentDidMount() {
        this.refreshRoles();
    }

    refreshRoles() {
        RolesDataService.retrieveAllRoles()
            .then(
                response => {
                    this.setState({ roles: response.data })
                }
            )
    }

    deleteRolClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        RolesDataService.deleteRol(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of rol ${id} Successful` })
                    this.refreshRoles()
                }
            )

    }

    addRolClicked() {
        this.props.history.push(`/roles/-1`)
    }

    updateRolClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/roles/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Roles</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.roles.map(
                                    rol =>
                                        <tr key={rol.id}>
                                            <td>{rol.id}</td>
                                            <td>{rol.description}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateRolClicked(rol.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteRolClicked(rol.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addRolClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListRolesComponent