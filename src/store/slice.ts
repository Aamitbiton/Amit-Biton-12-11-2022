import { createSlice } from "@reduxjs/toolkit";
import IFavorite from "../models/types.model";

interface AppInitialState {
  favorites: IFavorite[];
  currentLocation: any;
  darkMode: boolean
}

const initialState = {
  favorites: [],
  currentLocation: {},
  darkMode: true
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
    }
  },
});

export const { deleteFavorite,addToFavorites, setCurrentLocation, setDarkMode } = appSlice.actions;

export default appSlice.reducer;
