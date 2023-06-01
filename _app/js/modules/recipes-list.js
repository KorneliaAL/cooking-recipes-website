import FavoriteButton from "./favorite-button.js";
import GetFavoriteRecipeLocally from "./get-favorite-recipe-locally.js";
/**
* Renders a list of recipes on the page.
* @param {Array} recipes - An array of objects containing recipe information.
*/

export default function RenderRecipes(recipes) {
	const frontPageRecipesContainer = document.querySelector('.recipes__front-page');
	const favoritePageRecipesContainer = document.querySelector('.recipes__favorite-list');
	const recipePageRecipesContainer = document.querySelector('.recipes__recipes-page');
	const recipeRouletteContainer = document.querySelector('.recipe-roulette__recipe-card');
	const rouletteButton = document.querySelector('.recipe__roulette-button');
	const favoriteRecipes = GetFavoriteRecipeLocally();

	if (frontPageRecipesContainer || favoritePageRecipesContainer || recipePageRecipesContainer) {
		renderHTML();
	}

	if (recipeRouletteContainer) {
		handleRouletteButtonClick();
		addBlurClass();
		rouletteButton.addEventListener('click', handleRouletteButtonClick);
	}
	
	/**
	Creates elements for recipe objects
	@param {Object} recipe - An object containing recipe information.
	@returns {HTMLElement} - A recipe DOM element
	*/

	function handleRouletteButtonClick() {
		const recipeRoulette = getRandomRecipe();

		renderRouletteRecipe(recipeRoulette);
	}

	/**
	 * Retrieves a random recipe.
	 * @returns {Object} Random recipe with the category "Dinner".
	*/

	function getRandomRecipe() {
		const dinnerRecipes = recipes.filter(recipe => {
			return recipe.category.name === 'Dinner';
		});

		const randomRecipeIndex = Math.floor(Math.random() * dinnerRecipes.length);
		const recipeRoulette = dinnerRecipes[randomRecipeIndex];

		return recipeRoulette
	}

	function addBlurClass() {
		recipeRouletteContainer.classList.add('recipe-roulette__recipe-card--blur');
	}


	/**
	* Returns a DOM element representing a recipe.
	* @param {Object} recipe - The recipe object.
	* @returns {HTMLElement} DOM element representing the recipe.
	*/
	function returnRecipeDOMElement(recipe) {
		const recipeSlug = recipe.slug;
		const recipeID = recipe.id;
		const recipeURL = `/recipe-description/index.html?recipe=${recipeSlug}`;
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
		recipeFavoriteButtonElement.classList.add('favorite-button', 'favorite-button__recipe-list');
		
		if (favoriteRecipes.includes(recipeID)) {
			recipeFavoriteButtonElement.classList.add('favorite-button--active');
			recipeFavoriteButtonElement.textContent = 'Remove from favorites';
		} else {
			recipeFavoriteButtonElement.textContent = 'Add to favorites';
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

	function getEightElements(recipes) {
		const frontpageRecipesArray = [];
		for (let index = 0; index < 8; index += 1) {
			if (index < recipes.length) {
				frontpageRecipesArray.push(recipes[index]);
			}
		}
		return frontpageRecipesArray;
	}
	/**
	Renders HTML for each recipe in the recipes array
	*/
	function renderHTML() {
		if (frontPageRecipesContainer) {
			const firstEightRecipes = getEightElements(recipes);

			firstEightRecipes.forEach(recipe => {
				const recipeElement = returnRecipeDOMElement(recipe);
				frontPageRecipesContainer.appendChild(recipeElement);
			});
		}

		// Displays all the recipes
		if (recipePageRecipesContainer) {
			recipePageRecipesContainer.textContent = '';
			recipes.forEach(recipe => {
				const recipeElement = returnRecipeDOMElement(recipe);

				recipePageRecipesContainer.appendChild(recipeElement);
			});
		
		// favoriteRecipes is parsed from the local storage using JSON.parse().
		// The filter() method is used to check if each recipe.id exists within the favoriteRecipes.The includes() method is used to perform the existence check.
		// The filteredRecipes array will contain the recipes whose IDs match the ones stored in favoriteRecipes.
		} else if (favoritePageRecipesContainer) {
			const filteredRecipes = recipes.filter(recipe => {
				return favoriteRecipes.includes(recipe.id);
			});
		
			filteredRecipes.forEach(recipe => {
				const recipeElement = returnRecipeDOMElement(recipe);

				favoritePageRecipesContainer.appendChild(recipeElement);
			});
		} 
	}

	function renderRouletteRecipe(recipe) {
		recipeRouletteContainer.textContent = '';
		if (recipeRouletteContainer.classList.contains('recipe-roulette__recipe-card--blur')) {
			recipeRouletteContainer.classList.remove('recipe-roulette__recipe-card--blur');
		} 
			const rouletteRecipe = returnRecipeDOMElement(recipe);
			recipeRouletteContainer.appendChild(rouletteRecipe);
	}
}