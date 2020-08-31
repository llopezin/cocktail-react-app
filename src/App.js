import React, { useState } from "react";
import Search from "./components/search/search";
import QuickLinks from "./components/quickLinks/QuickLinks";
import CocktailList from "./components/cocktailList/CocktailList";
import { removeDuplicates, filterCocktails } from "./helpers";

function App() {
  const cocktails = [
    {
      id: 1,
      name: "Habana Mama",
      ingredients: [
        { name: "rum", ml: 60, isBaseIngredient: true },
        { name: "coconut rum", ml: 30 },
        { name: "coffe liqueur", ml: 15 },
        { name: "lemon juice", ml: 15 },
        { name: "Pineapple Juice", ml: 120 },
      ],
      isFavourite: false,
    },
    {
      id: 2,
      name: "Bees Knees",
      ingredients: [
        { name: "gin", ml: 60, isBaseIngredient: true },
        { name: "lemon juice", ml: 30 },
        { name: "honey syrup", ml: 30 },
      ],
      isFavourite: false,
    },
    {
      id: 3,
      name: "White Russian",
      ingredients: [
        { name: "vodka", ml: 30, isBaseIngredient: true },
        { name: "coffe liqueur", ml: 30 },
        { name: "heavy cream", ml: 30 },
      ],
    },
    {
      id: 4,
      name: "Mud Slide",
      ingredients: [
        { name: "vodka", ml: 30, isBaseIngredient: true },
        { name: "coffe liqueur", ml: 30 },
        { name: "irish cream", ml: 30 },
        { name: "heavy cream", ml: 45 },
      ],
      isFavourite: false,
    },
    {
      id: 5,
      name: "Margarita",
      ingredients: [
        { name: "tequila", ml: 45, isBaseIngredient: true },
        { name: "triple sec", ml: 30 },
        { name: "lime juice", ml: 30 },
      ],
      isFavourite: false,
    },
  ];

  const [results, setresults] = useState([]);
  const [showList, setShowList] = useState(false);
  const [list, setList] = useState([]);

  const showCocktails = (bool) => {
    setShowList(bool);
  };

  const setSearchResults = (searchValue) => {
    setresults(filterCocktails(searchValue, cocktails));
  };

  const setListByIngredient = (ingredientName) => {
    setList(filterCocktails(ingredientName, cocktails));
  };

  const getBaseIngredients = () => {
    let baseIngredients = [];
    cocktails.forEach((cocktail) => {
      cocktail.ingredients.forEach((ingredient) => {
        if (ingredient.isBaseIngredient === true) {
          baseIngredients.push(ingredient.name);
        }
      });
    });
    return removeDuplicates(baseIngredients);
  };

  const addToFavourites = (id) => {
    let cocktail = cocktails.find((cocktail) => {
      return cocktail.id === id;
    });

    cocktail.isFavourite = !cocktail.isFavourite;
    console.log(cocktail);
  };

  return (
    <div className="app">
      <header>
        <h1>Cocktail App</h1>
        <Search search={setSearchResults} results={results} />
        <QuickLinks
          baseIngredients={getBaseIngredients()}
          search={setListByIngredient}
          showList={showCocktails}
        />
      </header>
      <main>
        <CocktailList
          cocktails={list}
          show={showList}
          addToFavourites={addToFavourites}
        />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
