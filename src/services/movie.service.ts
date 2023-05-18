
import {IMovieResponse, IVideoResponse} from "../interfaces";
import {axiosInstance} from "./axios.service";
import {AxiosResponse} from "axios";


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

    searchMoviesByGenre: async (genresId: number, page:number): Promise<IMovieResponse> => {
        try {
            const response: AxiosResponse = await axiosInstance.get(
                `/discover/movie?with_genres=${genresId}&page=${page}`
            );
            return response.data;
        } catch (error) {
            console.error('Error occurred while fetching movies by genres:', error);
            throw error;
        }
    },

    searchMoviesByYear: async ( year: number): Promise<IMovieResponse> => {
        try {
            const response: AxiosResponse = await axiosInstance.get(
                `/discover/movie?primary_release_year=${year}`
            );
            return response.data;
        } catch (error) {
            console.error('Error occurred while fetching movies by genres:', error);
            throw error;
        }
    }



};

export default moviesService;
