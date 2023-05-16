
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



export interface IGenre {
     id: number;
     name: string;
 }