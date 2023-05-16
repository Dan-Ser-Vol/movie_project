

import { IMovieResponse} from "../interfaces";
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

    byId: async (id:number):Promise<IMovieResponse> => {
        try {
            const response = await axiosInstance.get(`/discover/movie?id=${id}`);
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
