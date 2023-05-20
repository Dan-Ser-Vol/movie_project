import React, {FC, useEffect, useState} from "react";
import Checkbox from '@mui/material/Checkbox';
import {Box, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions, movieActions} from "../../redux";

interface IProps {
    genre: {
        name: string
        id: number
    }
}

const CheckGenre: FC<IProps> = React.memo(
    ({genre}) => {
        const {arrayId} = useAppSelector((state => state.genreReducer))
        const {page} = useAppSelector((state => state.movieReducer))
        const [checked, setChecked] = useState(false);
        const dispatch = useAppDispatch();

        useEffect(() => {
            if (checked && arrayId.length > 0) {
                dispatch(movieActions.selectByArrGenre({arrayId, page}));
            }
        }, [checked, arrayId, dispatch, page]);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(event.target.checked);
            if(event.target.checked) {
                dispatch(genreActions.setGenreId(genre.id))
            }else{
                dispatch(genreActions.deleteGenreId(genre.id))
            }
        };

        return (
            <Box sx={{display: 'flex', alignItems: "center", marginRight: '18px'}}>
                <Typography color={'#6c6767'}>{genre.name}</Typography>
                <Checkbox
                    sx={{color: '#F09A47'}}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'controlled'}}
                />
            </Box>
        )
    }
)

export {CheckGenre};
