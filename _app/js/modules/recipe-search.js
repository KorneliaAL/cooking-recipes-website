import RenderRecipes from "./recipes-list.js";

export default function RecipeSearch(recipes) {
	let searchResults = [];
	let finalRecipe = [];
	const searchInput = document.querySelector('.search__input');
	const searchContainer = document.querySelector('.search');

	const recipeSearchData = recipes.map(function (recipe) {
		return {
			recipeName: recipe.recipeName,
			category: recipe.category.name
		};
	});

	searchInput.addEventListener('input', debounce(handleSearchInputInput));

	if (searchContainer && searchInput.value !== '') {
		handleSearchInputInput();
	} else if (searchContainer) {
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

	function handleSearchInputInput() {
		filterRecipes();
		RenderRecipes(finalRecipe);
	}

	function filterRecipes() {
		const searchValue = searchInput.value.trim().toLowerCase();


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
	}
}
