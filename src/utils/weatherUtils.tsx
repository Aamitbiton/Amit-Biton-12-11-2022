import { fetch_url } from "./fetchFunction";
import store from "../store/store";
import {autoCompleteUrl, geoPositionSearchUrl, getCurrentConditionsUrl} from "./urlGenerator";
import { setCurrentLocation } from "../store/slice";
interface IGeoLocation {
  coords: { latitude: number; longitude: number };
}

const getLocation = (): IGeoLocation | any => {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

export const getLocationLabel = (location: any): string => {
  console.count("getlabel");
  if (!location.LocalizedName) return "";
  return (
    location?.LocalizedName +
    "," +
    location?.AdministrativeArea?.LocalizedName +
    "," +
    location?.Country?.LocalizedName
  );
};

export const getWeatherByLocation = async () => {
  const myLocation = await getLocation();
  let params = {
    q: `${myLocation.coords.latitude},${myLocation.coords.longitude}`,
  };
  let locationObject = await fetch_url({ url: geoPositionSearchUrl, params });
  let weatherObject = await fetch_url({
    url: getCurrentConditionsUrl(locationObject?.data.Key),
  });
  let newData = { ...weatherObject?.data[0], ...locationObject?.data };
  store.dispatch(setCurrentLocation(newData));
};

export const changeCurrentLocation = async (locationObject: any) => {
  let weatherObject = await fetch_url({
    url: getCurrentConditionsUrl(locationObject?.Key),
  });
  let newData = { ...weatherObject?.data[0], ...locationObject };
  await store.dispatch(setCurrentLocation(newData));
};

export const getAutoCompleteData = async (value: string) =>{
  return fetch_url({ url: autoCompleteUrl, params: { q: value } })
}