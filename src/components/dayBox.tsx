import React from "react";
import {convertDegrees, convertFahrenheitToCelsius, getDay} from "../utils/utils";
import WeatherIcon from "./WeatherIcon";
import { styled } from "@mui/material";
import {useSelector} from "react-redux";
interface Iprop {
  day: any;
}
const DayBox = ({ day }: Iprop) => {
  const dayString = () => getDay(day.Date);
  const viewCelsius = useSelector((state: any) => state.app).viewCelsius;

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
        {convertDegrees(viewCelsius,false,day.Temperature.Minimum.Value)} -
        {convertDegrees(viewCelsius,false,day.Temperature.Maximum.Value)}
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
