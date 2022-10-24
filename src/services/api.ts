import axios from "axios";
const api = axios.create({
    baseURL: "https://api-planta3.herokuapp.com/api",
    headers: {
        Accept: 'application/json',
    }
})
export default api;
