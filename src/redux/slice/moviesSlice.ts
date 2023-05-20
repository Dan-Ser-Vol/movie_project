import {
    createAsyncThunk,
    createSlice,
    isFulfilled,
    isPending,
    isRejectedWithValue,
    PayloadAction
} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {
    IError,
    IGenreArrayIdAndPage,
    IGenreIdAndPage,
    IMovie,
    IMovieInfo,
    IMovieResponse,
    IVideo,
    IVideoResponse
} from "../../interfaces";
import movieService from "../../services/movie.service";


interface IState {
    page: number;
    trigger: boolean;
    results: IMovie[];
    totalPages: number;
    totalResults: number | null;
    errors: IError | null;
    isLoading: boolean
    selectedMovies: IMovie[]
    isExist: number
    videos:IVideo[] | null
    movieInfo: IMovieInfo | null
}


const initialState: IState = {
    page: 1,
    results: [],
    trigger: true,
    totalPages: 0,
    totalResults: null,
    errors: null,
    isLoading: false,
    selectedMovies: [],
    isExist: 0,
    videos:null,
    movieInfo : null

};

const getAll = createAsyncThunk<IMovieResponse, number, { rejectValue: AxiosError<unknown, any> }>(
    'moviesSlice/getAll',
    async (pageNum, {rejectWithValue}) => {
        try {
            return await movieService.getMovies(pageNum);
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e);
            }
            throw e;
        }
    }
);

const search = createAsyncThunk<IMovieResponse, string>(
    'moviesSlice/search',
    async (str, {rejectWithValue}) => {
    try {
        return await movieService.searchMovie(str);

    } catch (e) {
        if (e instanceof AxiosError) {
            return rejectWithValue(e);
        }
        throw e;
    }
});


const selectByGenre = createAsyncThunk<IMovieResponse, IGenreIdAndPage>(
    'moviesSlice/selectByGenre',
    async ({id, page}, { rejectWithValue }) => {
        try {
            return await movieService.searchMoviesByGenre(id, page);
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e);
            }
            throw e;
        }
    }
);

const selectByArrGenre = createAsyncThunk<IMovieResponse, IGenreArrayIdAndPage>(
    'moviesSlice/selectByArrGenre',
    async ({arrayId, page}, { rejectWithValue }) => {
        try {
            return await movieService.searchMoviesByArrayGenre(arrayId, page);
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e);
            }
            throw e;
        }
    }
);


const selectByYear = createAsyncThunk<IMovieResponse, number>(
    'moviesSlice/selectByYear',
    async ( year, { rejectWithValue }) => {
        try {
            return await movieService.searchMoviesByYear(year);
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e);
            }
            throw e;
        }
    }
);

const  getVideoById = createAsyncThunk<IVideoResponse, number>(
    'moviesSlice/getVideoById',
        async (id:number, { rejectWithValue }) => {
            try {
                return await movieService.videoById(id)
            } catch (e) {
                if (e instanceof AxiosError) {
                    return rejectWithValue(e);
                }
                throw e;
            }
        })

const  getMovieInfoById = createAsyncThunk<IMovieInfo, number>(
    'moviesSlice/getMovieInfoById',
    async (id:number, { rejectWithValue }) => {
        try {
            return await movieService.getMovieById(id)
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e);
            }
            throw e;
        }
    })

const slice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        setSelectMovie: (state: IState, action: PayloadAction<IMovie>) => {
            state.selectedMovies.push(action.payload)
        },
        setPage: (state: IState, action: PayloadAction<number>) => {
            state.page =action.payload
        },

        deleteMovie: (state: IState, action: PayloadAction<number>) => {
            const movieIndex = state.selectedMovies.findIndex((value) => value.id === action.payload);
            state.selectedMovies.splice(movieIndex, 1);
        },
        setIsExist: (state: IState, action: PayloadAction<number>) => {
            state.isExist = action.payload
        }
    },

    extraReducers: (builder) =>
        builder
            .addCase(getVideoById.pending, (state:IState)=>{
                state.isLoading = true
            })
            .addCase(getMovieInfoById.pending, (state:IState)=>{
                state.isLoading = true
            })
            .addCase(getMovieInfoById.fulfilled, (state:IState, action:PayloadAction<IMovieInfo>)=>{
                state.isLoading = false
                state.movieInfo = action.payload
            })
            .addCase(getVideoById.fulfilled, (state:IState, action:PayloadAction<IVideoResponse>)=>{
                state.videos = action.payload.results
                state.isLoading = false
            })
            .addMatcher(isFulfilled(search, getAll, selectByGenre, selectByArrGenre, selectByYear),
                (state: IState, action:PayloadAction<IMovieResponse>) => {
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.totalResults = action.payload.total_results;
                state.results = action.payload.results;
                    state.isLoading = false
                    state.errors = null;
            })
            .addMatcher(isPending(search, getAll, selectByGenre, selectByArrGenre, selectByYear),(state: IState) => {
                state.isLoading = true
                state.errors = null;
            } )
            .addMatcher(
                isRejectedWithValue(getAll, search, selectByGenre, selectByArrGenre,selectByYear),
                (state: IState, action: PayloadAction<any>) => {
                    state.errors = action.payload;
                    state.isLoading = false
                }
            ),
});

const {actions, reducer: movieReducer} = slice;
const movieActions = {...actions,
    getAll,
    search,
    selectByGenre,
    selectByYear,
    selectByArrGenre,
    getVideoById,
    getMovieInfoById
    }



export {movieActions, movieReducer, };
