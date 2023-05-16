

import {IMovieResponse, IVideoResponse} from "../interfaces";
import {axiosInstance} from "./axios.service";




const moviesService = {
    getMovies: async (num:number):Promise<IMovieResponse> => {
        try {
            const response = await axiosInstance.get(`/discover/movie?page=${num}`);
            return response.data;
        } catch (error) {
            console.error('Помилка при отриманні фільмів:', error);
            throw error;
        }
    },


    videoById: async (id:number):Promise<IVideoResponse> => {
        try {
            const response = await axiosInstance.get(`/movie/${id}/videos`);
            return response.data;
        } catch (error) {
            console.error('Помилка при отриманні фільмів:', error);
            throw error;
        }
    },
    searchMovie: async (str:string):Promise<IMovieResponse> => {
        try {
            const response = await axiosInstance.get(`/search/movie?query=${str}`);
            return response.data;
        } catch (error) {
            console.error('Помилка при отриманні фільмів:', error);
            throw error;
        }
    },
};

export default moviesService;
