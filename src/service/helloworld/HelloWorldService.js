import axios from 'axios'

const USER = 'user'
const PASSWORD = 'password'
const API_URL = 'http://localhost:8080'
const HELLO_API_URL = `${API_URL}/hello-world`

class HelloWorldService {

    executeHelloWorldService() {
        console.log('executed service')
        return axios.get(`${HELLO_API_URL}`,
            { headers: { authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD) } }
        );
    }

    executeHelloWorldBeanService() {
        console.log('executed service')
        return axios.get(`${HELLO_API_URL}-bean`,
            { headers: { authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD) } }
        );
    }

    executeHelloWorldPathVariableService(name) {
        console.log('executed service')
        return axios.get(`${HELLO_API_URL}/path-variable/${name}`,
            { headers: { authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD) } }
        );
    }

}

export default new HelloWorldService()