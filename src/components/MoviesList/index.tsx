import * as React from 'react';
import {FC} from 'react';
import {Box, Grid} from "@mui/material";

import {movieActions} from "../../redux";
import {MovieCard} from "../MovieCard";
import {PaginationControlled} from "../Pagination";
import {MyLoader} from "../Loader";
import {useAppDispatch} from "../../hooks";
import {IMovie} from "../../interfaces";


interface IProps {
    results: IMovie[],
    isLoading: boolean,
    totalPages: number,
    page: number
}

const MoviesList: FC<IProps> = ({results, isLoading, totalPages, page}) => {
    const dispatch = useAppDispatch();

    const setPages = (pages: number) => {
        dispatch(movieActions.setPage(pages))
    }

    return (
        <Box sx={{padding: '10px'}}>
            {
                isLoading ?
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                        <MyLoader/>
                    </Box>
                    :
                    <Grid container spacing={1}>
                        {results.map((movie) => (
                            <Grid item xs={12} sm={6} md={4} key={movie.id}>
                                <MovieCard movie={movie}/>
                            </Grid>
                        ))}
                    </Grid>
            }
            <Box>
                <PaginationControlled page={page} setPage={setPages} totalPages={totalPages}/>
            </Box>
        </Box>
    );
};

export {MoviesList};
