import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import {changeCurrentLocation, getAutoCompleteData, getLocationLabel} from "../utils/weatherUtils";
import styled from "styled-components";

const SearchBar = () => {
  const currentLocation = useSelector(
    (state: any) => state.app
  ).currentLocation;

  const [value, setValue] = useState<string | null>("");
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<any>([{ currentLocation }]);

  const handleChange = async (newValue: any) => {
      if (!newValue) {
          setValue('')
          return
      }
    setValue(newValue);
      await changeCurrentLocation(newValue);
  };
  const updateOptions = async (newInputValue: string)=>{
       setInputValue(newInputValue);
       if (newInputValue.length < 1 || !newInputValue || newInputValue === "") return;
       const newOptions = await getAutoCompleteData(newInputValue)
       setOptions(newOptions?.data)
   }

  return (
    <SearchBarWrapper>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: any) => {
          handleChange(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          updateOptions(newInputValue)
        }}
        id="controllable-states-demo"
        getOptionLabel={(option) => getLocationLabel(option)}
        options={options}
        sx={{width: '350px'}}
        renderInput={(params) => (
          <TextField {...params} label="search by country or city" />
        )}
      />
    </SearchBarWrapper>
  );
};
const SearchBarWrapper = styled.div`
    margin-bottom: 10px;
`
export default SearchBar;
