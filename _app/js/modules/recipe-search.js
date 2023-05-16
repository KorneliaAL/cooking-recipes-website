import RenderRecipes from "./recipes-list.js";

export default function RecipeSearch(recipes) {
	const searchInput = document.querySelector('.search__input');

	const recipeSearchData = recipes.map(function (recipe) {
		return {
			recipeName: recipe.recipeName,
			category: recipe.category.name
		};
	});

	if (searchInput.value !== '') {
		handleSearchInputInput();
	} else {
		RenderRecipes(recipes);
	}

	// Used the code from:
	// https://www.freecodecamp.org/news/javascript-debounce-example/
	function debounce(func, timeout = 300) {
		let timer;
		return function (...args) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(this, args);
			}, timeout);
		};
	}

	const handleSearchInputInput = debounce(() => {
		const searchValue = searchInput.value.trim().toLowerCase();
		let searchResults = [];
		let finalRecipe = [];

		if (searchValue !== '') {
			searchResults = recipeSearchData.filter((recipe) => {
				return (
					recipe.recipeName.toLowerCase().includes(searchValue) ||
					recipe.category.toLowerCase().includes(searchValue)
				);
			});
			finalRecipe = recipes.filter((recipe) => {
				return searchResults.some((result) => {
					return (
						result.recipeName === recipe.recipeName &&
						result.category === recipe.category.name
					);
				});
			});
		} else {
			finalRecipe = recipes;
		}
		RenderRecipes(finalRecipe);
	});
}
