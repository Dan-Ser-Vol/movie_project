import React, { FC, useEffect, useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { Box, Typography } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { movieActions } from "../../redux";

interface IProps {
    genre: {
        name: string
        id: number
    }
    page: number
}

const CheckGenre: FC<IProps> = ({ genre, page }) => {
    console.log(page)
    const [checked, setChecked] = useState(false);
    const dispatch = useAppDispatch();
    const id = genre.id;

    useEffect(() => {
        if (checked) {
            dispatch(movieActions.selectByGenre({ id, page }));
        }
    }, [checked, dispatch, id, page]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: "center", marginRight: '18px' }}>
            <Typography color={'#6c6767'}>{genre.name}</Typography>
            <Checkbox
                sx={{ color: '#F09A47' }}
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </Box>
    );
}

export { CheckGenre };
