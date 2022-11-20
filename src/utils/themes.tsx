import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6565fd',
        },

    },
});
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fff',
        }
    },
});