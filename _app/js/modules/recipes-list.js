import FavoriteButton from "./favorite-button.js";
import GetFavoriteRecipeLocally from "./get-favorite-recipe-locally.js";
/**
Renders a list of recipes on the page.
@param {Array} recipes - An array of objects containing recipe information.
*/

export default function RenderRecipes(recipes) {
	const frontPageRecipesContainer = document.querySelector('.recipes__list');
	const favoritePageRecipesContainer = document.querySelector('.recipes__favorite-list');
	const favoriteButtonLocally = GetFavoriteRecipeLocally();

	if (frontPageRecipesContainer || favoritePageRecipesContainer) {
		renderHTML();
	}
	
	/**
	Creates elements for recipe objects
	@param {Object} recipe - An object containing recipe information.
	@returns {HTMLElement} - A recipe DOM element
	*/

	function returnRecipeDOMElement(recipe) {
		const recipeSlug = recipe.slug;
		const recipeID = recipe.id;
		const recipeURL = `/_app/recipe-description/index.html?recipe=${recipeSlug}`;
		const recipeImageURL = recipe.image.imageURL;
		const recipeName = recipe.recipeName;
		const cookTime = recipe.cookTime;

		const recipeCardElement = document.createElement('a');
		const recipeImageElement = document.createElement('div');
		const recipeFavoriteButtonElement = document.createElement('button');
		const recipeInformationContainerElement = document.createElement('div');
		const recipeInformationTitleElement = document.createElement('h3');
		const recipeInformationTimeContainerElement = document.createElement('div');
		const recipeInformationTimeIconElement = document.createElement('div');
		const recipeInformationTimeElement = document.createElement('div');

		recipeFavoriteButtonElement.addEventListener('click', FavoriteButton);

		recipeCardElement.setAttribute('href', recipeURL);
		recipeImageElement.style.backgroundImage = `url('${recipeImageURL}')`;
		recipeInformationTitleElement.textContent = recipeName;
		recipeInformationTimeElement.textContent = `${cookTime} min`;

		recipeCardElement.classList.add('recipes__list-element', 'grid__column-mobile--12', 'grid__column--3');
		recipeImageElement.classList.add('recipes__list-element-image');
		recipeFavoriteButtonElement.classList.add('recipes__list-element-favorite-button');
		if (favoriteButtonLocally.includes(recipeID)) {
			recipeFavoriteButtonElement.classList.add('recipes__list-element-favorite-button--active');
		}
		recipeInformationContainerElement.classList.add('recipes__list-element-information');
		recipeInformationTitleElement.classList.add('recipes__information-title');
		recipeInformationTimeContainerElement.classList.add('recipes__information-time');
		recipeInformationTimeIconElement.classList.add('recipes__information-time-icon');

		recipeCardElement.dataset.id = recipeID;
		recipeFavoriteButtonElement.dataset.id = recipeID;

		recipeImageElement.appendChild(recipeFavoriteButtonElement);

		recipeInformationTimeContainerElement.append(
			recipeInformationTimeIconElement,
			recipeInformationTimeElement
		)
		recipeInformationContainerElement.append(
			recipeInformationTitleElement, 
			recipeInformationTimeContainerElement);

		recipeCardElement.append(
			recipeImageElement, 
			recipeInformationContainerElement);

		return recipeCardElement;		
	}

	/**
	Renders HTML for each recipe in the recipes array
	*/
	function renderHTML() {

		if (frontPageRecipesContainer) {
			recipes.forEach(recipe => {
				const recipeElement = returnRecipeDOMElement(recipe);

				frontPageRecipesContainer.appendChild(recipeElement);
			});
		
		} else if (favoritePageRecipesContainer) {
			const filteredRecipes = recipes.filter(recipe => {
				return favoriteButtonLocally.includes(recipe.id);
			});
			// storedArray is parsed from the local storage using JSON.parse().
			// The filter() method is used to check if each recipe.id exists within the storedArray.The includes() method is used to perform the existence check.
			// The filteredRecipes array will contain the recipes whose IDs match the ones stored in storedArray.

			filteredRecipes.forEach(recipe => {
				const recipeElement = returnRecipeDOMElement(recipe);

				favoritePageRecipesContainer.appendChild(recipeElement);
			});
		}
	}
}