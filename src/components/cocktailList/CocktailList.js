import React from "react";
import CocktailListItem from "./CocktailListItem";
import "./cocktail-list.css";

function CocktailList({ cocktails, addToFavourites }) {
  return (
    <div className="cocktail-list">
      {cocktails.map((cocktailItem) => (
        <CocktailListItem
          cocktail={cocktailItem}
          addToFavourites={addToFavourites}
          key={cocktailItem.id}
        />
      ))}
    </div>
  );
}

export default CocktailList;
