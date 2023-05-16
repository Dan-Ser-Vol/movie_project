import {createSlice} from "@reduxjs/toolkit";

import {IMovie} from "../../interfaces";


interface IState {
    genres: IMovie[]
}

const initialState: IState = {
    genres: [],
}


const slice = createSlice({
    name: "genreSlice",
    initialState,
    reducers: {},
    extraReducers: {}
})


const {actions, reducer: genreReducer} = slice
const genreActions = {...actions}

export {
    genreActions, genreReducer
}