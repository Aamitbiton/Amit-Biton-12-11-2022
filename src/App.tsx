import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Home from "./pages/Home";
import { getWeatherByLocation } from "./utils/weatherUtils";
import { Box, CircularProgress } from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider} from "@mui/material";
import {darkTheme,lightTheme} from "./utils/themes";


function App() {
  const currentLocation = useSelector(
    (state: any) => state.app
  ).currentLocation;
  const darkMode = useSelector((state: any) => state.app).darkMode


  useEffect(() => {
    getWeatherByLocation();
  }, []);

  return (
      <ThemeProvider theme={darkTheme}>
      <MainWrapper>
      {currentLocation?.LocalizedName ? (
        <>
          <Header />
            <Routes>
              <Route path={'/'} element={ <Home />}/>
              <Route path={'/favorites'} element={ <Favorites />}/>
            </Routes>
          <ToastContainer/>



        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      )}
    </MainWrapper>
      </ThemeProvider>

  );
}

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export default App;
