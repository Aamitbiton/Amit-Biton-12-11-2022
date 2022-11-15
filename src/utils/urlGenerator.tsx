export const getCurrentConditionsUrl = (locationKey: string) =>
  `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;

export const autoCompleteUrl =
  "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

export const geoPositionSearchUrl =
  "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search";
