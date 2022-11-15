export const getCurrentConditionsUrl = (locationKey: string) =>
  `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;

export const autoCompleteUrl =
  "https://dataservice.accuweather.com/locations/v1/cities/autocomplete";

export const geoPositionSearchUrl =
  "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search";
