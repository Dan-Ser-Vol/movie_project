import {
    createAsyncThunk,
    createSlice,
    isFulfilled,
    isRejectedWithValue,
    PayloadAction
} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IError, IMovie, IMovieResponse} from "../../interfaces";
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
}


const initialState: IState = {
    page: 0,
    results: [],
    trigger: true,
    totalPages: 0,
    totalResults: null,
    errors: null,
    isLoading: false,
    selectedMovies: [],
    isExist: 0
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

const search = createAsyncThunk<IMovieResponse, string>('moviesSlice/search', async (str, {rejectWithValue}) => {
    try {
        return await movieService.searchMovie(str);

    } catch (e) {
        if (e instanceof AxiosError) {
            return rejectWithValue(e);
        }
        throw e;
    }
});

const slice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        setSelectMovie: (state: IState, action: PayloadAction<IMovie>) => {
            state.selectedMovies.push(action.payload)
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
            .addCase(getAll.fulfilled, (state: IState, action: PayloadAction<IMovieResponse>) => {
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.totalResults = action.payload.total_results;
                state.results = action.payload.results;

            })
            .addCase(getAll.pending, (state: IState) => {
                state.isLoading = true
            })
            .addCase(search.fulfilled, (state: IState, action: PayloadAction<IMovieResponse>) => {
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.totalResults = action.payload.total_results;
                state.results = action.payload.results;

            })
            .addMatcher(
                isFulfilled(getAll, search),
                (state: IState) => {
                    state.isLoading = false
                    state.errors = null;
                })
            .addMatcher(
                isRejectedWithValue(getAll, search),
                (state: IState, action: PayloadAction<any>) => {
                    state.errors = action.payload;
                    state.isLoading = false
                }
            ),
});

const {actions, reducer: movieReducer} = slice;
const movieActions = {...actions, getAll, search};

export {movieActions, movieReducer};
