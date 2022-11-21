import React from "react";
interface Iprop {
  iconKey: string;
}

const WeatherIcon = ({ iconKey }: Iprop) => {
  const img = require(`../assets/weather-icons/${iconKey}.png`);
  return (
    <div>
      <img src={img} />
    </div>
  );
};

export default WeatherIcon;
