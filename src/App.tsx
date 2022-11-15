import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLocation } from "./store/slice";
import SearchBar from "./components/SearchBar";
import styled from "styled-components";
import WhetherBox from "./components/WhetherBox";
import { getWeatherByLocation } from "./utils/weatherUtils";
import { Box, CircularProgress } from "@mui/material";

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
          <WhetherBox />
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
  padding: 20px;
`;

export default App;
