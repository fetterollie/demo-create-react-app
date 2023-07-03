import axios from 'axios';

//set to host URL
export default axios.create({
    baseURL:"http://localhost:3500"
});