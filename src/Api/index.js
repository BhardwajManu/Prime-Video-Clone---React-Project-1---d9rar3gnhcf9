import axios from "axios";

const api = axios.create({
    baseURL: "https://academics.newtonschool.co/api/v1",
    headers: {
        projectId: "knjxpr9vh9wr",

    }

})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("prime_token")
    console.log(token)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config

})


export default api