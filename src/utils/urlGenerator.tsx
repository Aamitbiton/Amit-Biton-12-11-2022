export const getCurrentConditionsUrl = (locationKey: string) =>
  `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;

export const autoCompleteUrl =
  "https://dataservice.accuweather.com/locations/v1/cities/autocomplete";

export const geoPositionSearchUrl =
  "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search";
export const getDailyForecastUrl = (key: string) =>
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}`