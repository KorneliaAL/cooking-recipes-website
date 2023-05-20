import RenderRecipes from "./recipes-list.js";

/**
 * Represents a RecipeSearch.
 * @param {Array} recipes - The array of recipes.
 */
export default function RecipeSearch(recipes) {
	// Variables to store search results and final recipe
	let searchResults = [];
	let finalRecipe = [];

	// Get the search input and search container elements
	const searchInput = document.querySelector('.search__input');
	const searchContainer = document.querySelector('.search');

	// Prepare recipe search data for filtering
	const recipeSearchData = recipes.map(function (recipe) {
		return {
			recipeName: recipe.recipeName,
			category: recipe.category.name
		};
	});

	/**
	 * Delays the execution of a function using the debounce technique.
	 * Used the code from: https://www.freecodecamp.org/news/javascript-debounce-example/
	 */
	function debounce(func, timeout = 300) {
		let timer;
		return function (...args) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(this, args);
			}, timeout);
		};
	}

	/**
	 * Handles the debounced search input event.
	 */
	function handleSearchInputInput() {
		filterRecipes();
		RenderRecipes(finalRecipe);
	}

	/**
	 * Filters the recipes based on the search input value.
	 */
	function filterRecipes() {
		const searchValue = searchInput.value.trim().toLowerCase();

		if (searchValue !== '') {
			searchResults = recipeSearchData.filter((recipe) => {
				return (
					recipe.recipeName.toLowerCase().includes(searchValue) ||
					recipe.category.toLowerCase().includes(searchValue)
				);
			});
			// Check if the recipe matches the search results
			finalRecipe = recipes.filter((recipe) => {
				return searchResults.some((result) => {
					return (
						result.recipeName === recipe.recipeName &&
						result.category === recipe.category.name
					);
				});
			});
			// No search value, display all recipes
		} else {
			finalRecipe = recipes;
		}
	}

	// Attach the debounced search input event listener
	searchInput.addEventListener('input', debounce(handleSearchInputInput));

	// Perform initial search handling
	if (searchContainer && searchInput.value !== '') {
		handleSearchInputInput();
	} else if (searchContainer) {
		RenderRecipes(recipes);
	}
}
