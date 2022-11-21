import { toast } from "react-toastify";
export default async function asyncMiddleware<T>(handler: () => T) {
  try {
    return await handler();
  } catch (e: any) {
    alert("You have exceeded the number of requests allowed");
    console.error(e);
  }
}

export const getDay = (date: string): string => {
  let index = new Date(date).getDay();
  let todayIndex = new Date().getDay();
  let dayArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (todayIndex === index) return "Today";
  else return dayArray[index];
};

export const convertFahrenheitToCelsius = (fahrenheit: number): string => {
  let degrees = Math.floor((5 / 9) * (fahrenheit - 32));
  return degrees + "c";
};

export const convertCelsiusToFahrenheit = (celsius: number): string => {
  let degrees = (celsius * 9) / 5 + 32;
  return degrees + "f";
};

export const toastify = (title: string, error: boolean) => {
  if (error) {
    toast.error(title, {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
      draggable: true,
      theme: "dark",
    });
  } else {
    toast(title, {
      position: "bottom-center",
      autoClose: 3000,
      closeOnClick: true,
      draggable: true,
      theme: "dark",
    });
  }
};

export const convertDegrees = (
  viewCelsius: boolean,
  celsius: boolean,
  value: number
): string => {
  if (viewCelsius && celsius) return value + "c";
  else if (viewCelsius && !celsius) return convertFahrenheitToCelsius(value);
  else return convertCelsiusToFahrenheit(value);
};
