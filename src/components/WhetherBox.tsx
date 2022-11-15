import React from "react";
import { useSelector } from "react-redux";
import { getLocationLabel } from "../utils/weatherUtils";
import WeatherIcon from "./WeatherIcon";
import styled from "styled-components";
import DayBox from "./dayBox";

const WhetherBox = () => {
    const days = ['ראשון','שני','שלישי','רביעי','חמישי']
  const currentLocation = useSelector(
    (state: any) => state.app
  ).currentLocation;

  return (
    <WhetherBoxContainer>
      <h1>{getLocationLabel(currentLocation)}</h1>
      <p>{currentLocation?.WeatherText}</p>
      <p>
        {currentLocation?.Temperature?.Metric?.Value +
          currentLocation?.Temperature?.Metric?.Unit}
      </p>
        <WeatherIcon iconKey={ JSON.stringify(currentLocation.WeatherIcon)}/>
         <DayBoxContainer>
             {days.map((day)=>{
               return  <DayBox day={day}/>

             })}
         </DayBoxContainer>
    </WhetherBoxContainer>
  );
};
const WhetherBoxContainer = styled.div`
  height: 80%;
  background-color: var(--surface-color);
  box-shadow: 0 21px 40px -16px #131335;
  border-radius: 15px;
  padding: 8px 16px;
`;
const DayBoxContainer = styled.div`
  margin: 16px 0;
  display: grid;
  grid-gap: 16px;
  align-items: stretch;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
`
export default WhetherBox;
