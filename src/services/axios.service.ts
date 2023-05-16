import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3'
const axiosInstance = axios.create({
    baseURL,
});


axiosInstance.interceptors.request.use(res => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTc1M2JkZmVjNWMzYmExOWI1NDQ0YmM4NDQ5NjQ5OSIsInN1YiI6IjYxYzc3MTQ4OGQ1MmM5MDAxYjljM2Y0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pOVbLyfouKLrWMTHiK-ZIiWIVz3H8f8ES_2aFnufrZo'
    if (access) {
        res.headers.Authorization = `Bearer ${access}`
    }
    return res
})

export {
    axiosInstance
}