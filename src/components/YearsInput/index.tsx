import React, { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { movieActions } from "../../redux";

interface YearOption {
    label: string;
    year: number;
}

const YearsInput = () => {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();

    const years: YearOption[] = [];
    for (let year = 2023; year >= 1930; year--) {
        years.push({ label: String(year), year });
    }

    useEffect(() => {
        const selectByYear = async () => {
            await dispatch(movieActions.selectByYear(+value));
        };
        selectByYear();
    }, [dispatch, value]);

    const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string);
    };


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth sx={{marginBottom:'2px'}}>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    // @ts-ignore
                    onChange={handleSelectChange}
                >
                    {years.map((item, idx) => (
                        <MenuItem key={idx} value={item.year}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default YearsInput;
