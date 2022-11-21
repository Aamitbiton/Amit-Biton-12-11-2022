import React from "react";
import styled from "styled-components";
import FavoriteBox from "../components/FavoriteBox";
import { useSelector } from "react-redux";
import IFavorite from "../models/types.model";

const Favorites = () => {
  const favorites = useSelector((state: any) => state.app).favorites;

  return (
    <FavoritesWrapper>
      {favorites.length ? (
        favorites.map((favorite: IFavorite) => (
          <FavoriteBox
            key={favorite.id}
            favorites={favorites}
            favorite={favorite}
          />
        ))
      ) : (
        <EmptyWrapper>no favorites</EmptyWrapper>
      )}
    </FavoritesWrapper>
  );
};
const FavoritesWrapper = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  justify-items: center;
`;
const EmptyWrapper = styled.h1`
  display: flex;
  place-content: center;
`;
export default Favorites;
