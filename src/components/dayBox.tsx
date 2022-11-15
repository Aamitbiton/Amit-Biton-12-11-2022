import React from 'react';
import styled from "styled-components";
interface Iprop{day: string}
const DayBox = ({day}: Iprop) => {
    return (
        <DayBoxContainer>
            <p>{day}</p>
        </DayBoxContainer>
    );
};
const DayBoxContainer = styled.div`
  position: relative;
  background-color: var(--primary-color);
  box-shadow: 0 21px 40px -16px #131335;
  border-radius: 15px;
  padding: 8px 16px;
`;
export default DayBox;