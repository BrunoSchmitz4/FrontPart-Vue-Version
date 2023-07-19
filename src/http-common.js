import Axios from 'axios';

const createAxios = Axios.create({
    // baseURL: "https://pokeapi.co/api/v2"
    baseURL: "https://localhost:7025/"
});

export default createAxios;