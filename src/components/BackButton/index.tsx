import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import {Box} from "@mui/material";

interface IProps {

}

const BackButton: FC<IProps> = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{marginLeft: '30px'}}>
            <Button color="secondary"
                    sx={{color: 'white', backgroundColor: '#EF9947', marginTop: '3px'}}
                    onClick={() => navigate(-1)}>BACK</Button>
        </Box>
    );
};

export {BackButton};