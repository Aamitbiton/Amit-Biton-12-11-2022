import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../store/slice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (to: string) => {
    navigate(to);
  };
  const changeTheme = () => {
    dispatch(setDarkMode(false));
  };
  const isFavorite = () => window.location.href.includes("favorites");
  return (
    <HeaderWrapper>
      <ButtonContainer>
        <Button
          onClick={() => handleClick("/")}
          color={!isFavorite() ? "primary" : "inherit"}
          variant="text"
        >
          Home
        </Button>
        |
        <Button
          onClick={() => handleClick("/favorites")}
          color={isFavorite() ? "primary" : "inherit"}
          variant="text"
        >
          Favorites
        </Button>
      </ButtonContainer>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  position: static;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  top: 0;
  padding: 5px;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default Header;
