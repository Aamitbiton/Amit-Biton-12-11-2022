import React from 'react';
import styled from "styled-components";
import {convertFahrenheitToCelsius, getDay} from "../utils/utils";
import WeatherIcon from "./WeatherIcon";
interface Iprop{day: any}
const DayBox = ({day}: Iprop) => {
    const dayString = ()=> getDay(day.Date)
    const shortenString = (string: string)=>{
        let split = string.split(' ')
        let newArray = [split[0],split[1]]
        return newArray.join(' ')
    }
    return (
        <DayBoxContainer>
            <TitleWrapper>
                <p>{dayString()}</p>
                <p>{shortenString(day.Day.IconPhrase)}</p>
            </TitleWrapper>
            <WeatherIcon iconKey={ JSON.stringify(day.Day.Icon)}/>
            <p>{convertFahrenheitToCelsius(day.Temperature.Minimum.Value)} - {convertFahrenheitToCelsius(day.Temperature.Maximum.Value)}c</p>

        </DayBoxContainer>
    );
};
const DayBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  background-color: var(--primary-color);
  box-shadow: 0 21px 40px -16px #131335;
  border-radius: 15px;
  padding: 8px 16px;
`;
const TitleWrapper = styled.div`
flex-grow: 1`
export default DayBox;