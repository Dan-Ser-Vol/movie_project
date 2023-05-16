declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        }
        palette?: any | undefined
        typography?: any
        spacing?: any | undefined
    }


    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}
