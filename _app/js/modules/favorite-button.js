/**
 * Represents a favorite button.
 * @param {Event} event - The event that triggered the button click.
 */

export default function FavoriteButton(event) {
	event.preventDefault();

	let favoritesRecipe = getFavoriteRecipeLocally();
	const currentButton = event.target;

	/**
	 * Handles the click event on the favorite button.
	 */

	function handleFavoriteButtonClick() {
		const id = currentButton.dataset.id;
		toggleFavoriteRecipe(id);
		renderHTML();
	}

	/**
	 * Toggles the favorite status of a recipe.
	 * @param {string} id - The ID of the recipe.
	 */

	function toggleFavoriteRecipe(id) {
		if (favoritesRecipe.includes(id)) {
			// Recipe already in favorites, remove it
			favoritesRecipe = favoritesRecipe.filter(recipeId => recipeId !== id);
			currentButton.textContent = 'Add to favorites';
		} else {
			// Recipe not in favorites, add it
			favoritesRecipe.push(id);
			currentButton.textContent = 'Remove from favorites';
		}

		storeFavoriteRecipeLocally();
	}

	/**
	 * Retrieves the favorite recipes stored locally.
	 * @returns {Array<string>} - The array of favorite recipe IDs.
	 */

	function getFavoriteRecipeLocally() {
		const key = 'favorite-recipes';
		const favoriteRecipeAsString = window.localStorage.getItem(key);

		if (favoriteRecipeAsString) {
			return JSON.parse(favoriteRecipeAsString);
		} else {
			return [];
		}
	}

	/**
	 * Stores the favorite recipes locally.
	 */

	function storeFavoriteRecipeLocally() {
		const value = JSON.stringify(favoritesRecipe);
		const key = 'favorite-recipes';
		window.localStorage.setItem(key, value);
	}

	/**
	 * Renders the HTML to reflect the updated favorite status.
	 */

	function renderHTML() {
		currentButton.classList.toggle('favorite-button--active');
	}

	handleFavoriteButtonClick();
}
