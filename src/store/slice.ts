import { createSlice } from "@reduxjs/toolkit";
import IFavoriteLocation from "../models/types.model";
import ILocation from "../models/types.model";

interface AppInitialState {
  allFavorites: any[];
  currentLocation: any;
}

const initialState = {
  allFavorites: [],
  currentLocation: {},
} as AppInitialState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    getDefaultWeather: (app, action) => {
      app.allFavorites.push(action.payload);
    },
    setCurrentLocation: (app, action) => {
      app.currentLocation = action.payload;
    },
  },
});

export const { getDefaultWeather, setCurrentLocation } = appSlice.actions;

export default appSlice.reducer;
