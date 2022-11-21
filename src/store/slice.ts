import { createSlice } from "@reduxjs/toolkit";
import IFavorite from "../models/types.model";

interface AppInitialState {
  favorites: IFavorite[];
  currentLocation: any;
  darkMode: boolean;
  viewCelsius: boolean;
}

const initialState = {
  favorites: [],
  currentLocation: {},
  darkMode: true,
  viewCelsius: true
} as AppInitialState;

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToFavorites: (app, action) => {
      app.favorites.push(action.payload);
    },
    deleteFavorite: (app,action)=>{
      app.favorites = action.payload
    },
    setCurrentLocation: (app, action) => {
      app.currentLocation = action.payload;
    },
    setDarkMode: (app, action)=>{
      app.darkMode = action.payload
    },
    setViewCelsius: (app, action)=>{
      app.viewCelsius = action.payload
    }
  },
});

export const { deleteFavorite,addToFavorites, setCurrentLocation, setDarkMode, setViewCelsius } = appSlice.actions;

export default appSlice.reducer;
