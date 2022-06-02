import axios from 'axios';

const products_data = axios.create({
    baseURL: "http://localhost:5000/api/product/"
})

export default products_data;