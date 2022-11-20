import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationLabel } from "../utils/weatherUtils";
import WeatherIcon from "../components/WeatherIcon";
import styled, {keyframes} from "styled-components";
import DayBox from "../components/dayBox";
import SearchBar from "../components/SearchBar";
import { addToFavorites, deleteFavorite } from "../store/slice";
import { toastify } from "../utils/utils";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import {Button} from "@mui/material";
import { slideInUp } from "react-animations";

const Home = () => {
  const currentLocation = useSelector(
    (state: any) => state.app
  ).currentLocation;
  const favorites = useSelector((state: any) => state.app).favorites;
  const dispatch = useDispatch();
  const checkIfExistInFavorites =favorites.length ? favorites.filter((fav: any) => fav.id === currentLocation.Key).length : null;

  const addOrRemoveFavorite = () => {
    let data = {
      name: getLocationLabel(currentLocation),
      id: currentLocation.Key,
      icon: JSON.stringify(currentLocation.WeatherIcon),
      weather: {
        title: currentLocation.WeatherText,
        temp:
          currentLocation?.Temperature?.Metric?.Value +
          currentLocation?.Temperature?.Metric?.Unit,
      },
      locationObject: {
        AdministrativeArea: currentLocation.AdministrativeArea,
        Country: currentLocation.Country,
        Key: currentLocation.Key,
        LocalizedName: currentLocation.LocalizedName,
      },
    };

    if (checkIfExistInFavorites) {
      let index = favorites.indexOf(data);
      let newFavorites = [...favorites];
      newFavorites =  newFavorites.length > 1 ? newFavorites.splice(index,1) : []
      dispatch(deleteFavorite(newFavorites))
      toastify(`${data.name} successfully removed from favorites`);
    } else {
      dispatch(addToFavorites(data));
      toastify(`${data.name} successfully added to favorites`);
    }
  };

  return (
    <>
      <HomeContainer>
        <SearchBar />

        <h2>{getLocationLabel(currentLocation)}</h2>
        <Row>
          <div>
            <p>{currentLocation?.WeatherText}</p>
            <p>
              {currentLocation?.Temperature?.Metric?.Value +
                currentLocation?.Temperature?.Metric?.Unit}
            </p>
            <WeatherIcon
              iconKey={JSON.stringify(currentLocation.WeatherIcon)}
            />
          </div>

            <Button
              onClick={addOrRemoveFavorite}
              style={{color: '#6565fd'}}
              variant="text"
              size={"small"}
              startIcon={ checkIfExistInFavorites ? <StarBorderIcon/> :<StarIcon />}
            >
                {checkIfExistInFavorites ? 'remove from favorite' : 'add to favorites'}
            </Button>



        </Row>

        <DayBoxContainer>
          <p>Forecast for 5 days</p>
          {currentLocation.DailyForecasts.map((day: any) => {
            return <DayBox key={day.Date} day={day} />;
          })}
        </DayBoxContainer>
      </HomeContainer>
    </>
  );
};
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const DayBoxContainer = styled.div`
  margin: 16px 0;
  display: grid;
  grid-gap: 16px;
  align-items: stretch;
  width: 100%;
  grid-template-rows: auto;
  justify-content: center;
  animation: 2.5s ${keyframes`${slideInUp}`};

`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Home;
