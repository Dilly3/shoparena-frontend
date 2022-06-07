import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
     baseURL: 'https://oja-ecommerce.herokuapp.com/api/v1'
    // baseURL: 'localhost:8085/api/v1'
});

// Where you would set stuff like your 'Authorization' header, etc ...
const token = localStorage.getItem("token")
if (token) {
    console.log(token, " from")
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}



export default instance;