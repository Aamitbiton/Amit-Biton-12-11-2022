import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";

import {changeCurrentLocation, getAutoCompleteData, getLocationLabel} from "../utils/weatherUtils";

const SearchBar = () => {
  const currentLocation = useSelector(
    (state: any) => state.app
  ).currentLocation;

  const [value, setValue] = useState<string | null>("");
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<any>([{ currentLocation }]);

  const handleChange = async (newValue: any) => {
    setValue(newValue);
    await changeCurrentLocation(newValue);
  };
  const updateOptions = async (newInputValue: string)=>{
       setInputValue(newInputValue);
       if (newInputValue.length < 2) return;
       const newOptions = await getAutoCompleteData(newInputValue)
       setOptions(newOptions?.data)
   }

  return (
    <div>
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
        fullWidth={true}
        renderInput={(params) => (
          <TextField {...params} label="search by country or city" />
        )}
      />
    </div>
  );
};

export default SearchBar;
