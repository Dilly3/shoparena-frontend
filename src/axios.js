import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
    baseURL: 'http://localhost:8080/api/v1'
});

// Where you would set stuff like your 'Authorization' header, etc ...
const token = localStorage.getItem("token")
if (token) {
    console.log(token, " from")
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}



export default instance;