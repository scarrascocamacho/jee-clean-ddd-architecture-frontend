import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RolesDataService from '../service/RolesDataService';
import AuthenticationService from '../service/auth/AuthenticationService';

//const INSTRUCTOR = 'user'

class RolComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        let username = AuthenticationService.getLoggedInUserName()
        RolesDataService.retrieveRol(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.authority) {
            errors.description = 'Enter a Description'
        } else if (values.authority.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        return errors

    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName()

        let rol = {
            id: this.state.id,
            authority: values.authority,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            RolesDataService.createRol(username, rol)
                .then(() => this.props.history.push('/roles'))
        } else {
            RolesDataService.updateRol(username, this.state.id, rol)
                .then(() => this.props.history.push('/roles'))
        }

        console.log(values);
    }

    goToListRolesComponent = () => {
        this.props.history.push('/roles')
    }

    render() {

        let { description, id } = this.state

        return (
            <div>
                <h3>Rol</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, description }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="authority" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                    <button className="btn btn-success" onClick={this.goToListRolesComponent}>Go back</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default RolComponent