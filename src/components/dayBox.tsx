import React from "react";
import { convertFahrenheitToCelsius, getDay } from "../utils/utils";
import WeatherIcon from "./WeatherIcon";
import { styled } from "@mui/material";
interface Iprop {
  day: any;
}
const DayBox = ({ day }: Iprop) => {
  const dayString = () => getDay(day.Date);
  const shortenString = (string: string) => {
    let split = string.split(" ");
    let newArray = [split[0], split[1]];
    return newArray.join(" ");
  };
  return (
    <DayBoxContainer>
      <TitleWrapper>
        <b>{dayString()}</b>
        <p>{shortenString(day.Day.IconPhrase)}</p>
      </TitleWrapper>
      <WeatherIcon iconKey={JSON.stringify(day.Day.Icon)} />
      <p>
        {convertFahrenheitToCelsius(day.Temperature.Minimum.Value)} -{" "}
        {convertFahrenheitToCelsius(day.Temperature.Maximum.Value)}c
      </p>
    </DayBoxContainer>
  );
};
const DayBoxContainer = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.background.paper,
  flexDirection: "row",
  justifyContent: "space-between",
  position: "relative",
  boxShadow: "0 21px 40px -16px #131335",
  borderRadius: "15px",
  padding: "8px 16px",
}));
const TitleWrapper = styled("div")(({ theme }) => ({
  flexGrow: 1,
}));

export default DayBox;
