import axios from 'axios'
import API from '../services/api'

export const register = newUser => {
    return axios
        .post(`${API}/api/users/register`, {

            email: newUser.email,
            name: newUser.password,

        })
        .then(response => {
            console.log('Registered')
        })
}

export const login = user => {
    return axios
        .post(`${API}/api/users/`, {
            name: user.email,
            email: user.password
        })
        .then(response => {
            if (typeof response.data === 'object') {


            }
            if (typeof response.data === 'string') {

            }

        })
        .catch(err => {
            console.log(err)
        })
}
export const changePassword = user => {
    return axios
        .post(`${API}/api/users/changepassword`, {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}


export const getProfile = user => {
    return axios
        .get(`${API}/api/users/profil`, {
            headers: { Authorization: ` ${this.getToken()}` }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}