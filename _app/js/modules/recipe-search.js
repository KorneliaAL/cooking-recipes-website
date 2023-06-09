import RenderRecipes from "./recipes-list.js";

/**
 * @todo Update the logic to check if the category is active.
 *   If the category is active, remove the active state when using the search bar.
 */

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
	const searchButton = document.querySelector('.search__button');

	// Creates new array 
	const recipeSearchData = recipes.map(function (recipe) {
		return {
			recipeName: recipe.recipeName,
			category: recipe.category.name
		};
	});

	if (searchContainer) {
		// Event listeners
		searchInput.addEventListener('input', debounce(handleSearchInputInput));
		searchButton.addEventListener('click', handleSearchButtonClick);
		searchInput.addEventListener('keyup', handleEnterKeyup);
	}

	function handleEnterKeyup(event) {
		if (event.key === 'Enter') {
			filterRecipes();
			RenderRecipes(finalRecipe);
		}	
	}

	function handleSearchInputInput() {
		filterRecipes();
		RenderRecipes(finalRecipe);
	}

	function handleSearchButtonClick(event) {
		event.preventDefault();
		filterRecipes();
		RenderRecipes(finalRecipe);
	}

	/**
	 * Filters the recipes based on the search input value.
	 */
	function filterRecipes() {
		// Extracts the search value from the search input element and normalizes it
		const searchValue = searchInput.value.trim().toLowerCase();

		// Filters the recipeSearchData array based on whether the recipe name or category includes the search value
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
		// No search value, displays all recipes
		} else {
			finalRecipe = recipes;
		}
	}

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
}
