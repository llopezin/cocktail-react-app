export function removeDuplicates(arr) {
  let set = new Set(arr);
  return [...set];
}

export function filterCocktails(searchValue, cocktails) {
  let matches = [];

  if (searchValue.length < 1) {
    return matches;
  }
  cocktails.forEach((cocktail) => {
    let ingredientsMatch = cocktail.ingredients.filter((ingredient) => {
      return ingredient.name.indexOf(searchValue) > -1;
    });
    if (
      cocktail.name.toLocaleLowerCase().indexOf(searchValue) > -1 ||
      ingredientsMatch.length > 0
    ) {
      matches.push(cocktail);
    }
  });

  return matches;
}
