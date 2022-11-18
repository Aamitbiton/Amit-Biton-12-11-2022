import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import Home from "./pages/Home";
import { getWeatherByLocation } from "./utils/weatherUtils";
import { Box, CircularProgress } from "@mui/material";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites";


function App() {
  const currentLocation = useSelector(
    (state: any) => state.app
  ).currentLocation;

  useEffect(() => {
    getWeatherByLocation();
  }, []);

  return (
    <MainWrapper>
      {currentLocation?.LocalizedName ? (
        <>
          <SearchBar />
          <Router>
            <Routes>
              <Route path={'/'} element={ <Home />}/>
              <Route path={'/favorites'} element={ <Favorites />}/>
            </Routes>

          </Router>

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
  );
}

const MainWrapper = styled.div`
  height: 100%;
  
  width: 100%;
`;

export default App;
