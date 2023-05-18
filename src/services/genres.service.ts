import {IGenre} from "../interfaces";
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

}


export {genresService};
