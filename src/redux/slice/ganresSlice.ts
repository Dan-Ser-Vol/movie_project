import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGenre} from "../../interfaces";
import {genresService} from "../../services";
import {AxiosError} from "axios";


interface IState {
    genres: IGenre[]
    selectedGenre: IGenre |null
    arrayId: number []
}

const initialState: IState = {
    genres: [],
    selectedGenre: null,
    arrayId: []
}


const getAll = createAsyncThunk<IGenre[], void>('genreSlice/getAll', async (_,{rejectWithValue})=>{
   try {
       return  await genresService.getGenres()
   }catch (e) {
       if (e instanceof AxiosError) {
           return rejectWithValue(e);
       }
       throw e;
   }
})



const slice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {
        setGenreId: (state, action) => {
            state.arrayId.push(action.payload)
        },
        deleteGenreId: (state, action) => {
            state.arrayId = state.arrayId.filter((id) => id !== action.payload);
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state:IState, action:PayloadAction<IGenre[]>)=>{
            state.genres = action.payload
        })
})


const {actions, reducer: genreReducer} = slice
const genreActions = {...actions, getAll}

export {
    genreActions, genreReducer
}