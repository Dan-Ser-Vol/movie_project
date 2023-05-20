import React, {useEffect} from 'react';
import {Button, ButtonGroup} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions, movieActions} from "../../redux";


const GenreFilter: React.FC = () => {
    const {genres} = useAppSelector((state) => state.genreReducer)
    const {page} = useAppSelector((state) => state.movieReducer)
    const [id, setId] = React.useState<number>(1);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [id, dispatch, page]);

    const handleGenreClick = (id: number) => {
        dispatch(movieActions.selectByGenre({id, page}))
        setId(id)
    };

    return (
        <div className="genre-filter">
            <div>
                <ButtonGroup className="genre-buttons" variant="contained" aria-label="outlined primary button group">
                    {
                        genres.map((genre) => (
                            <Button
                                sx={{width: "100%", fontSize: '12px', marginBottom:'2px'}}
                                key={genre.id}
                                onClick={() => handleGenreClick(genre.id)}
                            >
                                {genre.name}
                            </Button>
                        ))}
                </ButtonGroup>
            </div>
        </div>
    );
};

export {GenreFilter};
