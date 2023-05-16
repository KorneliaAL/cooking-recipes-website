import RenderRecipes from "./recipes-list.js";
export default function RecipeSearch(recipes) {

	const searchInput = document.querySelector('.search__input');
	const searchContainer = document.querySelector('.search');

	const recipeSearchData = recipes.map(function (recipe) {
		return {
			recipeName: recipe.recipeName,
			category: recipe.category.name
		};
	});

	searchInput.addEventListener('input', handleSearchInputInput);

	if (searchContainer) {
		handleSearchInputInput();
	}

	function handleSearchInputInput(event) {
		const searchValue = event.target.value.trim().toLowerCase();
		let searchResults = [];
		let finalRecipe = [];
		if (searchValue !== '') {
			searchResults = recipeSearchData.filter((recipe) => {
				return (
					recipe.recipeName.toLowerCase().includes(searchValue) ||
					recipe.category.toLowerCase().includes(searchValue)
				);
			});
		}
		finalRecipe = recipes.filter((recipe) => {
			return searchResults.some((result) => {
				return (
					result.recipeName === recipe.recipeName &&
					result.category === recipe.category.name
				);
			});
		});

		RenderRecipes(finalRecipe);
	}
}