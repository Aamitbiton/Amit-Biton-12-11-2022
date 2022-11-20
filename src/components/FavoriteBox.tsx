import React from 'react';
import styled from "styled-components";
import IFavorite from "../models/types.model";
import WeatherIcon from "./WeatherIcon";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch} from "react-redux";
import {deleteFavorite} from "../store/slice";
import {toastify} from "../utils/utils";
import {changeCurrentLocation} from "../utils/weatherUtils";
import {useNavigate} from "react-router-dom";
interface data {favorite: IFavorite, favorites:IFavorite[]}

const FavoriteBox = ({favorite,favorites}:data) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const removeFavorite = ()=>{
        let index = favorites.indexOf(favorite);
       let newFavorites = [...favorites];
          newFavorites =  newFavorites.length > 1 ? newFavorites.splice(index,1) : []
        dispatch(deleteFavorite(newFavorites))
        toastify(` ${favorite.name} successfully removed to favorites`)

    }
    const watchFavorite = async ()=>{
     await changeCurrentLocation(favorite.locationObject);
     navigate('/')
    }
    const reduceName = (name: string) =>{
        let split = name.split(' ')
        if (split.length < 3) return name;
        return [split[0],split[2]].join()
    }
    return (
        <FavoriteBoxWrapper>
         <p>{reduceName(favorite.name)}</p>
            <WeatherIcon iconKey={favorite.icon}/>
            <p>{favorite.weather.temp}</p>
            <p>{favorite.weather.title}</p>
            <ActionButtonContainer onClick={removeFavorite}>
                <DeleteIcon/>
                <ActionButton>Delete</ActionButton>
            </ActionButtonContainer>
            <ActionButtonContainer onClick={watchFavorite}>
                <VisibilityIcon/>
                <ActionButton>Watch</ActionButton>
            </ActionButtonContainer>

        </FavoriteBoxWrapper>
    );
};
const FavoriteBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: auto;
  background-color: var(--primary-color);
  box-shadow: 0 21px 40px -16px #131335;
  border-radius: 15px;
  padding: 8px 16px;
`
const ActionButtonContainer = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 20px;
  color: #c3c3c3;
  font-weight: bold;
  align-items: center;
  margin: 6px;
  padding: 4px 8px;
  border: 1px solid #353578;

  &:hover {
    background-color: var(--primary-color);
    transition: 250ms background-color, color;
    color: #fff;
  }
`;
const ActionButton = styled.div`
  font-size: 13px;
  ;
`;

export default FavoriteBox;