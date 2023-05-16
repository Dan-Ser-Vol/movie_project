import { Theme as MuiTheme } from '@mui/material/styles';

export interface Theme extends MuiTheme {
    status: {
        danger: string;
    };
    customPalette: {
        common: {
            black: string;
            white: string;
        };
        primary: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        secondary: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        error: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        warning: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        info: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        success: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
        background: {
            default: string;
            paper: string;
        };
        text: {
            primary: string;
            secondary: string;
            disabled: string;
            hint: string;
        };
        divider: string;
    };
}
