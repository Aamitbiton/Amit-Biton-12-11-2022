import React from "react";
import IFavorite from "../models/types.model";
import WeatherIcon from "./WeatherIcon";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../store/slice";
import { toastify } from "../utils/utils";
import { changeCurrentLocation } from "../utils/weatherUtils";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
interface data {
  favorite: IFavorite;
  favorites: IFavorite[];
}

const FavoriteBox = ({ favorite, favorites }: data) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const removeFavorite = () => {
    let index = favorites.indexOf(favorite);
    let newFavorites = [...favorites];
    newFavorites = newFavorites.length > 1 ? newFavorites.splice(index, 1) : [];
    dispatch(deleteFavorite(newFavorites));
    toastify(` ${favorite.name} successfully removed to favorites`, true);
  };
  const watchFavorite = async () => {
    await changeCurrentLocation(favorite.locationObject);
    navigate("/");
  };
  const reduceName = (name: string) => {
    let split = name.split(",");
    if (split.length < 3) return name;
    return [split[0], split[2]].join();
  };
  return (
    <FavoriteBoxWrapper>
      <p>{reduceName(favorite.name)}</p>
      <WeatherIcon iconKey={favorite.icon} />
      <p>{favorite.weather.temp}</p>
      <p>{favorite.weather.title}</p>
      <ActionButtonContainer onClick={removeFavorite}>
        <DeleteIcon />
        <ActionButton>Delete</ActionButton>
      </ActionButtonContainer>
      <ActionButtonContainer onClick={watchFavorite}>
        <VisibilityIcon />
        <ActionButton>Watch</ActionButton>
      </ActionButtonContainer>
    </FavoriteBoxWrapper>
  );
};
const FavoriteBoxWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "150px",
  height: "auto",
  boxShadow: " 0 21px 21px -16px #131335",
  borderRadius: "20px",
  backgroundColor: theme.palette.background.paper,
  padding: "8px 16px",
}));

const ActionButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  borderRadius: "20px",
  fontWeight: "bold",
  alignItems: "center",
  margin: "6px",
  padding: "4px 8px",
  border: " 1px solid #353578",
}));

const ActionButton = styled("div")(({ theme }) => ({
  fontSize: "13px",
}));

export default FavoriteBox;
