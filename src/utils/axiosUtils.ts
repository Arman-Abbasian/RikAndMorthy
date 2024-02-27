import axios from "axios";

const api=axios.create({baseURL:"https://rickandmortyapi.com/api/"})
api.defaults.headers.common.Authorization = "AUTH_TOKEN";
export default api