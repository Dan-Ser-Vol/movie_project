import React, {FC, ReactNode} from "react";
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import InfoIcon from '@mui/icons-material/Info';

import Menu from '@mui/material/Menu';


interface IProps {
    children: ReactNode
}

const ITEM_HEIGHT = 48;

const LongMenu: FC<IProps> = ({children}) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                sx={{color: '#627BCC', backgroundColor: '#afa89f', opacity: '60%'}}
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <InfoIcon/>
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    style: {
                        backgroundColor: '#DEDEE2',
                        maxHeight: ITEM_HEIGHT * 6.5,
                        width: '50ch',
                    },
                }}
            >

                <MenuItem onClick={handleClose}>
                    {children}
                </MenuItem>

            </Menu>
        </div>
    );
}

export {LongMenu}