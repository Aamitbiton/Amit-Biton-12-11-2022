export default async function asyncMiddleware<T>(handler: () => T) {
  try {
    return await handler();
  } catch (e) {
    alert(e);
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

