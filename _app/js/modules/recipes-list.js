/**
Renders a list of recipes on the page.
@param {Array} recipes - An array of objects containing recipe information.
*/

export default function RenderRecipes(recipes) {
	const recipesContainer = document.querySelector('.recipes__list');


	if (recipesContainer) {
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
		const recipeURL = `/_app/recipe-description/inedx.html?recipe=${recipeSlug}`;
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
		recipes.forEach(recipe => {
			const recipeElement = returnRecipeDOMElement(recipe);

			recipesContainer.appendChild(recipeElement)
		});
	}
}