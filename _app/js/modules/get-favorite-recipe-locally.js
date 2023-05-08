export default function GetFavoriteRecipeLocally() {

	const key = 'favorite-recipes';
	const favoriteRecipeAsString = window.localStorage.getItem(key);

	if (favoriteRecipeAsString) {
		return JSON.parse(favoriteRecipeAsString);
	} else {
		return [];
	}
}