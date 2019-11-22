import axios from 'axios'

//const USER = 'user'
//const PASSWORD = 'dummy'
const ROL_API_URL = 'http://localhost:8080/users'
//const USER_API_URL = `${ROL_API_URL}/users/${USER}`

class RolesDataService {

    retrieveAllRoles() {
        console.log('executed service')
        return axios.get(`${ROL_API_URL}/roles`,
            //{ headers: { authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD) } }
        );
    }

    retrieveRol(username, id) {
        //console.log('executed service')
        return axios.get(`${ROL_API_URL}/${username}/roles/${id}`);
    }

    deleteRol(username, id) {
        //console.log('executed service')
        return axios.delete(`${ROL_API_URL}/${username}/roles/${id}`);
    }

    updateRol(username, id, rol) {
        //console.log('executed service')
        return axios.put(`${ROL_API_URL}/${username}/roles/${id}`, rol);
    }

    createRol(username, rol) {
        //console.log('executed service')
        return axios.post(`${ROL_API_URL}/${username}/roles`, rol);
    }

}

export default new RolesDataService()