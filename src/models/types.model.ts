export default interface IFavoriteLocation {
  id: string;
  name: string;
  currentLocation: string;
}

export default interface ILocation {
  AdministrativeArea: { ID: string; LocalizedName: string };
  Country: { ID: string; LocalizedName: string };
  Key: string;
  LocalizedName: string;
 }
 export default interface IFavorite {
   name: string,
   id: string,
   icon: string,
   weather: {title: string, temp: string},
   locationObject: {
     AdministrativeArea: { ID: string; LocalizedName: string };
     Country: { ID: string; LocalizedName: string };
     Key: string;
     LocalizedName: string
   }
 }