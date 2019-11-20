import axios from 'axios'

const USER = 'user'
//const PASSWORD = 'password'
const ROL_API_URL = 'http://localhost:8080'
const USER_API_URL = `${ROL_API_URL}/users/${USER}`

class RolesDataService {

    retrieveAllRoles(name) {
        console.log('executed service')
        return axios.get(`${USER_API_URL}/roles`,
            //{ headers: { authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD) } }
        );
    }
}

export default new RolesDataService()