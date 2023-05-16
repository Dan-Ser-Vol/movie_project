import {AxiosResponse} from 'axios';
import {IGenre, IMovie} from "../interfaces";
import {axiosInstance} from "./axios.service";


const genresService = {
    getGenres: async (): Promise<IGenre[]> => {
        try {
            const response = await axiosInstance.get('/genre/movie/list');
            return response.data.genres;
        } catch (error) {
            console.error('Error fetching genres:', error);
            throw error;
        }
    },


    searchMoviesByGenre: async (id: string | number): Promise<IMovie[]> => {
        try {
            const response = await axiosInstance.get(
                `discover/movie?with_genres=${id}`
            );
            return response.data.results;
        } catch (error) {
            console.error('Error occurred while fetching movies by genre:', error);
            return [];
        }
    },
    searchMoviesByGenres: async (genres: string[] | number[]): Promise<IMovie[]> => {
        const genreParams = genres.join(',');
        try {
            const response: AxiosResponse = await axiosInstance.get(
                `/discover/movie?with_genres=${genreParams}`
            );
            return response.data.results;
        } catch (error) {
            console.error('Error occurred while fetching movies by genres:', error);
            return [];
        }
    }
}


export {genresService};
