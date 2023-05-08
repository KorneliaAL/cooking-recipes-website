export default function FavoriteButton(event) {
	event.preventDefault();
	const currentButton = event.target;
	let favoritesRecipe = getFavoriteRecipeLocally();

	console.log(favoritesRecipe);

	function handleFavoriteButtonClick() {
		const id = currentButton.dataset.id;
		toggleFavoriteRecipe(id);
		renderHTML();
	}

	function toggleFavoriteRecipe(id) {
		if (favoritesRecipe.includes(id)) {
			// Recipe already in favorites, remove it
			favoritesRecipe = favoritesRecipe.filter(recipeId => recipeId !== id);
		} else {
			// Recipe not in favorites, add it
			favoritesRecipe.push(id);
		}

		storeFavoriteRecipeLocally();
	}

	function getFavoriteRecipeLocally() {
		const key = 'favorite-recipes';
		const favoriteRecipeAsString = window.localStorage.getItem(key);

		if (favoriteRecipeAsString) {
			return JSON.parse(favoriteRecipeAsString);
		} else {
			return [];
		}
	}

	function storeFavoriteRecipeLocally() {
		const value = JSON.stringify(favoritesRecipe);
		const key = 'favorite-recipes';
		window.localStorage.setItem(key, value);
	}

	function renderHTML() {
		currentButton.classList.toggle('recipes__list-element-favorite-button--active');
	}

	handleFavoriteButtonClick();
}
