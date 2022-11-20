import {toast} from "react-toastify";
export default async function asyncMiddleware<T>(handler: () => T) {
  try {
    return await handler();
  } catch (e: any) {
    toastify(e);
    console.error(e);
  }
}

export const getDay = (date: string): string => {
  let index = (new Date(date)).getDay()
  let todayIndex = (new Date()).getDay()
  let dayArray = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  if (todayIndex === index) return 'Today'
  else return dayArray[index]
};

export const convertFahrenheitToCelsius = (degrees: number):number => Math.floor(5 / 9 * (degrees - 32));

export const toastify = (title: string)=>{

  toast(title, {
    position: "bottom-center",
    autoClose: 3000,
    closeOnClick: true,
    draggable: true,
    theme: "dark",
  });
}
