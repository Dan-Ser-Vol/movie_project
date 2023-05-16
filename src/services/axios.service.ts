import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3'
const axiosInstance = axios.create({
    baseURL,
});


axiosInstance.interceptors.request.use(res => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U'
    if (access) {
        res.headers.Authorization = `Bearer ${access}`
    }
    return res
})

export {
    axiosInstance
}