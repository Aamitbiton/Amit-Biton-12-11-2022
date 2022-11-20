import { fetch_url } from "./fetchFunction";
import store from "../store/store";
import {
  autoCompleteUrl,
  geoPositionSearchUrl,
  getCurrentConditionsUrl,
  getDailyForecastUrl,
} from "./urlGenerator";
import { setCurrentLocation } from "../store/slice";
import asyncMiddleware, {toastify} from "./utils";
interface IGeoLocation {
  coords: { latitude: number; longitude: number };
}
const defaultLocation = {
  Key: 215793,
  LocalizedName: "Tel Aviv",
  AdministrativeArea: {LocalizedName: "Tel Aviv"},
  Country: {LocalizedName:"Israel"}
};

const getLocation = (): IGeoLocation | any => {
  const options = { enableHighAccuracy: true, maximumAge: 100, timeout: 60000 };
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  ).catch(()=>{
      toastify('We could not access your location, showing the default location')
     return null
  });
};

export const getLocationLabel = (location: any): string => {
  if (!location.LocalizedName) return "";
 if (location?.LocalizedName === location?.AdministrativeArea?.LocalizedName)
     return (
    location?.LocalizedName +
    "," +
    location?.Country?.LocalizedName
  );
 else return (
     location?.LocalizedName +
     "," +
     location?.AdministrativeArea?.LocalizedName +
     "," +
     location?.Country?.LocalizedName
 )
};

export const getWeatherByLocation = async () => {

  const myLocation = await getLocation();
 const  locationObject = myLocation ? await getLocationObject(myLocation) : defaultLocation;
  let weatherObject = await getWeatherObject(locationObject?.Key);
  let dailyForecast = await getDailyForecast(locationObject?.Key);
  let newData = {
    ...weatherObject,
    ...dailyForecast,
      ...locationObject
  };
  store.dispatch(setCurrentLocation(newData));
};

export const changeCurrentLocation = async (locationObject: any) => {
  let weatherObject = await getWeatherObject(locationObject?.Key)
  let dailyForecast = await getDailyForecast(locationObject?.Key)
  let newData = { ...weatherObject, ...locationObject, ...dailyForecast};
  await store.dispatch(setCurrentLocation(newData));
};

export const getAutoCompleteData = async (value: string) => {
  return fetch_url({ url: autoCompleteUrl, params: { q: value } });
};

export const getDailyForecast = async (key: string) => {
    let res = await fetch_url({ url: getDailyForecastUrl(key) });
    return {DailyForecasts: res?.data?.DailyForecasts}
};

export const getWeatherObject = async (key: string) => {
    let res = await (fetch_url({
      url: getCurrentConditionsUrl(key),
    }));
    return res?.data[0];
};

export const getLocationObject = async (myLocation: any) => {
  let params = {
    q: `${myLocation.coords.latitude},${myLocation.coords.longitude}`,
  };
  let res =  await fetch_url({ url: geoPositionSearchUrl, params });
  return res?.data
};
