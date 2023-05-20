import {IGenre} from "./genre.interface";

export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

 export interface IVideo {
     iso_639_1: string;
     iso_3166_1: string;
     name: string;
     key: string;
     published_at: string;
     site: string;
     size: number;
     type: string;
     official: boolean;
     id: string;
 }

 export interface IVideoResponse {
     id: number;
     results: IVideo[];
 }


export interface IMovieResponse {
    page: number;
    results: IMovie[];
   total_pages: number
   total_results: number
}



export interface IProductionCompany {
     id: number;
     logo_path: string | null;
     name: string | null;
     origin_country: string;
 }

 export interface ISpokenLanguage {
     english_name: string;
     iso_639_1: string;
     name: string;
 }

export interface IMovieInfo {
     adult: boolean;
     backdrop_path: string;
     belongs_to_collection: null;
     budget: number;
     genres: IGenre[];
     homepage: string;
     id: number;
     imdb_id: string;
     original_language: string;
     original_title: string;
     overview: string;
     popularity: number;
     poster_path: string;
     production_companies: IProductionCompany[];
     production_countries: { iso_3166_1: string; name: string }[];
     release_date: string;
     revenue: number;
     runtime: number;
     spoken_languages: ISpokenLanguage[];
     status: string;
     tagline: string;
     title: string;
     video: boolean;
     vote_average: number;
     vote_count: number;
 }



