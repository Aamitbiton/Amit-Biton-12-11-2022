import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6565fd",
    },
    background: {
      default: "#1b1b41",
      paper: "#6565fd",
    },
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    background: {
      default: "#fff",
      paper: "#ddd",
    },
  },
});
