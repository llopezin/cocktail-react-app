import React from "react";
import "./cocktail-list.css";

function CocktailListItem({ cocktail, addToFavourites }) {
  return (
    <div className="cocktail-list-item">
      <img src="" alt="" />
      <h3 className="cocktail-list-item__name">{cocktail.name}</h3>
      {
        <div className="cocktail-list-item__ingredients">
          {cocktail.ingredients.map((ingredient, i) => (
            <span className="cocktail-list-item__ingredient" key={i}>
              {ingredient.name}
            </span>
          ))}
        </div>
      }
      <button
        onClick={() => {
          addToFavourites(cocktail.id);
        }}
      >
        Add To Favourites
      </button>
    </div>
  );
}

export default CocktailListItem;
